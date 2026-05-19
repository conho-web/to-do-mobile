import TodoItem from "@/layouts/TodoItem"
import { Todo } from "@/types/todo"
import { FlatList, StyleSheet, View } from "react-native"

type TodoListProps = {
  todos: Todo[],
  onCheckTodo: (id: Todo["id"]) => void,
  onDeleteTodo: (id: Todo["id"]) => void,
  onUpdateTodoTitle: (id: Todo["id"], title: Todo["title"]) => void,
}

export default function TodoList({ todos, onCheckTodo, onDeleteTodo, onUpdateTodoTitle }: TodoListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) =>
          <TodoItem
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
            onCheck={onCheckTodo}
            onDelete={onDeleteTodo}
            onUpdateTitle={onUpdateTodoTitle}
          />
        }
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  }
})