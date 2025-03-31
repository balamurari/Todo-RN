import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const CustomHeader = ({title, isBackButton}) => {
  return (
    <View style={styles.container}>
        <SafeAreaView />
        <View>
            <Text style={styles.text}>{title}</Text>
            {isBackButton && (
                <TouchableOpacity style={styles.backButton} onPress={()=>router.back()}>
                    <Ionicons name="arrow-back-circle" size={32} color="white" />
                </TouchableOpacity>
            )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0090B0',
        padding:15
    },
    text:{
        fontSize:22,
        fontFamily:'SpaceMono',
        color:'white',
        textAlign:'center'
    },
    backButton:{
        position:'absolute',
    }
})

export default CustomHeader