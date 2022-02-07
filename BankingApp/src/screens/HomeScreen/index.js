import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, useWindowDimensions, StatusBar, Modal, FlatList } from 'react-native';
import ImageButton from '../../components/ImageButton';
import ImageTextButton from '../../components/ImageTextButton';
import TextButton from '../../components/TextButton';
import CardComponent from '../../components/CardBox';
import ImageBackground from '../../components/BackgroundImage';
import RecentCards from '../../components/RecentCards';

export default function Home() {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [showModal, setShowModal] = useState(false);
    let firstName = 'John';
    let lastName = 'Doe';
    let widthNeg = 20;
    // let cardVendorLogo = "require('../../assets/Images/MasterCardIcon.png')";
    // Figure out how to set variable to path and pass variables to props for custom component
    const [recentCardsList, setRecentCardsList] = useState([
        { name: 'Gaurav Sekar', date: '19 January 2022', time: '03:23 PM', amount: 149.00, key: '1' },
        { name: 'Nitheesh Raaja', date: '23 January 2022', time: '09:12 AM', amount: -200.30, key: '2' },
        { name: 'Kedar Kulkarni', date: '29 January 2022', time: '01:45 PM', amount: 236.76, key: '3' },
        { name: 'Kartik Prasanna', date: '02 February 2022', time: '03:02 PM', amount: -92.00, key: '4' },
        { name: 'Aswathy Nair', date: '05 February 2022', time: '11:56 AM', amount: 50.00, key: '5' },
    ]);

    const ItemDivider = () => {
        return (
            <View style={{ height: 10, width: "100%" }}
            />
        );
    }

    return (
        <>
            <ImageBackground />
            <StatusBar hidden={true} />
            <View style={[styles.container, { height: windowHeight, width: windowWidth }]}>
                <View style={[styles.credBox, { width: windowWidth - widthNeg }]}>
                    <View style={styles.credBoxUser}>
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.profileIcon} PropImageLink={require('../../assets/Images/ProfileIcon.png')} />
                        <Text style={styles.userName}>Hello, {firstName}</Text>
                    </View>
                    <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.searchIcon} PropImageLink={require('../../assets/Images/SearchIcon.png')} />

                </View>

                {/* Cards Carousel */}
                <View style={styles.scrollCardsContainer}>
                    <ScrollView style={styles.scrollCardsInnnerContainer} showsHorizontalScrollIndicator={false} horizontal={true} snapToInterval={335 + 10} snapToAlignment={'center'} decelerationRate={0.95} overScrollMode={'never'} >

                        <CardComponent cardType='UPI Titanium Card' userF={firstName} userL={lastName} balance={'$57,473.32'} accNumber='VM10262SS' cardVendor={require('../../assets/Images/MasterCardIcon.png')} cardVendorStyle={styles.cardLogoMasterCard} cardBG={require('../../assets/Images/Gradient2.png')} />

                        <CardComponent cardType='EBI Titanium Card' userF={firstName} userL={lastName} balance={'$42,069.00'} accNumber='NI69420CE' cardVendor={require('../../assets/Images/MasterCardIcon.png')} cardVendorStyle={styles.cardLogoMasterCard} cardBG={require('../../assets/Images/Gradient.png')} />

                        <CardComponent cardType='XYZ Platinum Card' userF={firstName} userL={lastName} balance={'$13,375.49'} accNumber='CR13375AP' cardVendor={require('../../assets/Images/VisaIcon.png')} cardVendorStyle={styles.cardLogoVisa} cardBG={require('../../assets/Images/Gradient3.png')} />
                    </ScrollView>
                </View>

                {/* Features Box */}
                <View style={[styles.commonBox, { width: windowWidth - widthNeg }]}>
                    <View style={styles.commonTextRow}>
                        <Text style={styles.h1}>Features</Text>
                        <TextButton PropFunction={() => { setShowModal(!showModal) }} PropStylesText={styles.h2} PropText='See More' />
                    </View>
                    <View style={styles.featuresButtonRow}>
                        <ImageTextButton PropFunction={() => { setShowModal(!showModal) }} PropText='Send' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} PropImageLink={require('../../assets/Images/SendIcon.png')} PropStylesImage={styles.featuresIcon} />
                        <ImageTextButton PropFunction={() => { setShowModal(!showModal) }} PropText='Receive' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} PropImageLink={require('../../assets/Images/ReceiveIcon.png')} PropStylesImage={styles.featuresIcon} />
                        <ImageTextButton PropFunction={() => { setShowModal(!showModal) }} PropText='Rewards' PropStylesButton={styles.featuresButton} PropStylesText={styles.featuresButtonText} PropImageLink={require('../../assets/Images/RewardsIcon.png')} PropStylesImage={styles.featuresIcon} />
                    </View>
                </View>

                {/* Recent Box */}
                <View style={[styles.commonBox, { width: windowWidth - widthNeg, flex: 1, }]}>
                    <View style={styles.commonTextRow}>
                        <Text style={styles.h1}>Recent Activity</Text>
                        <TextButton PropFunction={() => { setShowModal(!showModal) }} PropStylesText={styles.h2} PropText='See More' />
                    </View>

                    <FlatList contentContainerStyle={styles.recentCardsContainerInner} data={recentCardsList} renderItem={({ item }) => (
                        <RecentCards containerFunction={() => { setShowModal(!showModal) }} accountName={item.name} profileIconLink={require('../../assets/Images/ProfileIcon.png')} transactionDate={item.date} transactionTime={item.time} transactionAmount={item.amount} nameStyle={styles.recentCardName} containerStyle={styles.recentCards} profileIconStyle={styles.recentCardProfileIcon} dateStyle={styles.recentCardDate} amountStyle={styles.recentCardAmount} TimeStyle={styles.recentCardTime} />
                    )} showsVerticalScrollIndicator={false} overScrollMode={'never'} ItemSeparatorComponent={ItemDivider} />
                </View>

                {/* Navigation Bar */}
                <View style={[styles.navBox, { width: windowWidth - widthNeg }]}>
                    <View style={styles.navButtonRow}>
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropImageLink={require('../../assets/Images/HomeIcon.png')} PropStylesImage={styles.navIcons} />
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropImageLink={require('../../assets/Images/PieIcon.png')} PropStylesImage={styles.navIcons} />
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropImageLink={require('../../assets/Images/SwitchIcon.png')} PropStylesImage={styles.navIcons} />
                        <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropImageLink={require('../../assets/Images/BellIcon.png')} PropStylesImage={styles.navIcons} />
                    </View>
                </View>

                <Modal transparent={true} visible={showModal} onRequestClose={() => { setShowModal(!showModal) }} animationType='fade'>
                    <View style={[styles.modalContainer, { height: windowHeight, width: windowWidth }]}>
                        <View style={styles.modalPopup} >
                            <Text style={styles.modalText}>This feature does not work.</Text>
                            <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.closeIcon} PropImageLink={require('../../assets/Images/CloseIcon.png')} />
                        </View>
                    </View>
                </Modal>

            </View>
        </>
    )
}

