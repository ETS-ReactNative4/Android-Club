import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, useWindowDimensions, Modal } from 'react-native';
import ImageButton from '../ImageButton';

export default function CardComponent({ cardType, userF, userL, balance, accNumber, cardVendor, cardVendorStyle, cardBG }) {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <View style={styles.container}>
                <Image source={cardBG} style={styles.card} />
                <View style={styles.cardBoxTop}>
                    <Text style={styles.cardText}>{userF} {userL}</Text>
                    <Text style={styles.cardText}>{cardType}</Text>
                </View>

                <View style={styles.balanceBox}>
                    {/* <Text style={styles.mainBalance}>${cardBalance}</Text> */}
                    <Text style={styles.mainBalance}>{balance}</Text>
                    <Text style={styles.balanceText}>Total Balance</Text>   
                </View>

                <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.infoIcon} PropImageLink={require('../../assets/Images/InfoIcon.png')} />

                <Modal transparent={true} visible={showModal} onRequestClose={() => { setShowModal(!showModal) }} animationType='fade'>
                    <View style={[styles.modalContainer, { height: windowHeight, width: windowWidth }]}>
                        <View style={styles.modalPopup} >
                            <Text style={styles.modalText}>Insert Information About the Card Here</Text>
                            <ImageButton PropFunction={() => { setShowModal(!showModal) }} PropStylesImage={styles.closeIcon} PropImageLink={require('../../assets/Images/CloseIcon.png')} />
                        </View>
                    </View>
                </Modal>

                <View style={styles.cardBoxBottom}>
                    <Text style={styles.cardText}>Account: {accNumber}</Text>
                    <Image style={cardVendorStyle} source={cardVendor} />
                </View>
            </View>
        </>
    )
}

let lightFont = 'Montserrat-Regular';
let boldFont = 'Montserrat-Medium';

const styles = StyleSheet.create({

    container: {
        width: 335,
        height: 200,
        justifyContent: 'space-between',
        // elevation: 10,
        marginHorizontal: 5,

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
        paddingHorizontal: 5,

    },

    cardText: {
        margin: 10,
        fontSize: 14,
        color: '#eaeaea',
        fontFamily: lightFont,

    },

    balanceBox: {
        alignSelf: 'center',
        alignItems: 'center',

    },

    mainBalance: {
        color: 'white',
        fontSize: 40,
        fontFamily: boldFont,
        // margin: -2.5,
    },

    balanceText: {
        color: 'white',
        fontSize: 14,
        fontFamily: lightFont,

    },

    infoIcon: {
        position: 'absolute',
        resizeMode: 'contain',
        // margin: 5,
        // top: 5,
        height: 15,
        width: 15,

    },

    modalContainer: {
        justifyContent: 'center',
        flex: 1,

    },

    modalPopup: {
        // height: 225,
        alignSelf: 'center',
        width: 300,
        backgroundColor: '#fafafa',
        borderRadius: 35,
        borderWidth: 5,
        borderColor: 'rgba(255,255,255,0.25)',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
        elevation: 10,

    },

    modalText: {
        fontSize: 26,
        color: '#202020',
        fontFamily: boldFont,

    },

    closeIcon: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
        margin: 10,

    },

    cardBoxBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        // backgroundColor: 'black',
    },

})