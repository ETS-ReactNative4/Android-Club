import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Modal } from 'react-native';
import ImageTextButton from '../../components/ImageTextButton';

export default function CardComponent({ cardType, userF, userL, balance, accNumber, cardVendor }) {
    return (
        <>
            <View style={styles.cardBox}>
                <Image source={require('../../assets/Images/Gradient.png')} style={styles.card} />
                <View style={styles.cardBoxTop}>
                    <Text style={styles.cardText}>{cardType}</Text>
                    <Text style={styles.cardText}>{userF} {userL}</Text>
                </View>

                <View style={styles.balanceBox}>
                    {/* <Text style={styles.mainBalance}>${cardBalance}</Text> */}
                    <Text style={styles.mainBalance}>{balance}</Text>
                    <Text style={styles.balanceText}>Total Balance</Text>

                </View>
                <ImageButton PropStylesImage={styles.infoIcon} propImageLink={require('../../assets/Images/InfoIcon.png')} />
                <View style={styles.cardBoxBottom}>
                    <Text style={styles.cardText}>{cardVendor}</Text>
                    <Text style={styles.cardText}>Account: {accNumber}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    cardBox: {
        width: 350,
        height: 200,
        margin: 5,
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
        resizeMode: 'contain',
        height: 20,
        width: 20,

    },

    cardBoxBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


})