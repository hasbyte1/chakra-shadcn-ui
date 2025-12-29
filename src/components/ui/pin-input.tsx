import { PinInput as ChakraPinInput } from "@chakra-ui/react"

export const PinInputRoot = ChakraPinInput.Root
export const PinInputInput = ChakraPinInput.Input
export const PinInputControl = ChakraPinInput.Control
export const PinInputLabel = ChakraPinInput.Label

export interface PinInputRootProps extends ChakraPinInput.RootProps {
  size?: "xs" | "sm" | "md" | "lg"
}

export const PinInput = {
  Root: PinInputRoot,
  Input: PinInputInput,
  Control: PinInputControl,
  Label: PinInputLabel,
}
