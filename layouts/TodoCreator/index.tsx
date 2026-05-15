import StyledButton from "@/components/StyledButton"
import StyledTextInput from "@/components/StyledTextInput"
import { Todo } from "@/types/todo"
import { StyleSheet, View } from "react-native"

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void
}

export default function TodoCreator({ ...props }: TodoCreatorProps) {
  return (
    <View style={styles.container} {...props}>
      <StyledTextInput placeholder="Title task" />
      <StyledButton icon="add" label="Create" size="large" onPress={() => { }}></StyledButton>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    gap: 8
  }
})