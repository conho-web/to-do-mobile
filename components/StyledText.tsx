import { colors } from "@/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";

export default function StyledText({ style, ...props }: TextProps) {
  return <Text style={[styles.base, style]} {...props} />
}

const styles = StyleSheet.create({
  base: {
    color: colors.primaryText
  }
})