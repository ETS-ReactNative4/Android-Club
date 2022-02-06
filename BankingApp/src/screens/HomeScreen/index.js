import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, useWindowDimensions, StatusBar, Modal } from 'react-native';
import ImageButton from '../../components/ImageButton';
import ImageTextButton from '../../components/ImageTextButton';
import TextButton from '../../components/TextButton';
import CardComponent from '../../components/CardBox';
import ImageBackground from '../../components/BackgroundImage';

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
            <ImageBackground />
            <StatusBar hidden={true} />
            <ScrollView contentContainerStyle={styles.scrollableContainer} style={styles.container} >
                <View style={[styles.credBox, { width: windowWidth - widthNeg }]}>
                    <View style={styles.credBoxUser}>
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.profileIcon} propImageLink={require('../../assets/Images/ProfileIcon.png')} />
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

                {/* <View style={styles.scrollCardsContainer} > */}
                <ScrollView contentContainerStyle={styles.scrollCardsContainer} style={styles.scrollCards} showsHorizontalScrollIndicator={false} horizontal={true} snapToInterval={335 + 10} snapToAlignment={'center'} decelerationRate={0.95} overScrollMode={'never'} >
                    <CardComponent cardType='EBI Titanium Card' userF={firstName} userL={lastName} balance={'42,069.00'} accNumber='NI69420CE' cardVendor={require('../../assets/Images/MasterCardIcon.png')} cardVendorStyle={styles.cardLogoMasterCard} cardBG={require('../../assets/Images/Gradient.png')} />

                    <CardComponent cardType='UPI Titanium Card' userF={firstName} userL={lastName} balance={'42,069.00'} accNumber='VM10262SS' cardVendor={require('../../assets/Images/MasterCardIcon.png')} cardVendorStyle={styles.cardLogoMasterCard} cardBG={require('../../assets/Images/Gradient2.png')} />

                    <CardComponent cardType='XYZ Platinum Card' userF={firstName} userL={lastName} balance={'13,375.00'} accNumber='CR13375AP' cardVendor={require('../../assets/Images/VisaIcon.png')} cardVendorStyle={styles.cardLogoVisa} cardBG={require('../../assets/Images/Gradient3.png')} />

                </ScrollView>
                {/* </View> */}

                <View style={[styles.featuresBox, { width: windowWidth - widthNeg }]}>
                    <View style={styles.featuresTextRow}>
                        <Text style={styles.featuresH1}>Features</Text>
                        <TextButton PropStylesText={styles.featuresH2} PropText='See More' />
                    </View>
                    <View style={styles.featuresButtonRow}>
                        <ImageTextButton PropText='Send' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} propImageLink={require('../../assets/Images/SendIcon.png')} PropStylesImage={styles.featuresIcon} />
                        <ImageTextButton PropText='Receive' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} propImageLink={require('../../assets/Images/ReceiveIcon.png')} PropStylesImage={styles.featuresIcon} />
                        <ImageTextButton PropText='Rewards' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} propImageLink={require('../../assets/Images/RewardsIcon.png')} PropStylesImage={styles.featuresIcon} />
                    </View>
                </View>

                <View style={[styles.recentBox, { width: windowWidth - widthNeg }]}>
                    <View style={styles.recentTextRow}>
                        <Text>Recent Activity</Text>
                    </View>


                </View>
            </ScrollView>
        </>
    )
}

let cornerRadius = 35;
let darkestText = '#202020';
let darkerText = '#303030';
let boxColour = '#fafafa';
let lightFont = 'Montserrat-Light';
let boldFont = 'Montserrat-Regular';

const styles = StyleSheet.create({

    scrollableContainer: {
        // flex: 1,
        alignItems: 'center',
        // display: 'none',
    },

    container: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,0.6)',
        // alignItems: 'center',

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
        borderRadius: cornerRadius,
        elevation: 10,

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
        // fontWeight: 'bold',
        color: darkestText,
        marginHorizontal: 10,
        fontFamily: boldFont,
    },

    modalContainer: {
        justifyContent: 'center',
        flex: 1,

    },

    modalPopup: {
        // height: 225,
        alignSelf: 'center',
        width: 300,
        backgroundColor: boxColour,
        borderRadius: cornerRadius,
        borderWidth: 5,
        borderColor: 'rgba(255,255,255,0.25)',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
        elevation: 10,

    },

    modalText: {
        fontSize: 26,
        color: darkestText,
        fontFamily: boldFont,

    },

    closeIcon: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
        margin: 10,

    },

    scrollCardsContainer: {
        margin: 5,
        // backgroundColor: 'black',
    },

    scrollCards: {
        // backgroundColor: 'black',
        width: '100%',

    },

    cardLogoVisa: {
        position: 'absolute',
        right: 0,
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginHorizontal: 10,
        //  backgroundColor: 'black',
    },

    cardLogoMasterCard: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginHorizontal: 10,
        //  backgroundColor: 'black',

    },

    featuresBox: {
        elevation: 10,
        backgroundColor: boxColour,
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        // borderColor: borderColour,

    },

    featuresTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5,

    },

    featuresH1: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: darkestText,
        fontFamily: boldFont,

    },

    featuresH2: {
        fontSize: 14,
        color: darkerText,
        fontFamily: lightFont,

    },

    featuresButtonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        // marginVertical: 5,

    },

    featuresButton: {
        width: '32%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        // padding: 10,

    },

    featuresButtonText: {
        fontSize: 14,
        color: darkestText,
        fontFamily: boldFont,
        // paddingHorizontal: 10,
    },

    featuresIcon: {
        height: 25,
        width: 25,
        marginHorizontal: 10,
    },

    recentBox: {
        elevation: 10,
        backgroundColor: boxColour,
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        height: 100,
        // borderColor: borderColour,

    },

    recentTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5,

    },

})