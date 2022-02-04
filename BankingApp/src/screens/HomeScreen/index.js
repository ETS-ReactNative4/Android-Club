import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, useWindowDimensions, StatusBar, Modal } from 'react-native';
import ImageButton from '../../components/ImageButton';
import ImageTextButton from '../../components/ImageTextButton';
import ImagePlus from '../../components/BackgroundImage';
import TextButton from '../../components/TextButton';
import CardComponent from '../../components/CardBox';

export default function Home() {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [showModal, setShowModal] = useState(false);
    let firstName = 'John';
    let lastName = 'Doe';
    let widthNeg = 20;
    // let cardVendorLogo = "require('../../assets/Images/MasterCardIcon.png')";
    // Figure out how to set variable to path and pass variables to props for custom component

    return (
        <>
            <ImagePlus />
            {/* <StatusBar hidden={true} /> */}
            <ScrollView style={styles.scrollable} >
                <View style={[styles.container, { height: windowHeight, width: windowWidth }]}>
                    {/* <View style={styles.container}> */}

                    <View style={[styles.credBox, { width: windowWidth - widthNeg }]}>
                        <View style={styles.credBoxUser}>
                            <ImageButton PropStylesImage={styles.profileIcon} propImageLink={require('../../assets/Images/ProfileIcon.png')} />
                            <Text style={styles.userName}>Hello, {firstName}</Text>
                        </View>
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.searchIcon} propImageLink={require('../../assets/Images/SearchIcon.png')} />

                        <Modal transparent={true} visible={showModal} onRequestClose={() => { setShowModal(!showModal) }} animationType='fade'>
                            <View style={[styles.modalContainer, { height: windowHeight, width: windowWidth }]}>
                                <View style={styles.modalPopup} >
                                    <Text style={styles.modalText}>This feature does not work.</Text>
                                    <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.closeIcon} propImageLink={require('../../assets/Images/CloseIcon.png')} />
                                </View>
                            </View>
                        </Modal>

                    </View>

                    <CardComponent cardType='EBI Titanium Card' userF={firstName} userL={lastName} balance={'42,069.00'} accNumber='NI69420CE' cardVendor={require('../../assets/Images/MasterCardIcon.png')} />


                    <View style={[styles.featuresBox, { width: windowWidth - widthNeg }]}>
                        <View style={styles.featuresTextRow}>
                            <Text style={styles.featuresH1}>Features</Text>
                            <TextButton PropStylesText={styles.featuresH2} PropText='See More' />
                        </View>
                        <View style={styles.featuresButtonRow}>
                            <ImageTextButton PropText='Send' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} />
                            <ImageTextButton PropText='Receive' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} />
                            <ImageTextButton PropText='Rewards' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} />
                        </View>
                    </View>


                </View>
            </ScrollView>
        </>
    )
}

let cornerRadius = 35;
let darkestText = '#202020';
let darkerText = '#303030';
let boxColour = '#efefef';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,0.6)',
        // width: '100%',
        // height: '100%',
        alignItems: 'center',

    },

    credBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        backgroundColor: boxColour,
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 5,
        // borderBottomRightRadius: cornerRadius,
        // borderBottomLeftRadius: cornerRadius,
        borderRadius: cornerRadius,
        // elevation: 5,

    },

    credBoxUser: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    profileIcon: {
        resizeMode: 'contain',
        height: 50,
        width: 50,

    },

    searchIcon: {
        resizeMode: 'contain',
        height: 50,
        width: 50,

    },

    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: darkestText,
        marginHorizontal: 10,

    },

    modalContainer: {
        justifyContent: 'center',
        flex: 1,

    },

    modalPopup: {
        height: 250,
        alignSelf: 'center',
        width: '70%',
        backgroundColor: boxColour,
        borderRadius: cornerRadius,
        alignItems: 'center',
        padding: 30,
        justifyContent: 'space-between',
        elevation: 10,

    },

    modalText: {
        fontSize: 34,
        color: '#202020',

    },

    closeIcon: {
        resizeMode: 'contain',
        height: 65,
        width: 65,

    },

    featuresBox: {
        backgroundColor: boxColour,
        borderRadius: 15,
        padding: 15,
        // width: '90%',
        marginVertical: 5,

    },

    featuresTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

    },

    featuresH1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: darkestText,

    },

    featuresH2: {
        fontSize: 16,
        color: darkerText,

    },

    featuresButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        marginVertical: 10,

    },

    featuresButtonText: {
        fontSize: 18,
        color: darkestText,
        fontWeight: 'bold',

    },

    featuresButton: {
        width: '31%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,

    }

})