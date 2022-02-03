import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, useWindowDimensions, StatusBar, Modal } from 'react-native';
import ImageButton from '../../components/ImageButton';
import ImageTextButton from '../../components/ImageTextButton';
import ImagePlus from '../../components/BackgroundImage';
import TextButton from '../../components/TextButton';

export default function Home() {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [showModal, setShowModal] = useState(false);
    let userF = 'John';
    let userL = 'Doe';
    let cardBalance = 10000;
    let accNumber = 'NI69420CE';
    let widthNeg = 20;

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
                            <Text style={styles.userName}>Hello, {userF}</Text>
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

                    {/* <View style={[styles.cardBox, { width: windowWidth - widthNeg }]}> */}

                    <View style={styles.cardBox}>
                        <Image source={require('../../assets/Images/Gradient.png')} style={styles.card} />
                        <View style={styles.cardBoxTop}>
                            <Text style={styles.cardText}>EBI Titanium Card</Text>
                            <Text style={styles.cardText}>{userF} {userL}</Text>
                        </View>

                        <View style={styles.balanceBox}>
                            {/* <Text style={styles.mainBalance}>${cardBalance}</Text> */}
                            <Text style={styles.mainBalance}>$42,069.00</Text>
                            <Text style={styles.balanceText}>Total Balance</Text>

                        </View>
                        <ImageButton PropStylesImage={styles.infoIcon} propImageLink={require('../../assets/Images/InfoIcon.png')} />
                        <View style={styles.cardBoxBottom}>
                            <Text style={styles.cardText}>MasterCard</Text>
                            <Text style={styles.cardText}>Account: {accNumber}</Text>
                        </View>
                    </View>

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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(150,150,150,0.6)',
        // width: '100%',
        // height: '100%',
        alignItems: 'center',

    },

    credBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        backgroundColor: '#cdcdcd',
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 5,
        // borderBottomRightRadius: cornerRadius,
        // borderBottomLeftRadius: cornerRadius,
        borderRadius: cornerRadius,
        elevation: 5,

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
        backgroundColor: 'rgb(255,255,255)',
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

    cardBox: {
        width: 350,
        height: 200,
        // backgroundColor: 'white',
        marginVertical: 5,
        // borderRadius: 10,
        justifyContent: 'space-between',
        elevation: 10,

    },

    card: {
        borderRadius: 10,
        position: 'absolute',
        resizeMode: 'cover',
        height: '100%',
        width: '100%',

    },

    cardBoxTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    cardText: {
        margin: 10,
        fontSize: 14,
        color: '#cdcdcd',

    },

    balanceBox: {
        alignSelf: 'center',
        alignItems: 'center',

    },

    mainBalance: {
        color: 'white',
        fontSize: 40,

    },

    balanceText: {
        color: 'white',
        fontSize: 14,

    },

    infoIcon: {
        position: 'absolute',
        // alignSelf: 'center',
        resizeMode: 'contain',
        height: 20,
        width: 20,

    },

    cardBoxBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    featuresBox: {
        backgroundColor: '#cdcdcd',
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