import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  totalTodos: number,
  completedTodos: number
}

export default function Header({ totalTodos, completedTodos }: HeaderProps) {
  return (
    <View style={styles.container}>
      <StyledText style={{ fontSize: 32, fontWeight: 700 }}>TO-DO</StyledText>
      <StyledText style={{ fontSize: 20 }}>Completed: {completedTodos} / {totalTodos}</StyledText>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  }
})