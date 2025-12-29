import { Box, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface SeparatorProps extends BoxProps {
  orientation?: "horizontal" | "vertical"
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = "horizontal", ...props }, ref) => {
    return (
      <Box
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        bg="border"
        {...(orientation === "horizontal"
          ? { height: "1px", width: "100%" }
          : { width: "1px", height: "100%" })}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"
