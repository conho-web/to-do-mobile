import StyledButton from "@/components/StyledButton"
import StyledCheckbox from "@/components/StyledCheckbox"
import StyledText from "@/components/StyledText"
import { StyleSheet, View } from "react-native"

type TodoProps = {
  title: string,
  isCompleted: boolean
}

export default function TodoItem({ title, isCompleted }: TodoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledCheckbox checked={isCompleted} onCheck={() => { console.log("123") }}></StyledCheckbox>
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