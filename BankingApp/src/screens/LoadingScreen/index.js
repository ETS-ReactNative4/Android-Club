import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function Loading() {
    const [showLoad, setShowLoad] = useState(false);
    let displayButton = 'flex';
    if(showLoad) {
        displayButton = 'none';
    }
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoad(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [showLoad]);

    return (
        <>
            <Image source={require('../../assets/Images/Gradient.png')} style={styles.loadingBG} />
            <ScrollView style={styles.scrollable}>
                <View style={styles.container}>
                    <Image source={require('../../assets/Images/VIT2-White.png')} style={styles.VIT} />
                    <CustomButton PropText='Enter' PropStylesButton={[styles.launchButton, { display: displayButton }]} PropStylesText={styles.LaunchText} PropFunction={() => { setShowLoad(true);}}></CustomButton>
                    <ActivityIndicator size={50} color={'#ebebeb'} style={styles.load} animating={showLoad} />
                </View>
            </ScrollView>
        </>
    )
}

let cornerRadius = 35;

const styles = StyleSheet.create({

    loadingBG: {
        position: 'absolute',
        resizeMode: 'cover',
        height: '100%',
        width: '100%',

    },

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },

    VIT: {
        // backgroundColor: 'black',
        // paddingVertical: 250,
        marginTop: 150,
        marginBottom: 50,
        resizeMode: 'contain',
        height: 200,
        width: 200,
    },

    launchButton: {
        backgroundColor: '#ebebeb',
        marginVertical: 20,
        width: 200,
        height: 60,
        borderRadius: cornerRadius,

    },

    LaunchText: {
        fontSize: 25,
        color: '#202020',

    },

    load: {
        marginVertical: 20,
        // height: 60,
        // backgroundColor: 'black',

    }

});