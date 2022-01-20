import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, useWindowDimensions } from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function CounterScreen() {
    const [count, setCount] = useState(0);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return (
        <>
            <Image source={require('../../assets/Gradient.png')} style={styles.bg} />
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={[styles.countWindow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]} >
                    <Text style={styles.counter}>{count}</Text>
                </View>
                <View style={[styles.buttonRow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]}>
                    <CustomButton PropText="-" PropStylesButton={[styles.subButton, { width: (windowWidth / 2) - 40, height: (windowHeight * 0.5) - 55 }]} PropStylesText={styles.subButtonText} PropFunction={() => setCount(count - 1)} />

                    <CustomButton PropText="+" PropStylesButton={[styles.addButton, { width: (windowWidth / 2) - 40, height: (windowHeight * 0.5) - 55 }]} PropStylesText={styles.addButtonText} PropFunction={() => setCount(count + 1)} />
                </View>
                {/* <View style={[styles.logoBox, { width: windowWidth - 20 }]} >
                    <Image source={require('../../assets/ACLogoHF.png')} style={styles.logo} />
                </View> */}
            </View>
        </>
    )
}

let cornerRadius = 35;
let windowColorTransparent = 'rgba(20,20,20,0.3)';
let fontColor = 'white';
let buttonColor = '#202020';

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

    title: {
        color: fontColor,
        // fontWeight: 'bold',
        fontSize: 40,

    },

    countWindow: {
        marginTop: 10,
        marginBottom: 5,
        // padding: 15,
        backgroundColor: windowColorTransparent,
        // height: '50%',
        // width: windowWidth - 10,
        borderRadius: cornerRadius,
        justifyContent: 'center',

    },

    counter: {
        alignSelf: 'center',
        fontSize: 150,
        fontWeight: 'bold',
        color: fontColor,

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
        color: fontColor,

    },

    subButtonText: {
        color: fontColor,

    },

    logoBox: {
        marginVertical: 5,
        backgroundColor: windowColorTransparent,
        height: 250,
        borderRadius: cornerRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        resizeMode: 'contain',
        height: 175,
    },

});