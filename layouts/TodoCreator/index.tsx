import StyledButton from "@/components/StyledButton"
import StyledTextInput from "@/components/StyledTextInput"
import { Todo } from "@/types/todo"
import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void
}

export default function TodoCreator({ onAddTodo, ...props }: TodoCreatorProps) {
  const [text, setText] = useState("");
  const [inputErrors, setInputErrors] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputErrors(true)
      return;
    }
    onAddTodo(text);
    setText("");
  }

  useEffect(() => {
    if (inputErrors && text) {
      setInputErrors(false);
    }
  }, [text]);

  return (
    <View style={styles.container} {...props}>
      <StyledTextInput placeholder="Title task" value={text} onChangeText={setText} isError={inputErrors} />
      <StyledButton icon="add" label="Create" size="large" onPress={onPressAdd}></StyledButton>
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