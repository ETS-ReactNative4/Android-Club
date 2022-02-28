import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import CustomButton from '../CustomButton';

export default function BottomHalf() {
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
            <View style={[styles.buttonRow, { width: windowWidth - 20, height: (windowHeight * 0.5) - 15 }]}>
                <CustomButton PropIconName={'minus'} PropStylesButton={[styles.button, { width: (windowWidth / 2) - 40, height: (windowHeight * 0.5) - 55 }]} PropStylesText={styles.buttonIcon} PropFunction={() => setCount(count - 1)} />

                <CustomButton PropIconName={'plus'} PropStylesButton={[styles.button, { width: (windowWidth / 2) - 40, height: (windowHeight * 0.5) - 55 }]} PropStylesText={styles.buttonIcon} PropFunction={() => setCount(count + 1)} />
            </View>
            {/* </View> */}
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
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },

    // ((windowWidth - 10) - 2*((windowWidth/2)-40))/3

    button: {
        backgroundColor: buttonColor,
        // width: (windowWidth/2)-40,
        borderRadius: cornerRadius,

    },

    buttonIcon: {
        fontFamily: font,
        color: fontColor,
        fontSize: 50,

    },

});