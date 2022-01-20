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
        // height: 90,
        // width: 160,
        // margin: 0,
        // borderRadius: 35,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    text: {
        fontSize: 50,
    }

});