import { Textarea as ChakraTextarea, type TextareaProps as ChakraTextareaProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface TextareaProps extends ChakraTextareaProps {
  size?: "sm" | "md" | "lg"
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <ChakraTextarea ref={ref} {...props} />
  }
)

Textarea.displayName = "Textarea"
