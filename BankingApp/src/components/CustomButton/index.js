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
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    text: {
        fontSize: 50,
    }

});