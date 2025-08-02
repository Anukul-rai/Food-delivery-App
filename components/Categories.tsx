import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '@/constants'


export default function Categories() {
    const[activeCategory,setActiveCategory]=useState<number| null>(null)


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
                categories.map((category,index)=>{
                    const isActive = category.id == activeCategory
                    
                    return(<View key={index} style={styles.categoryCont}>
                        <TouchableOpacity 
                        onPress={()=>setActiveCategory(category.id)}
                        style={[styles.catergories,{
                            backgroundColor:isActive?'#706161':'#fff'
                        }]}>
                            <Image source={category.image} style={{width:40,height:40}}/>
                        </TouchableOpacity>
                        <Text style={{ color: isActive ? '#a59696' : '#0a0a0a' }}>{category.name}</Text>                    </View>
                    )})
            }
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryCont:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
    },
    catergories:{
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:20,
        backgroundColor:'#d5e33933',
        
    }
})