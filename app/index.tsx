import Header from "@/layouts/Header";
import TodoCreator from "@/layouts/TodoCreator";
import TodoList from "@/layouts/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: 'Create app',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Create app fast',
    isCompleted: false
  }
]

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos)

  const addTodo = (title: Todo["title"]) => {
    setTodos([...todos, { id: todos.length + 1, title, isCompleted: false }])
  }

  const completedTodos = todos.filter((item) => item.isCompleted)

  return (
    <View style={styles.container}>
      <Header totalTodos={todos.length} completedTodos={completedTodos.length} />
      <TodoCreator onAddTodo={addTodo} />
      <TodoList todos={todos} />
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%'
  }
})