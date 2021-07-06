import React  from "react";
import {View,StyleSheet,Button,Text,ImageBackground,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { addCheckout } from "../store/actions";





 function Home (props){

return(
    <View style={styles.container}>
   
    <Text style={styles.text}>Are You Present ?</Text>
    

     <View style={styles.imageContainer}>
     <ImageBackground style={styles.image} source={require('../assets/1.jpg')}/>
     </View>
        <View style={styles.btnView}>
       {props.loggedUser!==""? <Button onPress={()=> props.loggedUser? props.navigation.navigate('Attendance'):alert("Login to Mark Your Attendance")} title=" Mark Attendance"></Button>:null}
       {props.loggedUser!==""? <Button onPress={()=>props.navigation.navigate('Attendance Logs')} title="My Attendace Logs"></Button>:null}
       {props.loggedUser || props.adminLogin==true?  null: <Button onPress={()=>props.navigation.navigate('Signup')} title="SignUp "></Button>}
       {props.loggedUser || props.adminLogin==true? null: <Button onPress={()=>props.navigation.navigate('Signin')} title="SignIn "></Button>}
       {props.adminLogin==true? <Button onPress={()=>props.navigation.navigate('Employee Attendance')} title="Check Employee Attendance"></Button> :null}    
       {props.adminLogin==true? <Button onPress={()=>props.navigation.navigate('Delete Employee')} title="Remove Employee"></Button> :null} 
       {props.loggedUser || props.adminLogin==true? null: < TouchableOpacity onPress={()=>props.navigation.navigate('Admin Login')} >
       <Text style={styles.title} >Admin Login</Text>
       </TouchableOpacity>}
        </View>
    </View>
)
}

const styles=StyleSheet.create({

    container:{
        flex:1,
    
    },
    imageContainer:{
        flex:1,
        justifyContent:'center',
        marginTop:100

    },
    image:{
        flex:1,
        height:240,
        width:350
    },
    
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        

    } ,
    title: {
        color: '#acacac',
        fontWeight: 'bold',
        fontSize:18,
        textAlign:'center'
      }

   


})


const mapStateToProps=(state)=>({
    loggedUser:state.loggedUser,
    adminLogin:state.adminLogin,

})

export default connect(mapStateToProps,null) (Home)
