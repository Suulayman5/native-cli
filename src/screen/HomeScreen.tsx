import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '../constants/dimention'
import { colors } from '../constants/colors'
import { fontFamily } from '../constants/fonts'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find Your Suitable Watch Now</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.md,
    },
    headline: {
        fontSize: fontSize.xl,
        fontFamily: fontFamily.Bold,
        color: colors.black,
    },
    text: {
        color: colors.gray,
        fontSize: 20
    }
})