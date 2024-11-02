// ProductItems.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

const MOCK_API_URL = 'https://66ff44c52b9aac9c997ebcd3.mockapi.io/api/chotam/BMW3';

const ProductItems = ({ subTab }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(MOCK_API_URL);
      const data = await response.json();
      const filteredData = subTab ? data.filter((item) => item.name.includes(subTab)) : data;
      setProducts(filteredData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [subTab]);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={{ uri: item.imgLink }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productGasType}>Gas Type: {item.gasType}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 220,
    height: 150,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  productGasType: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default ProductItems;
