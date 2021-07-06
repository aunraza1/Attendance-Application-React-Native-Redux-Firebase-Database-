import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Text,View,TouchableOpacity,Button,StyleSheet,ScrollView} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {connect} from 'react-redux'
import {logs} from '../store/actions'



function AttendanceLogs(props){

useEffect(()=>{
    props.logs(props.loggedUser,(data)=>setObj(data))

},[])


const [obj,setObj]=useState({})
    return(
        <>
        <ScrollView>
       <View style={styles.container}>
           <View>
               <Text>{props.loggedUser}</Text>
           </View>

          
           <Grid style={{borderWidth:  1 ,flex:0.3}}>
        
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
          
  
         </View>
         </ScrollView>

        </>

    )

}

const styles=StyleSheet.create({

    container: {
     flex:1,
     backgroundColor:'grey',
   
    },
    content:{
        color:'blue'
    }
  
  })

  const mapStateToProps=(state)=>({
    loggedUser:state.loggedUser
  })
  const mapDispatchToProps=(dispatch)=>({
      logs:(user,data)=>dispatch(logs(user,data))
  })

export default connect(mapStateToProps,mapDispatchToProps) (AttendanceLogs)