import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ImagePlus() {
    return (
        <>
            {/* <View style={styles.container}> */}
                <Image source={require('../../assets/Images/Gradient.png')} style={styles.bg} />
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
            {/* </View> */}
        </>
    )
}

let loopColor = 'rgba(255,255,255,0.075)';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',

    },

    bg: {
        position: 'absolute',
        resizeMode: 'cover',
        height: '100%',
        width: '100%',

    },

    loopOuter: {
        position: 'absolute',
        backgroundColor: loopColor,
        borderRadius: 200,
        height: 400,
        width: 400,
        right: -150,
        top: -100,
        justifyContent: 'center',
        alignItems: 'center',

    },

    loopMid: {
        backgroundColor: loopColor,
        borderRadius: 150,
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',

    },

    loopInner: {
        backgroundColor: loopColor,
        borderRadius: 100,
        height: 200,
        width: 200,

    },

    boxOuter: {
        position: 'absolute',
        backgroundColor: loopColor,
        height: 400,
        width: 400,
        left: -150,
        bottom: -150,
        transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',

    },

    boxMid: {
        backgroundColor: loopColor,
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',

    },

    boxInner: {
        backgroundColor: loopColor,
        height: 200,
        width: 200,

    },

})