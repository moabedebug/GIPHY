import React from 'react'
import { View, Text, StyleSheet,Button, TouchableOpacity } from "react-native"

export default function Result(props) {
    return (
        <View style={Styles.container}>
            <Text> Result</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Details")}
                style={Styles.btn}
            >
                <Text style={Styles.textBtn}>Navegar para Details</Text>
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
