import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import RegisterScreen from './RegisterScreen';
import mainStudent from './mainStudent';
import { auth } from "./firebase";

export default function Login({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('mainStudent');
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {
       auth
       .signInWithEmailAndPassword(email,password)
       .catch((error)=>alert(error.message)) 
    }


    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#94e3bb',
        height: 30,
        width: 150,
        textAlign: 'center', color: '#3f6e5c',
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
});
