import { View, Text, StyleSheet, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/reducers/todoSlice";
import CustomButton from "./CustomButton";

const TodoItem = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(item?.title);
  const [description, setDescription] = useState(item?.desc);

  const dispatch = useDispatch();
  const deleteHandler = async () => {
    dispatch(deleteTodo({ id: item?.id }));
  };
  const onUpdate = async () => {
    dispatch(updateTodo({ id: item?.id, title: value, desc: description }));
    setVisible(false);
  };
  return (
    <>
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}> {item?.desc} </Text>
      </View>

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          onPress={() => setVisible(true)}
          name="pencil-circle"
          size={32}
          color="#007AFF"
        />
        <Ionicons
          onPress={deleteHandler}
          name="trash-sharp"
          size={32}
          color="red"
        />
      </View>
    </View>
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Ionicons
              onPress={() => setVisible(false)}
              name="close-circle"
              style={styles.closeIcon}
              size={24}
              color="black"
            />
            <View style={styles.modalContainer}>
              <TextInput
                placeholder="Enter your text here!"
                value={value}
                onChangeText={setValue}
                style={[styles.input, styles.morePadding]}
                maxLength={38}
              />
              <TextInput
                placeholder="Enter your todo Description!"
                value={description}
                numberOfLines={4}
                multiline
                maxLength={120}
                onChangeText={setDescription}
                style={[styles.input, styles.minHeight]}
              />
              <CustomButton title="Update" onPress={onUpdate} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
    mainModel:{
        position:'absolute'
    },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
    backgroundColor: "#f2f2f2f2",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  infoContainer: {
    width: "70%",
  },
  iconContainer: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  description: {
    fontSize: 14,
    color: "#888",
    textAlign: "left",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  morePadding: {
    marginTop: 20,
  },
  minHeight: {
    minHeight: 120,
    textAlignVertical: "top",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: "90%",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default TodoItem;
