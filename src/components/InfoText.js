import React from "react";
import { View, Text, StyleSheet } from "react-native"

import { Ionicons } from "react-native-vector-icons"

export default function InfoText({ showMessage }) {
    return  showMessage ? (
        <View style={Styles.headerContainer}>
            <Ionicons 
                name="arrow-up" 
                size={40} 
                color="white"
            />
            <Text style={Styles.headerText}>Use the search bar to find what you're looking for</Text>
        </View>
    ) : null
}

const Styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        margin: 20
    },
    headerText: {
        fontSize: 20,
        color: "white",
        width: "80%",
        textAlign: "center",
        alignSelf: "center"
    },
})