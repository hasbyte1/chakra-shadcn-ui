import { Checkbox as ChakraCheckbox } from "@chakra-ui/react"

export const CheckboxRoot = ChakraCheckbox.Root
export const CheckboxControl = ChakraCheckbox.Control
export const CheckboxLabel = ChakraCheckbox.Label
export const CheckboxGroup = ChakraCheckbox.Group
export const CheckboxHiddenInput = ChakraCheckbox.HiddenInput
export const CheckboxIndicator = ChakraCheckbox.Indicator

export interface CheckboxRootProps extends ChakraCheckbox.RootProps {
  size?: "sm" | "md" | "lg"
}

export const Checkbox = {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
  Group: CheckboxGroup,
  HiddenInput: CheckboxHiddenInput,
  Indicator: CheckboxIndicator,
}
