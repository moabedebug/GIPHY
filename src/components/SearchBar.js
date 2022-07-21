import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native"

import { Ionicons } from "react-native-vector-icons"

let searchedText = ""

export default function SearchBar({ navigation, text, setText, request }) {
    return (
        <View>
            <View style={Styles.row}>
                <Ionicons
                    name="chevron-back"
                    size={40}
                    color="white"
                    onPress={() => {navigation.navigate("HomeScreen")}}
                /> 
                <TextInput
                    placeholder='Search'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={text}
                    onChangeText={(value) => setText(value)}
                    style={Styles.TextInput}
                    onSubmitEditing={() => {
                        searchedText = text
                        request(text)
                    }}
                />
                <Ionicons
                    name="search"
                    size={40}
                    color="white"
                    onPress={() => {
                        searchedText = text
                        request(text)
                    }}
                />
                
            </View>
                {searchedText !== "" ? 
                    <Text style={Styles.white}>Showing results for <Text style={Styles.whiteBold}>{searchedText}</Text></Text>
                :
                    null
                }
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
    },
    white: {
        fontSize: 16,
        marginLeft: 10,
        color: "white",
        marginTop: 15
    },
    whiteBold: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    }
})
