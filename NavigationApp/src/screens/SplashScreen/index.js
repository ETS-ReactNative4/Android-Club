// import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Splash({ navigation }) {

    function onPressNext() {
        navigation.navigate('MainDrawer');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Splash Screen</Text>
            <Pressable style={styles.button} onPress={onPressNext}>
                <Text style={styles.subText}>Next Screen</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: '#ffffff',
        fontSize: 28,
    },
    button: {
        margin: 20,
        backgroundColor: '#404040',
        padding: 10,
        borderRadius: 5,
    },
    subText: {
        color: '#ffffff',
        fontSize: 18,
    }
})