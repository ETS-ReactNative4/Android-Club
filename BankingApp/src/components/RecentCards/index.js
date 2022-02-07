import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

export default function RecentCards({ containerStyle, profileIconStyle, containerFunction, profileIconLink, accountName, nameStyle, transactionDate, transactionTime, dateStyle, TimeStyle, transactionAmount, amountStyle }) {
    let amountSign = '+';
    let amountColour = 'green';
    if (transactionAmount < 0) {
        amountSign = '-';
        amountColour = 'red';
    }
    transactionAmount = Math.abs(transactionAmount);
    transactionAmount = (Math.round(transactionAmount*100)/100).toFixed(2);

    return (
        <>
            <TouchableOpacity style={[styles.container, containerStyle]} activeOpacity={0.9} onPress={containerFunction}>
                <View style={styles.leftBox}>
                    <Image source={profileIconLink} style={[styles.profileIcon, profileIconStyle]} />
                    <View style={styles.nameDateBox}>
                        <Text style={nameStyle}>{accountName}</Text>
                        <Text style={dateStyle}>{transactionDate}</Text>
                    </View>
                </View>

                <View style={styles.rightBox}>
                    <View style={styles.amountTimeBox}>
                        <Text style={[amountStyle, { color: amountColour }]}>{amountSign}${transactionAmount}</Text>
                        <Text style={TimeStyle}>{transactionTime}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginVertical: 5,
        
    },

    leftBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        padding: 10,

    },

    profileIcon: {
        resizeMode: 'contain',

    },

    nameDateBox: {
        // backgroundColor: 'blue',

    },

    rightBox: {
        padding: 10,
        // backgroundColor: 'blue',

    },

});