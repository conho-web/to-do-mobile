import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
import StyledText from "@/components/StyledText";
import { Todo } from "@/types/todo";
import { StyleSheet, View } from "react-native";

type TodoProps = Todo & {
  onCheck: (id: Todo["id"]) => void,
  onDelete: (id: Todo["id"]) => void,
  onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void,
}

export default function TodoItem({ id, title, isCompleted, onCheck, onDelete, onUpdateTitle }: TodoProps) {
  const onPressCheck = () => {
    onCheck(id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledCheckbox checked={isCompleted} onCheck={onPressCheck}></StyledCheckbox>
        <StyledText style={[{ textDecorationLine: isCompleted ? "line-through" : "none" }]}>{title}</StyledText>
      </View>
      <View style={styles.buttons}>
        <StyledButton icon="pencil" size="small" label="Edit" />
        <StyledButton icon="trash" size="small" variant="delete" label="Delete" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#272727'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  buttons: {
    flexDirection: 'row',
    gap: 8
  }
})