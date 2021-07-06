import React  from "react";
import { useState } from "react";
import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {connect} from 'react-redux'
import {sendData} from '../store/actions'

 function SignUp(props){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


 
    return(
        <View>
           <TextInput onChangeText={(text)=>setName(text)} keyboardType="default" style={styles.input} placeholder="Enter Your Name"/>
           <TextInput onChangeText={(text)=>setEmail(text)} keyboardType="email-address" style={styles.input} placeholder="Enter Email"/>
           <TextInput onChangeText={(text)=>setPassword(text)} secureTextEntry ={true }style={styles.input} placeholder="Enter Password"/>
           <TouchableOpacity style={styles.button} onPress={()=>props.sendData(name,email,password)}>
               <Text>Sign Up</Text>
           </TouchableOpacity>
        </View>
    )
    
}

const mapDispatchToProps=(dispatch)=>({
    sendData:(name,email,password)=>dispatch(sendData(name,email,password))
 
 })


const styles=StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})
export default connect(null,mapDispatchToProps)(SignUp)



  

