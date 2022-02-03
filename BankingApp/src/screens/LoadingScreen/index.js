import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView, ActivityIndicator, Text, useWindowDimensions } from 'react-native';
import TextButton from '../../components/TextButton';
import ImagePlus from '../../components/BackgroundImage';

export default function Loading() {
    const [showLoad, setShowLoad] = useState(false);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    let displayButton = 'flex';
    let displayIndicator = 'none';
    if (showLoad) {
        displayButton = 'none';
        displayIndicator = 'flex';
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoad(false);
        }, 3500);

        return () => clearTimeout(timeout);
    }, [showLoad]);

    return (
        <>
            <ImagePlus />
            <View style={[styles.container, { height: windowHeight, width: windowWidth }]}>
                <Image source={require('../../assets/Images/VIT2-White.png')} style={styles.VIT} />
                <ActivityIndicator size={50} color={'white'} style={[styles.load, { display: displayIndicator }]} animating={showLoad} />
                <View style={styles.textBox} >
                    <Text style={[styles.textOne, { display: displayButton }]} >Easy Way{'\n'}To Go Insane</Text>
                    <Text style={[styles.textTwo, { display: displayButton }]} >A New Way That Makes It Easier For You To Go Insane, From Home</Text>
                </View>
                <View style={styles.buttonBox} >
                    <TextButton PropText='Get Started' PropStylesButton={[styles.launchButton, { display: displayButton }]} PropStylesText={styles.LaunchText} PropFunction={() => { setShowLoad(true); }}></TextButton>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',

    },

    VIT: {
        marginTop: 150,
        marginBottom: 50,
        resizeMode: 'contain',
        height: 200,
        width: 200,

    },

    load: {
        marginTop: 20,

    },

    textBox: {
        marginVertical: 20,
        padding: 10,
        width: '90%',

    },

    textOne: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',

    },

    textTwo: {
        fontSize: 17,
        color: '#cdcdcd',
    },

    buttonBox: {
        flexDirection: 'row',
        width: '90%',

    },

    launchButton: {
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        margin: 10,
        width: 200,
        height: 60,
        borderRadius: 12.5,
        elevation: 5,

    },

    LaunchText: {
        fontSize: 25,
        color: '#202020',
        fontWeight: 'bold',

    },

});