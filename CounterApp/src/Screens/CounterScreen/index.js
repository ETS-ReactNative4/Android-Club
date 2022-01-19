import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function CounterScreen() {
    return (
        <>
            <View style={styles.container}>
                <Text>Counter Application</Text>
                <CustomButton PropText="+" PropStylesButton={styles.addButton} PropStylesText={styles.addButtonText}/>
                <CustomButton PropText="-" PropStylesButton={styles.subButton} PropStylesText={styles.subButtonText}/>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
    },

    addButton: {
        backgroundColor: '#404040',
    },

    subButton: {
        backgroundColor: '#404040',
    },

    addButtonText: {
        color: 'white',

    },

    subButtonText: {
        color: 'white',

    },



});