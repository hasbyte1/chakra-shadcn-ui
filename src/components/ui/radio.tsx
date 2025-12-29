import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react"

export const RadioGroupRoot = ChakraRadioGroup.Root
export const RadioGroupItem = ChakraRadioGroup.Item
export const RadioGroupItemControl = ChakraRadioGroup.ItemControl
export const RadioGroupItemText = ChakraRadioGroup.ItemText
export const RadioGroupLabel = ChakraRadioGroup.Label
export const RadioGroupItemHiddenInput = ChakraRadioGroup.ItemHiddenInput

export interface RadioGroupRootProps extends ChakraRadioGroup.RootProps {
  size?: "sm" | "md" | "lg"
}

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  ItemHiddenInput: RadioGroupItemHiddenInput,
}
