import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Feature{
  title:number,
  restaurants:string,
  description:string,
}

export default function FeaturedRow({title,restaurants,description}:Feature) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})