import database, { firebase } from '@react-native-firebase/database'



const sendData=(name,email,password)=>{

    return(dispatch)=>{
        console.log("Hello-World")
        console.log(name)
        console.log(email)
        console.log(password)
       

var emails=[]   
database().ref('/Employees').once('value',(snapshot)=>{
    snapshot.forEach((child)=>{
        emails.push(child.val().email)

    })
 var flag=false;
 emails.map((v,i)=>{
     if(emails[i]===email){
         alert("Email Already Exist Try with some other credentials!")
         flag=true;
     }
 })

if(flag==false){
    console.log(name,email,password)
    var key = database().ref('/Employees').push().key
    let obj={
    key:key,
    name:name,
    email:email,
    password:password
    
    }
    database().ref('Employees/'+key).set(obj,(err)=>{
        if(err){
            alert("Some Thing Went Wrong!")
        }
        else{
            alert("Sign up successfull!")
        }
    })
}
})

}
}

const signin=(email,password,status)=>{
    return(dispatch)=>{
var names=[];
var emails=[];
var passwords=[];        
database().ref('/Employees').once('value',(snapshot)=>{
snapshot.forEach((child)=>{
    names.push(child.val().name)
    emails.push(child.val().email)
    passwords.push(child.val().password)
})
var flag=false;
emails.map((v,i)=>{
    if(emails[i]===email && passwords[i]==password){
        flag=true
        alert("Login Successfull!")
        status(true)
        dispatch({type:"LoggedIn",data:names[i]})
        
    
    }
 
})
if(flag==false){
    alert("Wrong Credentials")
}

})

    }
}

const removeLoggedUser=()=>{
     return(dispatch)=>{
    dispatch({type:"REMOVE_LOGGED_USER",data:""})

     }
}

const addCheckin=(time,date,user,)=>{



   debugger

    return(dispatch)=>{
            var check=[]
            database().ref('employyeAttendance').orderByChild('check').equalTo(user+date).once('value',(snapshot)=>{
             snapshot.forEach((child)=>{
                 check.push(child.val().check)
   
             })
            if(check[0]!==user+date){
                var key= database().ref('/employeeAttendance').push().key
                var obj= {
                    key:key,
                    checkInTime:time,
                    checkInDate:date,
                    employeeName:user,
                    checkOutTime:"Not Checked Out",
                    checkOutDay:"Not Checked Out",
                    check:user+date,
                    status:"Checked In"
                }
            
                database().ref('/employyeAttendance/'+key).set(obj,(err)=>{
                    if(err){
                        alert("Some Thing Went Wrong!")
                    }
                    else{
                        dispatch({type:"BTN_NAME_OUT",data:"Check Out"})
                        alert(`Welcome to office ${user} ,you checked in at ${time}`)
                        
                        
                      
                    }
                })

            }
            else{
                alert("You cannot check in twice in a same day!")
            }
           

})

    }
}

const addCheckout=(time,today,user)=>{

    return(dispatch)=>{
        let newData ={
           checkOutDay:today,
           checkOutTime:time,
           status:'Checked Out',
        }
        
     var query= database().ref('employyeAttendance').orderByChild('check').equalTo(user+today)
        query.on("child_added",(snapshot)=>{
                   snapshot.ref.update(newData)
               })
               dispatch({type:"REMOVE_LOGGED_USER",data:""})
               
            
    }

}


const getStatus=(user,today)=>{
 return(dispatch)=>{
  
     var arr=[];
     database().ref('employyeAttendance').orderByChild('check').equalTo(user+today).once('value',(snapshot)=>{
        snapshot.forEach((child)=>{
       arr.push(child.val().status)
        
        })
     if(arr[0]=="Checked In"){
         dispatch({type:"BTN_NAME_OUT",data:"Check Out"})
     }
     else {
         dispatch({type:"BTN_NAME_IN",data:"Check In"})
     }
     
   })
}

}

