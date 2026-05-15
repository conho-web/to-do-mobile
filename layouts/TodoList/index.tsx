import TodoItem from "@/layouts/TodoItem"
import { Todo } from "@/types/todo"
import { FlatList, StyleSheet, View } from "react-native"

type TodoListProps = {
  todos: Todo[]
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => <TodoItem title={item.title} isCompleted={item.isCompleted} />}
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  }
})