import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import BackButton from '@/components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Dishes from '@/components/Dishes';

const { width } = Dimensions.get('window');

export default function RestaurantScreen() {
  const params = useLocalSearchParams();
  const item = params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image with Back Button */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/images/restaurants/n7yx-hero (1).jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.backButton}>
            <BackButton />
          </TouchableOpacity>
        </View>

        {/* Restaurant Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{item.name}</Text>

          <View style={styles.metaContainer}>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={18} color="#75e71e" />
              <Text style={styles.metaText}>{item.stars}</Text>
              <Text style={styles.metaText}>({item.reviews} reviews)</Text>
              <Text style={styles.metaText}>• {item.category}</Text>
            </View>

            <View style={styles.locContainer}>
              <Ionicons name="location" size={18} color="red" />
              <Text style={styles.locationText}>Nearby • {item.address}</Text>
            </View>
          </View>

          <Text style={styles.description}>{item.description}</Text>
        </View>

        {/* Menu Section */}
        <Text style={styles.menuTitle}>Menus</Text>
        {/* { Array.isArray(item.dishes) &&
          item.dishes?.map((dish,index)=>
            <Dishes key={index} item={{...dish}}/>
          )
        } */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: width,
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 15,
    zIndex: 10,
  },
  infoContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fefefe',
    padding: 16,
    marginTop: -40,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  metaContainer: {
    gap: 4,
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#38740a',
  },
  locContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#737571',
    fontSize: 12,
    marginLeft: 4,
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginTop: 6,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  

});
