import React, { useState } from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import { connect } from "react-redux";
import {removeEmployee,showEmployees} from '../store/actions'


function RemoveEmployee(props){
    const [employee,setEmployee]=useState()

 return(
    <>
    <View>
        <TextInput 
        onChangeText={(text)=>setEmployee(text)}
        style={styles.input}
         />

         <TouchableOpacity onPress={()=>props.removeEmployee(employee)}> 
             <Text>Delete Employee</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>props.showEmployees()}> 
             <Text>Show Employees</Text>
         </TouchableOpacity>
    </View>
    </>
 )
}
const styles= StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },


})


const mapDispatchToProps=(dispatch)=>({
    removeEmployee:(employee)=>dispatch(removeEmployee(employee)),
    showEmployees:()=>dispatch(showEmployees())

})
export default connect(null,mapDispatchToProps) (RemoveEmployee)