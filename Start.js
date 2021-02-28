import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import RegisterScreen from './RegisterScreen';
import adminLogin from './adminLogin';
import companyLogin from './companyLogin';
import studentLogin from './studentLogin';
import { auth } from "./firebase";
import mainAdmin from './mainAdmin';

export default function Login({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

   


    return (
        <View style={styles.container}>
            {/* <ImageBackground style={{ width: "100%", height: "100%", }} source={{ uri: 'https://i.pinimg.com/736x/50/b6/ea/50b6ea3cd344b170fbd2c069418ad8c9.jpg' }}>
                <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 160, color: 'white' }}>{"Athar Rasool"}</Text>
                <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 10, color: 'white' }}>{"Blood Bank Login "}</Text>
                <StatusBar style="auto" />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='email' value={email} onChangeText={(text) => setEmail(text)} placeholder={"   Enter Username"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 10, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='password' value={password} onChangeText={(text) => setPassword(text)} placeholder={"   Enter Password"} secureTextEntry={true} onSubmitEditing={signIn} />

                <TouchableOpacity>
                    <Text style={styles.btn} onPress={signIn}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn2} onPress={() => navigation.navigate('RegisterScreen')} >Register</Text>
                </TouchableOpacity>
            </ImageBackground> */}
<StatusBar />
            <Text style={styles.heading}> 
                Welcome to Campus Recruitment System
            </Text>
            

           
                <TouchableOpacity onPress={() => navigation.navigate('companyLogin')} >
                    <Text style={styles.btn}>Company Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('studentLogin')} >
                    <Text style={styles.btn}>Student Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('mainAdmin')} >
                    <Text style={styles.btn}>Admin Login</Text>
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
        fontSize: 20,
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
        fontSize:50,
        backgroundColor:'white'
    }
});
