import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native"

export default function HomeScreen(props) {
    console.log(props)
    return (
        <View style={Styles.container}>
            <Text> Home Screen </Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Result")}
                style={Styles.btn}
            >
                <Text style={Styles.textBtn}>Navegar para Result</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        padding: 5,
        backgroundColor: "#FF0000",
        borderRadius: 5,
    },
    textBtn: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 18
    }
})
