import { NativeSelectRoot, NativeSelectField } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "md" | "lg"
  variant?: "outline" | "subtle" | "plain"
  children: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, size = "md", variant = "outline", ...props }, ref) => {
    return (
      <NativeSelectRoot size={size} variant={variant}>
        <NativeSelectField ref={ref} {...props}>
          {children}
        </NativeSelectField>
      </NativeSelectRoot>
    )
  }
)

Select.displayName = "Select"
