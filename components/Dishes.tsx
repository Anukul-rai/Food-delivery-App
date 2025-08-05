import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Dishes({item}:any) {
  return (
    <View style={styles.dishContainer}>
        <Image
        source={require('../assets/images/dishes/images (2).jpeg')}
        style={styles.dishImage}
        resizeMode="cover"
        />
        <View style={styles.dishDetails}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.dishDesc} numberOfLines={2}>
            {item.description}
        </Text>
        </View>
        <View style={styles.dishActions}>
        <View style={styles.actionButtons}>
            <TouchableOpacity>
            <Ionicons name="add-circle" size={25} color="orange" />
            </TouchableOpacity>
            <Text style={styles.priceText}>Rs. {item.price || '250'}</Text>
            <TouchableOpacity>
            <Ionicons name="remove-circle" size={25} color="orange" />
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    dishContainer: {
    backgroundColor: '#f4f4f4',
    marginHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    gap: 12,
  },
  dishImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  dishDetails: {
    flex: 1,
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  dishDesc: {
    fontSize: 12,
    color: '#555',
  },
  dishActions: {
    alignItems: 'center',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
    actionButtons: {
    flexDirection: 'row',
    alignItems:'center',
    gap: 8,
    marginTop: 20,
  },
})