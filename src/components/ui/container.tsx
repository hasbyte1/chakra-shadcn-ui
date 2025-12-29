import { Box, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface ContainerProps extends BoxProps {
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const sizeMap = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  full: "100%",
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = "lg", ...props }, ref) => {
    return (
      <Box
        ref={ref}
        mx="auto"
        px={{ base: "4", md: "6", lg: "8" }}
        maxW={sizeMap[size]}
        w="100%"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Container.displayName = "Container"
