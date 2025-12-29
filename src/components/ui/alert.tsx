import { Box, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"
import {
  FaCircleInfo,
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark
} from "react-icons/fa6"

export interface AlertProps extends BoxProps {
  status?: "info" | "success" | "warning" | "error"
}

const iconMap = {
  info: FaCircleInfo,
  success: FaCircleCheck,
  warning: FaTriangleExclamation,
  error: FaCircleXmark,
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, status = "info", ...props }, ref) => {
    const Icon = iconMap[status]

    return (
      <Box ref={ref} {...props}>
        <Icon style={{ flexShrink: 0 }} />
        <Box flex="1">{children}</Box>
      </Box>
    )
  }
)

Alert.displayName = "Alert"

export const AlertTitle = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} fontWeight="semibold" mb="1" {...props}>
        {children}
      </Box>
    )
  }
)

AlertTitle.displayName = "AlertTitle"

export const AlertDescription = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} fontSize="sm" {...props}>
        {children}
      </Box>
    )
  }
)

AlertDescription.displayName = "AlertDescription"
