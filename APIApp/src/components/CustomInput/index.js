import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function CustomInput({ propContainerStyle, propTextInputStyle, propPlaceholder, propPlaceholderTextColour, propValue, propOnChangeText }) {
    return (
        <View style={[styles.container, propContainerStyle]}>
            <TextInput style={[styles.input, propTextInputStyle]} placeholder={propPlaceholder} placeholderTextColor={propPlaceholderTextColour} onChangeText={propOnChangeText} value={propValue} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        input: {
            flex: 1,
        },
    }
)