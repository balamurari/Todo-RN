import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>router.navigate('/addtodo')} >
        <FontAwesome6 name="plus" size={32} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:25,
        right:20,
        backgroundColor:'#0090B0',
        padding:15,
        borderRadius:120,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        elevation:10,
        shadowOffset:{width:1, height:1},
        shadowRadius:2,
        shadowOpacity:0.7
    }
})

export default AddButton