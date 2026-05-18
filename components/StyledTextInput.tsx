
import { colors } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInput = TextInputProps & {
  placeholder: string
  isError?: boolean
};

export default function StyledTextInput({ placeholder, isError, ...props }: StyledTextInput) {
  return (
    <TextInput
      style={[styles.input, props.style, isError ? styles.error : null]}
      placeholder={placeholder}
      placeholderTextColor={colors.primaryText80}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primaryText80,
    flex: 1,
    borderRadius: 4,
    color: colors.primaryText,
    paddingHorizontal: 16
  },
  error: {
    borderColor: 'red'
  }
})