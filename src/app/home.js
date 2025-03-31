import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector((state) => state.todo )
  console.log(state)
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default Home