import { Box, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface BadgeProps extends BoxProps {
  variant?: "solid" | "outline" | "subtle"
  colorScheme?: "primary" | "secondary" | "success" | "warning" | "error" | "info"
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} {...props}>
        {children}
      </Box>
    )
  }
)

Badge.displayName = "Badge"
