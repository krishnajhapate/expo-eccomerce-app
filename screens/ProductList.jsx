import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useEffect } from 'react/cjs/react.production.min'
import { useState } from 'react/cjs/react.production.min'
import { getProducts } from '../services/ProductsService'

export default function ProductList({ navigation }) {

    function renderProduct({ item: product }) {
        <Product
            {...product}
            onPress={() => {
                navigation.navigate('ProductDetails', { productId: product.id })
            }}
        />
    }

    const [products, setProducts] = useState()

    useEffect(() => {
        setProducts(getProducts())
    })

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )
}

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#eeeeee',
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});