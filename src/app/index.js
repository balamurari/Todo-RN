import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/icon.png'
import { screenHeight, screenWidth } from '../utils/Constants'
import { useFonts } from 'expo-font'
import { resetAndNavigate } from '../utils/Helpers'

const Main = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const[hasNavigated, setHasNavigated] = useState(false)

  useEffect(()=>{
    if (loaded && !hasNavigated){
      const timeoutId = setTimeout(()=>{
        resetAndNavigate('/home')
      },1000);

      return () => clearTimeout(timeoutId);
    }
  },[loaded, hasNavigated])

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text>Todo Application</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:screenWidth * 0.3,
    height:screenHeight * 0.12,
  }
})