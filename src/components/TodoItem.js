import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/reducers/todoSlice';

const TodoItem = ({item}) => {
    const dispatch = useDispatch();
    const deleteHandler = async()=>{
        dispatch(deleteTodo({id:item?.id}));
    }
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{ item?.title }</Text>
        <Text style={styles.description}> {item?.desc} </Text>
      </View>

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons onPress={()=>{}} name="pencil-circle" size={32} color="#007AFF" />
        <Ionicons onPress={deleteHandler} name="trash-sharp" size={32} color="red" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#000',
        elevation:10,
        shadowOffset:{width:1, height:1},
        shadowRadius:2,
        shadowOpacity:0.7,
        backgroundColor:'#f2f2f2f2',
        margin:10,
        borderRadius:10,
        padding:10
    },
    infoContainer:{
        width:'70%',
    },
    iconContainer:{
        width:'25%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:15
    },
    title:{
        fontSize:16,
        fontWeight:"500",
        color:'#222'
    },
    description:{
        fontSize:14,
        color:'#888',
        textAlign:'left'
    }
})

export default TodoItem