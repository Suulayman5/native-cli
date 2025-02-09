import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontSize, spacing } from '../constants/dimention'
import { fontFamily } from '../constants/fonts'
import { smartWatch } from '../data/smartwatch'

const ProductCard = () => {
  return (
   <FlatList data={smartWatch}
    renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={{ uri: item.image }} style={styles.productImage}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>$ {item.price}</Text>

            </View>
        </TouchableOpacity>
   )}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2}
    columnWrapperStyle={{justifyContent:'space-between'}}
    contentContainerStyle={{paddingBottom:250}}
    showsVerticalScrollIndicator={false}
   />
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: '47.5%',
        elevation: 5,
        backgroundColor: colors.background,
        borderRadius: 12,
        marginVertical:spacing.md,
    },
    imageWrapper: {
        borderRadius: 12,
        backgroundColor: "#FFC8B7",
        margin: spacing.sm,
      },
      productImage: {
        height: 120,
        width: "100%",
        resizeMode: "center",
      },
    details: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
    },
    name: {
      color: colors.black,
      fontSize: fontSize.md,
      fontFamily: fontFamily.SemiBold,
    },
    brand: {
      color: colors.gray,
      fontSize: fontSize.sm,
      fontFamily: fontFamily.Medium,
      paddingVertical: spacing.xs,
    },
    price: {
      color: colors.purple,
      fontSize: fontSize.md,
      fontFamily: fontFamily.Medium,
    },
})