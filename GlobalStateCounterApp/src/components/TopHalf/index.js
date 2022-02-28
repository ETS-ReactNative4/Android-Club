import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function TopHalf() {
    const [count, setCount] = useState(0);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    let fontColor = '#ebebeb';
    if (count < 0) {
        fontColor = '#282828';
    } else {
        fontColor = '#ebebeb';
    }

    return (
        <>
                <View style={[styles.countWindow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]} >
                    <Text style={[styles.counter, { color: fontColor, }]}>{count}</Text>
                </View>
        </>
    )
}

let cornerRadius = 35;
let windowColorTransparent = 'rgba(40,40,40,0.4)';
let fontColor = '#ebebeb';
let buttonColor = '#202020';
let font = 'Roboto-Regular';


const styles = StyleSheet.create({
   
    countWindow: {
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: windowColorTransparent,
        // height: '50%',
        // width: windowWidth - 10,
        borderRadius: cornerRadius,
        justifyContent: 'center',
        alignItems: 'center',

    },

    counter: {
        // alignSelf: 'center',
        fontFamily: font,
        fontSize: 150,
        // color: fontColor,

    },

    buttonRow: {
        backgroundColor: windowColorTransparent,
        borderRadius: cornerRadius,
        // height: '50%',
        // width: windowWidth - 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },

    // ((windowWidth - 10) - 2*((windowWidth/2)-40))/3

    addButton: {
        backgroundColor: buttonColor,
        // width: (windowWidth/2)-40,
        borderRadius: cornerRadius,

    },

    subButton: {
        backgroundColor: buttonColor,
        // width: (windowWidth/2)-40,
        borderRadius: cornerRadius,

    },

    addButtonText: {
        fontFamily: font,
        color: fontColor,

    },

    subButtonText: {
        fontFamily: font,
        color: fontColor,

    },

});