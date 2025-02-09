import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Image } from 'react-native';
import { spacing } from '../constants/dimention';
import { colors } from '../constants/colors';

type Props = {
  images: string[];
};

const screenWidth = Dimensions.get("window").width;

const ProductCarousel = ({images}: Props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const onViewRef = useRef(({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
        if (viewableItems.length > 0 && viewableItems[0].index !== null) {
            setActiveSlide(viewableItems[0].index)
        }
    }).current
  return (
    <>
        <FlatList 
            data={images}
            renderItem={({item}) => (
                <View style={styles.productImageWrapper}>
                    <Image source={{uri: item}} style={styles.proudctImage}/>
                </View>
            )}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment='center'
            snapToInterval={screenWidth}
            decelerationRate={"fast"}
            onViewableItemsChanged={onViewRef}
        />
        <View style={styles.pagination}>
            {images.map((_, index)=>(
                <View style={[
                    styles.dot, 
                    index === activeSlide && {width: 20, borderRadius: 32}, 
                    {backgroundColor: index === activeSlide ? colors.purple : colors.gray}
                ]} key={index}/>
            ))}
        </View>
    </>
)}

export default ProductCarousel

const styles = StyleSheet.create({
    productImageWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth,
        paddingTop: spacing.sm,
      },
      proudctImage: {
        height: 350,
        width: 350,
        resizeMode: "cover",
        borderRadius: 10,
      },
      pagination: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: spacing.md,
      },
      dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: spacing.xs,
        backgroundColor: colors.gray,
      },
})