import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native' 
import React, { useState } from 'react'
import { fontSize, spacing } from '../constants/dimention'
import { fontFamily } from '../constants/fonts'
import { colors } from '../constants/colors'
import { category } from '../data/Category'

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("SmartWatch")

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category)
  }
  return (
    <FlatList data={category}                                                       
     renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectCategory(item.name)}>
          <Text style={[styles.categoryText, selectedCategory === item.name && {color:colors.purple}]}>{item.name}</Text>
          {selectedCategory=== item.name && <View style={styles.underline}/>}
        </TouchableOpacity>
     )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      ItemSeparatorComponent={ () => <View style={{paddingHorizontal: spacing.sm}}/>}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold,
        color: colors.gray,
    },
    underline: {
        borderBottomColor: colors.purple,
        borderBottomWidth: 2,
        marginTop: spacing.sm,
        width: '50%',
        marginBottom: spacing.sm,
    },
})