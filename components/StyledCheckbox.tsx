import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

type StyledCheckboxProps = {
  checked: boolean
  onCheck: () => void
}

export default function StyledCheckbox({ checked, onCheck }: StyledCheckboxProps) {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons name={checked ? "checkmark-circle" : "ellipse-outline"} size={24} color="white" />
    </TouchableOpacity>
  )
}