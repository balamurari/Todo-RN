import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}  >
      <Text style={styles.text}> {title}  </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:100,
        padding:10,
        paddingHorizontal:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0090B0',
        alignSelf:'center'
    },
    text:{
        fontSize:18,
        fontWeight:600,
        color:'#fff',
    },
})

export default CustomButton