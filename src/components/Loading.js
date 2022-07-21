import React from "react"
import { StyleSheet, ActivityIndicator } from "react-native"

export default function Loading({ isLoading }) {
    return isLoading ? (
        <ActivityIndicator
            color="white"
            size={40}
            style={Styles.loading}
        />
    ) : null
}

const Styles = StyleSheet.create({
    loading: {
        margin: 20
    }
})