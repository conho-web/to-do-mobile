
import { colors } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInput = TextInputProps & {
  placeholder: string
};

export default function StyledTextInput({ placeholder, ...props }: StyledTextInput) {
  return (
    <TextInput style={[styles.input, props.style]} placeholder={placeholder} placeholderTextColor={colors.primaryText80} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primaryText80,
    flex: 1,
    borderRadius: 4,
    color: colors.primaryText
  }
})