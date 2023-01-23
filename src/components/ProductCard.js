import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Alert, TextInput, FlatList, Dimensions, Image} from 'react-native'

import StyleSheets from './ProductCard.style'

const RenderProduct = ({ product }) => {

    return (
    <View style={StyleSheets.card}>
      <Image onpres
        style={StyleSheets.productImage}
        source={{ uri: product.imgURL }}
      />
      <View>
        <Text style={StyleSheets.productTitle}>{product.title}</Text>
        <TouchableOpacity onPress={()=>Alert.alert(product.title,product.price)}>
        <Text style={StyleSheets.productAmount}>{product.price}</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};
export default RenderProduct;