import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ PropStylesButton, PropStylesText, PropText, PropFunction }) {
    return (
        <>
            <TouchableOpacity style={[styles.container, PropStylesButton]} activeOpacity={0.9} onPress={PropFunction}>
                <Text style={[styles.text, PropStylesText]}>{PropText}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        margin: 0,
        borderRadius: 40,
        elevation: 5,
        justifyContent: 'center', 
        alignItems: 'center' 
        
    },

    text: {
        fontSize: 40,
    }

});