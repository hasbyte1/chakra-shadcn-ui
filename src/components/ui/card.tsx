import { Box, useRecipe, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CardProps extends BoxProps {
  variant?: "elevated" | "outline" | "subtle"
  size?: "sm" | "md" | "lg"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, size, ...props }, ref) => {
    const recipe = useRecipe({ key: "card" })
    const styles = recipe({ variant, size })

    return (
      <Box ref={ref} {...styles} {...props}>
        {children}
      </Box>
    )
  }
)

Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} pb="4" {...props}>
        {children}
      </Box>
    )
  }
)

CardHeader.displayName = "CardHeader"

export const CardBody = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} {...props}>
        {children}
      </Box>
    )
  }
)

CardBody.displayName = "CardBody"

export const CardFooter = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} pt="4" {...props}>
        {children}
      </Box>
    )
  }
)

CardFooter.displayName = "CardFooter"
