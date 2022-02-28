import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function CustomButton({ PropStylesButton, PropStylesText, PropIconName, PropFunction }) {
    return (
        <>
            <TouchableOpacity style={[styles.container, PropStylesButton]} activeOpacity={0.9} onPress={PropFunction}>
                {/* <Text style={[styles.text, PropStylesText]}>{PropText}</Text> */}
                <Icon name={PropIconName} style={[styles.text, PropStylesText]}/>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    // text: {
    //     fontSize: 70,
    // }

});