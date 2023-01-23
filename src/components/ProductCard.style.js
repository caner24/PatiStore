import React from "react"

import { StyleSheet, Dimensions } from "react-native"


export default StyleSheet.create({
    bannerText: {
        color: 'purple',
        fontWeight: '900',
        fontSize:30
      },
    searchBar: {
        borderRadius: 10,
        backgroundColor:"#F1F6F5"
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    card: {
        flex:1,
        width: 300,
        height: 300,
        display: "flex",
        backgroundColor: "#F1F6F5",
        alignItems: "center",
        flexDirection: "column",
        margin:5,
        padding:1,
        borderRadius:10
    },
    productImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    productAmount: {
        color: "blue",
        textAlign: "left",
        fontWeight: "bold"
    },
    productTitle: {
        fontWeight: "bold"
    }


})