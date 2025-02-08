import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../constants/dimention'
import { colors } from '../constants/colors'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>nafs</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: spacing.md,
    },
    text: {
        color: colors.gray,
        fontSize: 20
    }
})