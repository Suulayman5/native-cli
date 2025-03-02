import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { fontSize, spacing } from "../constants/dimention";
import { fontFamily } from "../constants/fonts";
import { useNavigation } from "@react-navigation/native";

interface Product {
  image: string;
  name: string;
  brand: string;
  price: number;
}

const ProductCard = ({ item }: { item: Product }) => {
  const navigation = useNavigation();

  const handleProductDetailsScreen = () => {
    navigation.navigate("Product-Details", { item });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleProductDetailsScreen}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      {/* content like name price */}
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    elevation: 5,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginVertical: spacing.md,
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
  contentContainer: {
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
});