import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import CustomButton from '../../components/CustomButton';

export default function LoginScreen() {
    return (
        <>
            <Image source={require('../../../assets/BG.png')} style={styles.bg} blurRadius={5} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.scrollable}>
                        <Image source={require('../../../assets/Shaurya_White.png')} style={styles.logoSR} />
                        <View style={styles.translucentBox}>
                            <View style={styles.credBox}>
                                <MyTextInput PropStyles={styles.inputEmail} placeholderTextColor='#707070' secureTextEntry={false} placeholder='E-Mail' keyboardType='email-address' autoComplete='email' />
                                <MyTextInput PropStyles={styles.inputPassword} placeholderTextColor='#707070' secureTextEntry={true} placeholder='Password' autoComplete='password' />
                                <Text style={styles.forgotPassword}>Forgot Password</Text>
                            </View>
                            <View style={styles.buttonRow}>
                                <CustomButton text='Sign In' PropStylesButton={styles.signInButton} PropStylesText={styles.signInText} PropFunction={() => console.log("Sign In")} />
                                <CustomButton text='Sign Up' PropStylesButton={styles.signUpButton} PropStylesText={styles.signUpText} PropFunction={() => console.log("Sign Up")} />
                            </View>
                        </View>
                        <Image source={require('../../../assets/ACLogoHF.png')} style={styles.logoAC} />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },

    container: {
    },

    scrollable: {
        paddingVertical: 80,
    },

    logoSR: {
        // top: 70,
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '70%',
        height: 150,
        marginVertical: 5,
    },

    translucentBox: {
        paddingVertical: 7.5,
        marginVertical: 10,
        width: 275,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
        borderRadius: 25,
    },

    credBox: {
        width: 250,
    },

    inputEmail: {
        marginVertical: 5,
        backgroundColor: '#303030',
        color: 'white',
        width: 250,
    },

    inputPassword: {
        marginVertical: 5,
        backgroundColor: '#9d9d9d',
        color: 'white',
        width: 250,
    },

    forgotPassword: {
        alignSelf: 'flex-end',
        marginVertical: 5,
        fontSize: 12,
        color: '#ffffff',
        textDecorationLine: 'underline',
        elevation: 5,
    },

    buttonRow: {
        marginTop: 15,
        marginBottom: 5,
        width: 250,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    signInButton: {
        backgroundColor: '#c81f22',
        width: 120,
        elevation: 5,
    },

    signInText: {
        color: '#ffffff',
    },

    signUpButton: {
        backgroundColor: '#303030',
        width: 120,
        elevation: 10,
    },

    signUpText: {
        color: '#ffffff',
    },

    logoAC: {
        marginVertical: 60,
        resizeMode: 'contain',
        width: 130,
        height: 130,
        alignSelf: 'center',
    },

});