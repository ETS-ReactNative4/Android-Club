import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, ActivityIndicator, Text } from 'react-native';
import TextButton from '../../components/TextButton';
import ImageBackground from '../../components/BackgroundImage';

export default function Loading({ navigation }) {
    const [showLoad, setShowLoad] = useState(false);
    let displayButton = 'flex';
    let displayIndicator = 'none';

    if (showLoad) {
        displayButton = 'none';
        displayIndicator = 'flex';
    }

    return (
        <>
            <ImageBackground />
            <ScrollView contentContainerStyle={styles.scrollableContainer} style={styles.container} showsVerticalScrollIndicator={false} >
                <Image source={require('../../assets/Images/VIT2-White.png')} style={styles.VIT} />
                <ActivityIndicator size={50} color={'white'} style={[styles.load, { display: displayIndicator }]} animating={showLoad} />
                <View style={styles.textBox} >
                    <Text style={[styles.textOne, { display: displayButton }]} >Payments{'\n'}Made Easy </Text>
                    <Text style={[styles.textTwo, { display: displayButton }]} >A New Way That Makes It Easier For You To Handle Your Transactions, Digitally</Text>
                </View>
                <View style={styles.buttonBox} >
                    <TextButton PropText='Get Started' PropStylesButton={[styles.launchButton, { display: displayButton }]} PropStylesText={styles.LaunchText} PropFunction={() => { setShowLoad(true); setTimeout(() => { setShowLoad(false); navigation.navigate('Home'); return () => clearTimeout(timeout); }, 3500); }}></TextButton>
                </View>
            </ScrollView>
        </>
    )
}

let lightFont = 'Montserrat-Regular';
let boldFont = 'Montserrat-Medium';
let cornerRadius = 15;

const styles = StyleSheet.create({

    scrollableContainer: {
        // flex: 1,
        alignItems: 'center',
        // display: 'none',
    },

    container: {
        flex: 1,
        // alignItems: 'center',

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
        // fontWeight: 'bold',
        fontFamily: boldFont,

    },

    textTwo: {
        fontSize: 17,
        color: '#cdcdcd',
        fontFamily: lightFont,
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
        borderRadius: cornerRadius,
        elevation: 5,

    },

    LaunchText: {
        fontSize: 25,
        color: '#202020',
        // fontWeight: 'bold',
        fontFamily: boldFont,

    },

});