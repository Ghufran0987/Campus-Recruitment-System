import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import RegisterScreen from './RegisterScreen';
import mainCompany from './mainCompany';
import { auth } from "./firebase";

export default function Login({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('mainCompany');
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {
       auth
       .signInWithEmailAndPassword(email,password)
       .catch((error)=>alert(error.message)) 
    }


    return (
        <View style={styles.container}>
            <StatusBar />

            <ImageBackground style={{ width: "100%", height: "100%", }} source={{ uri: 'data:image/jpeg;base64,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' }}>
                <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 90, color: 'white' }}>{"Company Login "}</Text>
                <StatusBar style="auto" />
                <TextInput style={{ height: 40, width: 250,marginTop:20, borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: '#305249', borderRadius: 12 }} type='email' value={email} onChangeText={(text) => setEmail(text)} placeholder={"   Enter Username"} />
                <TextInput style={{ height: 40,textDecorationLine:'none',textDecorationLine:'none', width: 250,marginTop:20, textAlign: 'center', marginLeft: 50, backgroundColor: '#305249', borderRadius: 12 }} type='password' value={password} onChangeText={(text) => setPassword(text)} placeholder={"   Enter Password"} secureTextEntry={true} onSubmitEditing={signIn} />

                <TouchableOpacity>
                    <Text style={styles.btn} onPress={signIn}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn2} onPress={() => navigation.navigate('RegisterScreen')} >Register</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btn2} onPress={() => navigation.navigate('Start')} >Back To Main</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
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
        backgroundColor: '#1f2b27',
        height: 30,
        width: 150,
        textAlign: 'center', 
        color: '#1c1111',
        borderRadius: 11,
    },
    btn2:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#1f2b27',
        height: 30,
        width: 150,
        textAlign: 'center', 
        color: '#1c1111',
        borderRadius: 11,
    },
});
