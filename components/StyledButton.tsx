import StyledText from "@/components/StyledText";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string
  icon?: React.ComponentProps<typeof Ionicons>["name"]
  size?: "default" | "large" | "small"
  variant?: "primary" | "delete"
}

export default function StyledButton({ label, icon, size, variant, ...props }: StyledButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container,
      size === "small" ? styles.small : null,
      size === "large" ? styles.large : null,
      variant === "delete" ? styles.delete : styles.primary
      ]}
      {...props}
    >
      {label && <StyledText style={styles.text}>{label}</StyledText>}
      {icon && <Ionicons name={icon} color="white"></Ionicons>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 700,
    marginRight: 4,
  },

  //sizes
  small: {
    padding: 10
  },
  large: {
    padding: 18
  },

  // variations
  primary: {
    backgroundColor: "#3d61d7"
  },
  delete: {
    backgroundColor: '#af0000'
  }
})