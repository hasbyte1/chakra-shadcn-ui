import { Switch as ChakraSwitch } from "@chakra-ui/react"

export const SwitchRoot = ChakraSwitch.Root
export const SwitchControl = ChakraSwitch.Control
export const SwitchThumb = ChakraSwitch.Thumb
export const SwitchLabel = ChakraSwitch.Label
export const SwitchHiddenInput = ChakraSwitch.HiddenInput

export interface SwitchRootProps extends ChakraSwitch.RootProps {
  size?: "sm" | "md" | "lg"
}

export const Switch = {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
  HiddenInput: SwitchHiddenInput,
}
