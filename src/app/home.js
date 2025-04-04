import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import {screenHeight} from '../utils/Constants'
import TodoItem from '../components/TodoItem'

const Home = () => {
  const data = useSelector((state) => state.todo.data);
  const renderTodoItem = ({item}) => {
    return(
      <TodoItem item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <CustomHeader title='Todo App' />
      <FlatList
        data={data}
        renderItem={renderTodoItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Image source={require('../assets/images/add.png')}  style={styles.addIcon} />
            <Text style={styles.emptyMessageText}>Click on plus button to add new todo</Text>
          </View>
        }
        initialNumToRender={10}
        windowSize={10}
        key={item=>item?.id}
        keyExtractor={(item)=>item?.id}
        showsVerticalScrollIndicator={false}
      />

      <AddButton />
      <Text>hai</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    
  },
  emptyContainer:{
    height: screenHeight * 0.8,
    justifyContent:'center',
    alignItems:'center'
  },
  addIcon:{
    width:120,
    height:120,
    resizeMode:'contain',
    margin:15
  },
  emptyMessageText:{
    fontSize:20,
    fontWeight:500,
    color:'#888',
    width:'80%',
    textAlign:'center'
  }
})

export default Home