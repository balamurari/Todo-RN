import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'

const Home = () => {
  const data = useSelector((state) => state.todo.data)

  return (
    <View style={styles.container}>
      <CustomHeader title='Todo App' />
      <AddButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})

export default Home