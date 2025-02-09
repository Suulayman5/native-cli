import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fontSize, iconSize, spacing } from '../constants/dimention'
import { colors } from '../constants/colors'
import { fontFamily } from '../constants/fonts'
import Category from '../components/category'
import ProductCard from '../components/ProductCard'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find Your Suitable Watch Now</Text>
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/search.png')} style={styles.logo} />
          <TextInput style={styles.textInput} placeholder="Search Product" />
        </View>
        <View style={styles.categoryContainer}>
          <Image source={require('../assets/category.png')} style={styles.logo} />
        </View>
      </View>

      <Category />
      
      <ProductCard/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: spacing.md,
    },
    headline: {
        fontSize: fontSize.xxl,
        fontFamily: fontFamily.Bold,
        color: colors.black,
    },
    mainInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: spacing.xl,
    },
    inputWrapper: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems:'center',
        borderColor:colors.placeholderText,
        borderRadius: 44,
        paddingHorizontal: spacing.md,
    },
    logo: {
        width: iconSize.md,
        height: iconSize.md,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: spacing.sm,
        fontSize: fontSize.md,
    },
    categoryContainer: {
        paddingHorizontal: spacing.sm,
    },

})