import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import Categories from '@/components/Categories'

export default function Homescreen() {
    return (
        <View style={styles.container}>
            {/* Search Bar with Filter */}
            <View style={styles.searchWrapper}>
                <View style={styles.searchView}>
                    <Ionicons name="search" size={24} color="gray" />
                    <TextInput
                        placeholder="Restaurants..."
                        placeholderTextColor="gray"
                        style={styles.searchText}
                    />
                    <View style={styles.leftSearch}>
                        <Ionicons name="location" size={20} color="gray" />
                        <Text style={styles.locationText}>Kathmandu</Text>
                    </View>
                </View>
                <View style={styles.sliderIcon}>
                    <Ionicons name="filter" size={20} color="white" />
                </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Categories />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5d1d1',
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingTop: 10,
    },
    searchView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingVertical: 10,
        borderRadius: 25,
        gap: 6,
        alignItems: 'center',
    },
    searchText: {
        fontSize: 16,
        flex: 1,
        color: 'black',
    },
    leftSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: 'gray',
        paddingLeft: 6,
        gap: 4,
    },
    locationText: {
        fontSize: 13,
        color: '#333',
    },
    sliderIcon: {
        marginLeft: 10,
        backgroundColor: '#ab9e14dd',
        borderRadius: 30,
        padding: 10,
    },
    scrollContent: {
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
})
