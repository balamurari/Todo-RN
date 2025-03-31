import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'

const AddTodo = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title='Add new todo' isBackButton={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})

export default AddTodo