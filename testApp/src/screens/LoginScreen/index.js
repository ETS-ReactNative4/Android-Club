import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import CustomButton from '../../components/CustomButton';

export default function LoginScreen() {
    return (
        <>
            <ImageBackground source={require('../../../assets/BG.png')} style={styles.container} blurRadius={5}>
                <View style={styles.boxOne}>
                    <Image source={require('../../../assets/Shaurya_White.png')} style={styles.logoSR} />
                    <MyTextInput PropStyles={styles.inputUser} placeholderTextColor='#707070' secureTextEntry={false} placeholder='E-Mail' keyboardType='email-address' autoComplete='email' />
                    <MyTextInput PropStyles={styles.inputPassword} placeholderTextColor='#707070' secureTextEntry={true} placeholder='Password' autoComplete='password' />
                    <Text style={styles.forgotPassword}>Forgot Password</Text>
                    <View style={styles.boxTwo}>
                        <CustomButton text='Sign In' PropStylesButton={styles.signInButton} PropStylesText={styles.signInText} PropFunction={() => console.log("Sign In")} />
                        <CustomButton text='Sign Up' PropStylesButton={styles.signUpButton} PropStylesText={styles.signUpText} PropFunction={() => console.log("Sign Up")} />
                    </View>
                    <Image source={require('../../../assets/ACLogoHF.png')} style={styles.logoAC} />
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
    },

    boxOne: {
        top: 70,
        flex: 1,
        width: 300,
        paddingHorizontal: 50,
        //backgroundColor: 'white',
        //borderRadius: 20,
        alignItems: 'center',
    },

    logoSR: {
        resizeMode: 'contain',
        width: '100%',
        height: 150,
    },

    logoAC: {
        top: 80,
        marginTop: 50,
        resizeMode: 'contain',
        width: '100%',
        height: 125,
    },

    inputUser: {
        backgroundColor: '#353535',
        color: 'white',
        width: 250,
    },

    inputPassword: {
        top: 10,
        backgroundColor: '#9d9d9d',
        color: 'white',
        width: 250,
    },

    forgotPassword: {
        top: 20,
        alignSelf: 'flex-end',
        fontSize: 12,
        color: '#ffffff',
        textDecorationLine: 'underline',
    },

    boxTwo: {
        top: 40,
        width: 250,
        height: 40,
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    signInButton: {
        backgroundColor: '#c81f22',
        width: 115,
    },

    signInText: {
        color: '#ffffff',
    },

    signUpButton: {
        backgroundColor: '#303030',
        width: 115,
    },

    signUpText: {
        color: '#ffffff',
    },

});