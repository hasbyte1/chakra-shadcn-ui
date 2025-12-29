import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import type { ReactNode } from "react"
import { FaXmark } from "react-icons/fa6"

export interface SidebarProps {
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  header?: ReactNode
  footer?: ReactNode
  width?: string
}

export function Sidebar({
  children,
  isOpen = true,
  onClose,
  header,
  footer,
  width = "280px",
}: SidebarProps) {
  return (
    <Box
      as="aside"
      position={{ base: "fixed", lg: "sticky" }}
      top="0"
      left={{ base: isOpen ? "0" : `-${width}`, lg: "0" }}
      height="100vh"
      width={width}
      bg="bg"
      borderRight="1px solid"
      borderColor="border"
      transition="left 0.3s"
      zIndex={{ base: "modal", lg: "auto" }}
      display="flex"
      flexDirection="column"
    >
      {/* Header */}
      {header && (
        <>
          <Flex
            justify="space-between"
            align="center"
            p="4"
            borderBottom="1px solid"
            borderColor="border"
          >
            {header}
            {onClose && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                display={{ base: "flex", lg: "none" }}
              >
                <FaXmark />
              </Button>
            )}
          </Flex>
        </>
      )}

      {/* Content */}
      <Box flex="1" overflow="auto" p="4">
        {children}
      </Box>

      {/* Footer */}
      {footer && (
        <>
          <Separator />
          <Box p="4">{footer}</Box>
        </>
      )}
    </Box>
  )
}

export interface SidebarNavItemProps {
  icon?: ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
}

export function SidebarNavItem({
  icon,
  label,
  isActive,
  onClick,
}: SidebarNavItemProps) {
  return (
    <Button
      variant={isActive ? "subtle" : "ghost"}
      justifyContent="flex-start"
      w="100%"
      gap="3"
      onClick={onClick}
      colorScheme={isActive ? "primary" : undefined}
    >
      {icon && <Box fontSize="lg">{icon}</Box>}
      <Text>{label}</Text>
    </Button>
  )
}

export interface SidebarSectionProps {
  title?: string
  children: ReactNode
}

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <Stack gap="2">
      {title && (
        <Heading
          as="h3"
          fontSize="xs"
          fontWeight="semibold"
          color="fg.muted"
          textTransform="uppercase"
          letterSpacing="wider"
          px="3"
          py="2"
        >
          {title}
        </Heading>
      )}
      {children}
    </Stack>
  )
}
