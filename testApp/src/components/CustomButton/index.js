import React from 'react';
import { StyleSheet,  TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ PropStylesButton, PropStylesText, text, PropFunction }) {
    return (
        <>
        <TouchableOpacity style={[styles.container, PropStylesButton]} activeOpacity={0.75} onPress={PropFunction}>
            <Text style={[styles.text, PropStylesText]}>{text}</Text>
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
    },

    text: {
        alignSelf: 'center',
    }

});