import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Attendance from '../screens/Attendance';
import SignUp from '../screens/SignUp'
import SignIn from '../screens/Signin';
import AttendanceLogs from '../screens/AttendaceLogs';
import EmployeeAttendance from '../screens/EmployeeAttendance';
import AdminSignin from '../screens/AdminSignin';
import DeleteEmployee from '../screens/DeleteEmployee';

const Stack = createStackNavigator();

export default function Navigation(){
    return(

        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Attendance" component={Attendance}/>
            <Stack.Screen name="Signup" component={SignUp}/>
            <Stack.Screen name="Signin" component={SignIn}/>
            <Stack.Screen name="Attendance Logs" component={AttendanceLogs}/>
            <Stack.Screen name="Employee Attendance" component={EmployeeAttendance}/>
            <Stack.Screen name="Admin Login" component={AdminSignin}/>
            <Stack.Screen name="Delete Employee" component={DeleteEmployee}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}