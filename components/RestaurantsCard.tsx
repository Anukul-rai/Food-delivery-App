import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';

interface Restaurant {
  id: number;
  name: string;
  image: any;
  stars: number;
  reviews: number;
  category: string;
  description: string;
  address:string;
}

export default function RestaurantsCard({ item }: { item: Restaurant }) {
  
  return (
    <TouchableOpacity 
    onPress={() => router.push({ pathname: '/resturant', params: { id: item.id.toString() } })}
    activeOpacity={0.8} 
    style={styles.cardContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={18} color="#75e71e" />
          <Text style={styles.ratingText}>{item.stars}</Text>
          <Text style={styles.reviewText}>({item.reviews} reviews)</Text>
          <Text style={styles.categoryText}>• {item.category}</Text>
        </View>

        <Text style={styles.description} numberOfLines={2} adjustsFontSizeToFit={true}>{item.description}</Text>
        <View style={styles.locContainer}>
          <Ionicons name='location' size={18} color={'red'}/>
          <Text style={styles.locationText}>Nearby. {item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 5,
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
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingTop: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#38740a',
  },
  reviewText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#38740a',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#38740a',
  },
  description: {
    marginTop: 4,
    fontSize: 13,
    color: '#444',
  },
  locContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:4
  },
  locationText:{
    fontSize:12,
  }
});