const logs=(user,data)=>{

    return(dispatch)=>{
     var checkinDates=[];
     var checkinTimes=[];
     var checkoutDates=[];
     var checkoutTimes=[]
    database().ref('employyeAttendance').orderByChild('employeeName').equalTo(user).once('value',(snapshot)=>{
     snapshot.forEach((child)=>{
        checkinDates.push(child.val().checkInDate)
        checkinTimes.push(child.val().checkInTime)
        checkoutDates.push(child.val().checkOutDay)
        checkoutTimes.push(child.val().checkOutTime)
     })
     console.log(checkinDates)
     console.log(checkinTimes)
     console.log(checkoutDates)
     console.log(checkoutTimes)
     let obj={
         checkinDates:checkinDates,
         checkinTimes:checkinTimes,
         checkoutDates:checkoutDates,
         checkoutTimes:checkoutTimes,
        
     }
     data(obj)
    })
    }
}

const adminLogin=(email,password,login)=>{

    return(dispatch)=>{
            
    var emails=[];
    var passwords=[]

    database().ref('adminDetails').once('value',(snapshot)=>{
        snapshot.forEach((child)=>{
            emails.push(child.val().email)
            passwords.push(child.val().password)

        })
   
   

        console.log(email)
        console.log(password)
        var flag = false;
        emails.map((v,i)=>{
            if(emails[i]==email && passwords[i]==password){
             flag=true
             alert("Login Successfull!")
             login(true)
             dispatch({type:"ADMIN_LOGIN",data:true})

            }

        })
        if(flag==false){
            alert("Wrong Credentials!")
        }
    })

    
    }
}

const getEmployees=(employee,data)=>{
    return(dispatch)=>{
    var employees=[]
    database().ref('Employees').once('value',(snapshot)=>{
        snapshot.forEach((child)=>{
            employees.push(child.val().name)
        })
        
        var flag=false
        employees.map((v,i)=>{
            if(employees[i]===employee){
                flag=true
                var checkinDates=[];
                var checkinTimes=[];
                var checkoutDates=[];
                var checkoutTimes=[];
                database().ref('employyeAttendance').orderByChild('employeeName').equalTo(employee).once('value',(snapshot)=>{
                    snapshot.forEach((child)=>{
                        checkinDates.push(child.val().checkInDate)
                        checkinTimes.push(child.val().checkInTime)
                        checkoutDates.push(child.val().checkOutDay)
                        checkoutTimes.push(child.val().checkOutTime)

                    })
                  

                    let obj={
                        checkinDates:checkinDates,
                        checkinTimes:checkinTimes,
                        checkoutDates:checkoutDates,
                        checkoutTimes:checkoutTimes,
                    }
                    data(obj)
                   
                })

            }

        })
        if(flag==false){
            alert("No Such Employee Exist!")
        }
  
           
           })
          
        
    }



}
const removeEmployee=(employee)=>{
  return(dispatch)=>{

    var names=[];
    database().ref('Employees').once('value',(snapshot)=>{
        snapshot.forEach((child)=>{
            names.push(child.val().name)

        })
        var flag= false
        names.map((v,i)=>{
            if(names[i]===employee){
                flag =true;
                var keys=[];
                database().ref('Employees').orderByChild('name').equalTo(employee).once('value',(snapshot)=>{
                    snapshot.forEach((child)=>{
                        keys.push(child.val().key)

                    })
                    database().ref('Employees/'+keys[0]).remove()
                    alert("Reccored Deleted Successfully!")
                })     

            }

        })

        if(flag==false){
            alert("No Such Employee Exist!")
        }
    })
  }
    

}



const showEmployees=()=>{
    return(dispatch)=>{

    }
}

export{
    sendData,
    signin,
    removeLoggedUser,
    addCheckin,
    addCheckout,
    getStatus,
    logs,
    adminLogin,
    getEmployees,
    removeEmployee,
    showEmployees
}
