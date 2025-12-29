import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface ButtonProps extends ChakraButtonProps {
  variant?: "solid" | "outline" | "ghost" | "subtle"
  colorScheme?: "primary" | "secondary" | "success" | "warning" | "error" | "info"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <ChakraButton ref={ref} {...props} />
  }
)

Button.displayName = "Button"
