import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Alert, TextInput, FlatList } from 'react-native'

import ProductCard from './components/ProductCard'
import products from './products.json'
import StyleSheets from './components/ProductCard.style'

let App = () => {

  return (

    <SafeAreaView style={{padding:10 }}>
  
      <Text style={StyleSheets.bannerText}>PATIKASTORE</Text>
      <TextInput style={StyleSheets.searchBar} placeholder='Ara. . .'></TextInput>
      <FlatList  contentContainerStyle={{ paddingBottom: 90 }}  columnWrapperStyle={StyleSheets.row}  numColumns={2}
        data={products}
        renderItem={({item})=><ProductCard product={item}/>}/>
    </SafeAreaView>
  );
};
export default App;