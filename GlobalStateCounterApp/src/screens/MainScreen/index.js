import React from 'react';
import TopHalf from '../../components/TopHalf';
import BottomHalf from '../../components/BottomHalf';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

export default function MainScreen() {
  return (
    <>
      <Image source={require('../../assets/Gradient.png')} style={styles.bg} />
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.loopOuter} >
          <View style={styles.loopMid} >
            <View style={styles.loopInner} />
          </View>
        </View>

        <View style={styles.boxOuter} >
          <View style={styles.boxMid} >
            <View style={styles.boxInner} />
          </View>
        </View>


        <TopHalf />

        <BottomHalf />


      </View>

    </>
  )
}

let loopColor = '#bdbdbd';


const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },

    container: {
        flex: 1,
        alignItems: 'center',
    },

    loopOuter: {
        position: 'absolute',
        borderWidth: 5,
        borderColor: loopColor,
        borderRadius: 200,
        height: 400,
        width: 400,
        right: -200,
        top: -200,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loopMid: {
        borderWidth: 5,
        borderColor: loopColor,
        borderRadius: 175,
        height: 350,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loopInner: {
        borderWidth: 5,
        borderColor: loopColor,
        borderRadius: 150,
        height: 300,
        width: 300,
    },

    boxOuter: {
        position: 'absolute',
        borderWidth: 5,
        borderColor: loopColor,
        height: 300,
        width: 300,
        left: -100,
        bottom: -100,
        transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxMid: {
        borderWidth: 5,
        borderColor: loopColor,
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxInner: {
        borderWidth: 5,
        borderColor: loopColor,
        height: 200,
        width: 200,

    },
});
