
// Import the necessary modules
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';
import Fallback  from '../components/fallback';



// Create the TodoScreen component
const TodoScreen = () => {
 // Dec [textlare the state variables
 const [text, setText] = useState('');
 const [todoList, setTodoList] = useState([]);
 const [editTodo, setEditTodo] = useState(null);

 // Define the function to add a new todo item
 const addTodo = () => {
    if (text === '') {
      return;
    }

    const newTodo = { id: Date.now().toString(), title: text };
    setTodoList([newTodo, ...todoList]);
    setText('');
 };

 // Define the function to delete a todo item
 const deleteTodo = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
 };

 // Define the function to edit a todo item
 const editTodoItem = (todo) => {
    setEditTodo(todo);
    setText(todo.title);
 };

 // Define the function to update a todo item
 const updateTodo = () => {
    if (text === '') {
        return;
      }

    const updatedList = todoList.map((item) => {
        
      if (item.id === editTodo.id) {
        return { ...item, title: text };
      }

      return item;
    });

    setTodoList(updatedList);
    setEditTodo(null);
    setText('');
 };

 const renderTodo = ({ item, index }) => {
    return (
    <View style={styles.todoItem}>
            <Text style={styles.todoItemText}>{item.title}</Text>
            <TouchableOpacity onPress={() => editTodoItem(item)}>
              <IconButton icon='pencil' iconColor='#fff' style={styles.editButton}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <IconButton icon='trash-can' iconColor='#fff' style={styles.deleteButton}/>
            </TouchableOpacity>
          </View>
 )
 }

 // Render the component
 return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo item"
        value={text}
        onChangeText={setText}
      />
      {editTodo ? (
        <TouchableOpacity style={styles.button} onPress={updateTodo}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={todoList}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />

{
                todoList.length<=0 && <Fallback/>
            }
    </View>
 );
};

// Define the styles for the component
const styles = StyleSheet.create({
 container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
 },
 input: {
    height: 40,
    borderColor: '#1e90ff',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 6,
 },
 button: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 24,
    alignItems: "center",
    marginTop: 8,
    borderRadius: 6,
    height: 40,
 },
 buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
 },
 todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 6,
 },
 todoItemText: {
    color: '#fff',
    fontSize: 20,
    flex:1
 },
 editButton: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    width:25
 },
 deleteButton: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 0,
    width:25
 },
});

// Export the TodoScreen component
export default TodoScreen;
//
//This code defines a `TodoScreen` component that allows the user to add, edit, and delete todo items. The component uses the `useState` hook to manage its state variables. The `addTodo` function is called when the user presses the "Add" button to add a new todo item. The `deleteTodo` function is called to delete a todo item. The `editTodoItem` function is called to edit a todo item. The `updateTodo` function is called to update the edited todo item. The component renders a `TextInput` component for the user to enter a todo item's title, a "Add" or "Update" button that calls the `addTodo` or `updateTodo` function when pressed, and a `FlatList` component that displays the list of todo items. The component also includes proper commenting to explain the code.