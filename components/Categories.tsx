import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '@/constants'


export default function Categories() {
    return (
        <View style={{marginTop:4}}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15
        }}
        style={{overflow:'visible'}}
        >
            {
                categories.map((category,index)=>(
                    <View key={index} style={styles.categoryCont}>
                        <TouchableOpacity 
                        style={styles.catergories}>
                            <Text>{category.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }

        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryCont:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:6
    },
    catergories:{
        padding:1,
        borderRadius:20,
        backgroundColor:'#ef23'
    }
})