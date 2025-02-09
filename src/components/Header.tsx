import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { iconSize } from '../constants/dimention'
import { TouchableOpacity } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Ionicons name={"arrow-back"} size={iconSize.md}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <AntDesign name={"hearto"} size={iconSize.md}/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
        
    }
})