import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import CustomButton from '../CustomButton';

import { useCounterContext } from '../../context/contextProvider';

export default function BottomHalf() {
    const counterContext = useCounterContext();

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return (
        <>
            <View style={[styles.buttonRow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]}>
                <CustomButton PropIconName={'minus'} PropStylesButton={[styles.button, { marginRight: 5 }]} PropStylesText={styles.buttonIcon} PropFunction={() => counterContext.setCount(counterContext.count - 1)} />

                <CustomButton PropIconName={'plus'} PropStylesButton={[styles.button, { marginLeft: 5 }]} PropStylesText={styles.buttonIcon} PropFunction={() => counterContext.setCount(counterContext.count + 1)} />
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

    buttonRow: {
        backgroundColor: windowColorTransparent,
        borderRadius: cornerRadius,
        // height: '50%',
        // width: windowWidth - 10,
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    // ((windowWidth - 10) - 2*((windowWidth/2)-40))/3

    button: {
        flex: 1,
        height: '100%',
        backgroundColor: buttonColor,
        // width: (windowWidth/2)-40,
        borderRadius: cornerRadius,
        // marginHorizontal: 10,

    },

    buttonIcon: {
        fontFamily: font,
        color: fontColor,
        fontSize: 50,

    },

});