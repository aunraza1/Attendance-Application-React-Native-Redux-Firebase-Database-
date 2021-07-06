import React from 'react'
import { useState } from 'react'
import {getEmployees} from '../store/actions'
import { connect } from 'react-redux'
import {TextInput,View,TouchableOpacity,StyleSheet,Text,ScrollView} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";




function EmployeeAttendance(props){

    const [obj,setobj]=useState({})
    const [click,setClick]=useState(false)
    const [employee,setEmployee]=useState()


    const handleChange=()=>{
   props.getEmployees(employee,(data)=>setobj(data))
   setClick(true)
   
    }

    return(
        <>
        <View>

<Text>Admin Dashboard</Text>
<TextInput placeholder="Enter EmployeeID" onChangeText={(text)=>setEmployee(text)} style={styles.input} />


<TouchableOpacity onPress={()=>handleChange()}>
    <Text>Search</Text>
</TouchableOpacity>

 {click==true?
 <ScrollView>
 <Grid style={{borderWidth:  1 ,flex:0.3}}>
     {console.log("Object=>",obj)}
        
        <Row>
            <Text style={{flex:1, borderWidth:  1}}>Check in Date</Text>
            <Text style={{flex:1, borderWidth:  1}}>Check in Time</Text>
            <Text style={{flex:1, borderWidth:  1}}>Check Out Date</Text>
            <Text style={{flex:1, borderWidth:  1}}>Check Out Time</Text>
        </Row>

 {obj.checkinDates!==undefined? obj.checkinDates.map((v,i)=>{
     return(
     <Row>
         <Text>{v}</Text>
         <Text  style={{flex:1, borderWidth:  1}} >{obj.checkinTimes[i]}</Text>
         <Text style={{flex:1, borderWidth:  1}}>{obj.checkoutDates[i]}</Text>
         <Text style={{flex:1, borderWidth:  1}}>{obj.checkoutTimes[i]}</Text>
     </Row>
     )
 })
 
 
 :null}
    </Grid>
    </ScrollView>
 :null}
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

const  mapDispatchToProps=(dispatch)=>({
getEmployees:(employee,data)=>dispatch(getEmployees(employee,data))


})
export default connect(null,mapDispatchToProps)(EmployeeAttendance)