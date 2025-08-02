import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Feature{
  title:number,
  restaurants:string,
  description:any,
}

export default function FeaturedRow({title,restaurants,description}:Feature) {
  return (
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingHorizontal:7}}>
        <View>
          <Text style={{fontSize:15,fontWeight:'bold'}}>{title}</Text>
          <Text style={{fontSize:10}}>{description}</Text>
        </View>
      <TouchableOpacity>
        <Text style={{fontSize:14,color:'green',fontWeight:500}}>See All</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})