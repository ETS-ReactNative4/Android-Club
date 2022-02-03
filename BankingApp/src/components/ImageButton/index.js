import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ImageButton({ PropStylesButton, PropStylesImage, PropFunction, propImageLink }) {
    return (
        <>
            <TouchableOpacity style={[styles.container, PropStylesButton]} activeOpacity={0.9} onPress={PropFunction}>
                <Image source={propImageLink} style={[styles.image, PropStylesImage]} />
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
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    }

});