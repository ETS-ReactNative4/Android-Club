import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function MyTextInput({ PropStyles, placeholder, placeholderTextColor, secureTextEntry, keyboardType, autoComplete }) {
    return (
        <>
            <TextInput placeholder={placeholder} style={[styles.InputField, PropStyles]} placeholderTextColor={placeholderTextColor} secureTextEntry={secureTextEntry} keyboardType={keyboardType} autoComplete={autoComplete} />
        </>
    )
}

const styles = StyleSheet.create({
    InputField: {
        padding: 10,
        paddingLeft:15,
        height: 40,
        width: 200,
        margin: 0,
        borderRadius: 25,
    }

});