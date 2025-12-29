import { Box, useRecipe, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface BadgeProps extends BoxProps {
  variant?: "solid" | "outline" | "subtle"
  colorScheme?: "primary" | "secondary" | "success" | "warning" | "error" | "info"
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant, colorScheme, ...props }, ref) => {
    const recipe = useRecipe({ key: "badge" })
    const styles = recipe({ variant, colorScheme } as any)

    return (
      <Box ref={ref} {...styles} data-variant={variant} data-color-scheme={colorScheme} {...props}>
        {children}
      </Box>
    )
  }
)

Badge.displayName = "Badge"
