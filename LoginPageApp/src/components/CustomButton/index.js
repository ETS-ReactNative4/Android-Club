import React from 'react';
import { StyleSheet,  TouchableOpacity, Text } from 'react-native';

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
        padding: 10,
        height: 40,
        width: 200,
        margin: 0,
        borderRadius: 25,
        elevation: 5,
    },

    text: {
        alignSelf: 'center',
    }

});