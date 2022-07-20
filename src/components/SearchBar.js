import React from "react";
import { View, TextInput, StyleSheet } from "react-native"

import { Ionicons } from "react-native-vector-icons"

export default function SearchBar({ navigation, text, setText, request }) {
    return (
        <View style={Styles.row}>
            <Ionicons
                name="chevron-back"
                size={40}
                color="white"m
                onPress={() => {navigation.navigate("HomeScreen")}}
            /> 
            <TextInput
                placeholder='Pesquisar'
                autoCapitalize='none'
                autoCorrect={false}
                value={text}
                onChangeText={(value) => setText(value)}
                style={Styles.TextInput}
                onSubmitEditing={() => {request(text)}}
            />
            <Ionicons
                name="search"
                size={40}
                color="white"
                onPress={() => {request(text)}}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TextInput: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 25,
        fontSize: 20,
        paddingHorizontal: 20
    }
})
