import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RestaurantsCard from './RestaurantsCard';

interface Restaurant {
  id: number;
  name: string;
  image: any;
}

interface FeatureProps {
  title: string;
  restaurants: Restaurant[];
  description: string;
}

export default function FeaturedRow({ title, restaurants, description }: FeatureProps) {
  return (
    <View>
      {/* Title and See All */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll of Restaurants */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} item={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    color: '#555',
  },
  seeAll: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
  },
  scrollView: {
    overflow: 'visible',
    paddingVertical: 9,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
});