let cornerRadius = 15;
let h1Text = '#202020';
let darkerText = '#303030';
let boxColour = '#fafafa';
let popColour = '#ffffff';
let lightFont = 'Montserrat-Regular';
let boldFont = 'Montserrat-Medium';

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(50,50,50,0.6)',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 10,

    },

    credBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: boxColour,
        padding: 10,
        marginBottom: 5,
        borderRadius: 35,
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
        color: h1Text,
        marginHorizontal: 10,
        fontFamily: boldFont,
    },

    modalContainer: {
        justifyContent: 'center',

    },

    modalPopup: {
        alignSelf: 'center',
        width: 250,
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
        color: h1Text,
        fontFamily: boldFont,

    },

    closeIcon: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
        margin: 10,

    },

    scrollCardsContainer: {
        marginVertical: 5,
        alignItems: 'center',
        height: 200,

    },


    cardLogoVisa: {
        position: 'absolute',
        right: 0,
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginHorizontal: 10,

    },

    cardLogoMasterCard: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginHorizontal: 10,

    },

    commonBox: {
        elevation: 10,
        backgroundColor: boxColour,
        borderRadius: cornerRadius,
        marginVertical: 5,
        paddingVertical: 10,

    },

    commonTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5,
        marginHorizontal: 10,

    },

    h1: {
        fontSize: 24,
        color: h1Text,
        fontFamily: boldFont,

    },

    h2: {
        fontSize: 14,
        color: darkerText,
        fontFamily: lightFont,

    },

    featuresButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        marginHorizontal: 10,

    },

    featuresButton: {
        width: '32%',
        height: '100%',
        backgroundColor: popColour,
        borderRadius: cornerRadius,

    },

    featuresIcon: {
        height: 25,
        width: 25,
        marginHorizontal: 10,

    },

    featuresButtonText: {
        fontSize: 14,
        color: h1Text,
        fontFamily: boldFont,

    },

    recentCardsContainerInner: {
        paddingHorizontal: 10,
        borderRadius: 15,
        overflow: 'hidden',

    },

    recentCards: {
        width: '100%',
        backgroundColor: popColour,
        borderRadius: cornerRadius,

    },

    recentCardProfileIcon: {
        height: 50,
        width: 50,
        marginRight: 10,

    },

    recentCardName: {
        fontFamily: boldFont,
        color: h1Text,
        fontSize: 18,

    },

    recentCardDate: {
        fontSize: 12,
        fontFamily: lightFont,
        color: darkerText,

    },

    recentCardTime: {
        fontSize: 12,
        fontFamily: lightFont,
        color: darkerText,
        textAlign: 'right',

    },

    recentCardAmount: {
        fontSize: 18,
        fontFamily: boldFont,
        textAlign: 'right',

    },

    navBox: {
        elevation: 10,
        backgroundColor: boxColour,
        borderRadius: cornerRadius,
        marginTop: 5,
        paddingVertical: 10,

    },

    navButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

    navIcons: {
        alignSelf: 'center',
        margin: 5,
        height: 30,
        width: 30,

    },

})