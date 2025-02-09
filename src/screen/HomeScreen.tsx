import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { fontSize, iconSize, spacing } from "../constants/dimention";
import { colors } from "../constants/colors";
import { fontFamily } from "../constants/fonts";
import Category from "../components/category";
import ProductCard from "../components/ProductCard";

import { smartWatch } from "../data/smartwatch";
import { headphones } from "../data/HeadPhones";

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch);

  const [selectedCategory, setSelectedCategory] = useState("Smart Watch");

  const handleUpdateCategory = (newCategory: string) => {
    if (newCategory === "Smart Watch") {
      setData(smartWatch);
    } else if (newCategory === "Headphones") {
      setData(headphones);
    }
    setSelectedCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now.</Text>
      <FlatList
        ListHeaderComponent={
          <>
            {/* search input */}
            <View style={styles.mainInputContainer}>
              {/* input container */}
              <View style={styles.inputWrapper}>
                {/* icon */}
                <Image
                  source={require("../assets/search.png")}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              {/* category container */}
              <View style={styles.categoryContainer}>
                <Image
                  source={require("../assets/category.png")}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />
          </>
        }
        data={data}
        renderItem={({ item, index }) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: 250,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
    padding: spacing.md,
  },
  mainInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.md,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});