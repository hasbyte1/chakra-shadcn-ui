import { Input as ChakraInput, type InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface InputProps extends Omit<ChakraInputProps, "variant"> {
  size?: "sm" | "md" | "lg"
  variant?: "outline" | "subtle" | "flushed"
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <ChakraInput ref={ref} {...props} />
  }
)

Input.displayName = "Input"
