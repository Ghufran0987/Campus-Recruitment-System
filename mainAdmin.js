import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import RegisterScreen from './RegisterScreen';
import adminLogin from './adminLogin';
import { auth } from "./firebase";
import Student from './Student';
import Company from './Company';
export default function Login({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

   


    return (
        <View style={styles.container}>
           
<StatusBar />
            <Text style={styles.heading}>
                Welcome to Admin Panel
            </Text>
            <Text></Text>
           <TouchableOpacity onPress={() => navigation.navigate('Student')} >
               <Text style={styles.btn}>View Companies Data
               
               </Text>
           </TouchableOpacity>
            <Text></Text>

            <TouchableOpacity onPress={() => navigation.navigate('Company')} >
               <Text style={styles.btn}>
                   View Students Data               
               </Text>
           </TouchableOpacity>

            <Text></Text>


            <TouchableOpacity onPress={() => navigation.navigate('Start')} >
               <Text style={styles.btn}>
               Log Out               
               </Text>
           </TouchableOpacity>
     

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
        padding:30,
        backgroundColor:'rgb(65, 18, 137)',
        
    },
    btn:
    {
        ontSize: 20,
        marginTop:40,
        backgroundColor: 'black',
        height: 30,
        width: 150,
        textAlign: 'center', color: 'white',
        borderRadius: 11,
    },
    btn2:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#94e3bb',
        height: 30,
        width: 150,
        textAlign: 'center', color: '#3f6e5c',
        borderRadius: 11,
    },
    heading:{
        fontSize:28,
        color:'#fff'
    }
});
