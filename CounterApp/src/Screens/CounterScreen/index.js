import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, useWindowDimensions } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function CounterScreen() {
    const [count, setCount] = useState(0);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    let fontColor = '#ebebeb';
    if (count < 0) {
        fontColor = '#404040';
    }

    return (
        <>
            <Image source={require('../../assets/Gradient.png')} style={styles.bg} />
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.loopOuter} >
                    <View style={styles.loopMid} >
                        <View style={styles.loopInner} />
                    </View>
                </View>

                <View style={styles.boxOuter} >
                    <View style={styles.boxMid} >
                        <View style={styles.boxInner} />
                    </View>
                </View>

                <View style={[styles.countWindow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]} >
                    <Text style={[styles.counter, { color: fontColor, }]}>{count}</Text>
                </View>
                <View style={[styles.buttonRow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]}>
                    <CustomButton PropText="-" PropStylesButton={[styles.subButton, { width: (windowWidth / 2) - 40, height: (windowHeight * 0.5) - 55 }]} PropStylesText={styles.subButtonText} PropFunction={() => setCount(count - 1)} />

                    <CustomButton PropText="+" PropStylesButton={[styles.addButton, { width: (windowWidth / 2) - 40, height: (windowHeight * 0.5) - 55 }]} PropStylesText={styles.addButtonText} PropFunction={() => setCount(count + 1)} />
                </View>
            </View>
        </>
    )
}

let cornerRadius = 35;
let windowColorTransparent = 'rgba(255,255,255,0.4)';
let fontColor = '#ebebeb';
let buttonColor = '#202020';
let font = 'Roboto-Regular';
let loopColor = '#bdbdbd';


const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        resizeMode: 'cover',
        height: '100%',
        width: '100%',

    },

    container: {
        flex: 1,
        alignItems: 'center',

    },

    loopOuter: {
        position: 'absolute',
        borderWidth: 5,
        borderColor: loopColor,
        borderRadius: 200,
        height: 400,
        width: 400,
        right: -200,
        top: -200,
        justifyContent: 'center',
        alignItems: 'center',

    },

    loopMid: {
        borderWidth: 5,
        borderColor: loopColor,
        borderRadius: 175,
        height: 350,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',

    },

    loopInner: {
        borderWidth: 5,
        borderColor: loopColor,
        borderRadius: 150,
        height: 300,
        width: 300,

    },

    boxOuter: {
        position: 'absolute',
        borderWidth: 5,
        borderColor: loopColor,
        height: 300,
        width: 300,
        left: -100,
        bottom: -100,
        transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',

    },

    boxMid: {
        borderWidth: 5,
        borderColor: loopColor,
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',

    },

    boxInner: {
        borderWidth: 5,
        borderColor: loopColor,
        height: 200,
        width: 200,

    },

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