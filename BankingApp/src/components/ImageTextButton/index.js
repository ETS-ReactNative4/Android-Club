import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default function ImageTextButton({ PropStylesButton, PropStylesImage, PropFunction, propImageLink, PropText, PropStylesText }) {
    return (
        <>
            <TouchableOpacity style={[styles.container, PropStylesButton]} activeOpacity={0.9} onPress={PropFunction}>
                <Image source={propImageLink} style={[styles.image, PropStylesImage]} />
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

    image: {
        // resizeMode: 'contain',
        // height: '100%',
        // width: '100%',
    },

    text: {
        fontSize: 50,
    }

});