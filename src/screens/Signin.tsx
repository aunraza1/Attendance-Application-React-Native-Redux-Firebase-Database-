import React from 'react'
import {View,TextInput,TouchableOpacity,Text,StyleSheet} from 'react-native'
import {useState} from 'react'
import {connect} from 'react-redux'
import {signin} from '../store/actions'
import { useEffect } from 'react'
 

function SignIn(props){


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [login,setLogin]=useState(false)
useEffect(()=>{
    if(login===true){
        props.navigation.navigate('Home')
    }

},[login])

return(
 
  
<View>
 <TextInput
  onChangeText={(text)=>setEmail(text)} 
  keyboardType="email-address"
   style={styles.input} 
   placeholder="Enter Email"/>

<TextInput 
onChangeText={(text)=>setPassword(text)} 
secureTextEntry ={true }
style={styles.input}
 placeholder="Enter Password"/>

<TouchableOpacity 
style={styles.button}
 onPress={()=>props.signin(email,password,(value)=>setLogin(value))}>
<Text>Sign In</Text>
 </TouchableOpacity>
  </View>
)
}

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


  const mapDispatchToProps=(dispatch)=>({
   signin:(email,password,status)=>dispatch(signin(email,password,status))
  })



export default connect(null,mapDispatchToProps)(SignIn)