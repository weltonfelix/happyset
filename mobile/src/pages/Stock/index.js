import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableNativeFeedback, FlatList, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';
import starsImg from '../../assets/starsImg.png';
import babyImg from '../../assets/baby.png';

import styles from './styles';

import api from '../../services/api'

export default function Stock() {
  const navigation = useNavigation();

  const [products, setProducts ] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  async function loadProducts(){
    if (loading) {
      return
    }

    setLoading(true)

    const response = await api.get('products', {
      params: { page }
    })

    setProducts([ ...products, ...response.data ])
    setPage(page + 1)
    setLoading(false)
  }

  function navigateToProduct(product) {
    navigation.navigate('Product', { product });
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <FlatList
        data={products}
        keyExtractor={(product) => String(product)}
        renderItem={() => (
          <TouchableNativeFeedback
            onPress={() => navigateToProduct(product)}
            background={TouchableNativeFeedback.Ripple('#999999')}
          >
            <View style={styles.productsContainer}>
              <Image style={styles.productImg} source={product.image} />

              <View style={styles.productsText}>
                <Text style={styles.productDescription}>
                  {product.name}
                </Text>

                <Text style={styles.productValue}>{Intl.NumberFormat('pt-BR', {
                  style:'currency',
                  currency: 'BRL'
              }).format(product.price)}</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
      />
    </View>
  );
}
