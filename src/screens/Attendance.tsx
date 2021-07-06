import React, { useEffect } from 'react'
import { useState } from 'react'
import {View,Text,Button} from 'react-native'
import {connect} from 'react-redux'
import {addCheckin,addCheckout,getStatus} from '../store/actions'


function Attendance(props){
   
useEffect(()=>{
    var today = new Date();
    var d= new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    props.getStatus(props.loggedUser,today)
  

})

   
    const [checkindate,setcheckindate]=useState('')
    const [checkinTime,setcheckinTime]=useState('')
   
  
    

  
  
  

    const handleChange=()=>{
        
        if(props.btnName==='Check In'){
       var today = new Date();
       var d= new Date()
       var dd = String(today.getDate()).padStart(2, '0');
       var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = today.getFullYear();
       today = mm + '/' + dd + '/' + yyyy;
       var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
       props.addCheckin(time,today,props.loggedUser)
    
      
       
       setcheckinTime(time)
       setcheckindate(today)
       
       
        }
  
        if(props.btnName=="Check Out"){
            var today = new Date();
            var d= new Date()
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
          
           props.addCheckout(time,today,props.loggedUser)
           

            alert(`Your Check Out Time is ${time} Thank You ! See you on next Working Day`)
            props.navigation.navigate('Home')

          

        }

  
    }
       

    return(

        <View>
            <Text>Attedance Screen</Text>
            <Text>{props.loggedUser}</Text>
            <Text>{props.status}</Text>
            <Text>{props.btName}</Text>
            <Button onPress={()=>handleChange()} title={props.btnName} ></Button>
            
            
            
        
          
          
          
        </View>

    )
}

const mapStateToProps=(state)=>({
    loggedUser:state.loggedUser,
    btnName:state.btnName,
    status:state.status,
    btName:state.btnName

})
const mapDispatchToProps=(dispatch)=>({
    addCheckin:(time,date,user)=>dispatch(addCheckin(time,date,user)),
    addCheckout:(time,date,user)=>dispatch(addCheckout(time,date,user)),
    getStatus:(user,today)=>dispatch(getStatus(user,today)),
   
   
    
})
export default connect(mapStateToProps,mapDispatchToProps) (Attendance)
