import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import BackButton from '@/components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function RestaurantScreen() {
  const params = useLocalSearchParams();
  const item = params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={styles.backImg}>
          <Image
            source={require('../assets/images/restaurants/n7yx-hero (1).jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.headerCont}>
            <BackButton />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
              <Text style={styles.restaurantName}>{item.name}</Text>
          <View style={{flexDirection:'row',gap:5}}>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={18} color="#75e71e" />
              <Text style={styles.ratingText}>{item.stars}</Text>
              <Text style={styles.reviewText}>({item.reviews} reviews)</Text>
              <Text style={styles.categoryText}> {item.category}</Text>
            </View>
            <View style={styles.locContainer}>
              <Ionicons name='location' size={18} color={'red'}/>
              <Text style={styles.locationText}>Nearby. {item.address}</Text>
            </View>
          </View>
          <Text style={styles.restDesc}>{item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backImg: {
    position: 'relative',
  },
  image: {
    width: width,
    height: 300,
  },
  headerCont: {
    position: 'absolute',
    top: 25,
    left: 15,
    zIndex: 10,
  },
  mainContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fefefe',
    padding: 16,
    marginTop: -40, 
    // flexDirection:'row',
    // alignItems:'center'
  },
  restaurantName: {
    marginLeft:10,
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingTop: 5,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#38740a',
  },
  reviewText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#38740a',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5c5f5a',
  },
  locContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:4
  },
  locationText:{
    color: '#737571',
    fontSize: 12,
  },
  restDesc:{
    color:'grey'
  },
});
