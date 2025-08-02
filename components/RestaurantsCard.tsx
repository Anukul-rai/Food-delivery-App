import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function RestaurantsCard({ item }: any) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop:5,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4, // for Android shadow
  },
  image: {
    height: 150,
    width: 280,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e53935',
  },
});
