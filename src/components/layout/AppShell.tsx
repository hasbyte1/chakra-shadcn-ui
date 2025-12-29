import { Box, Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { useState } from "react"

export interface AppShellProps {
  sidebar?: ReactNode
  header?: ReactNode
  children: ReactNode
  sidebarWidth?: string
}

export function AppShell({
  sidebar,
  header,
  children,
  sidebarWidth = "280px",
}: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Flex minH="100vh" bg="bg">
      {/* Sidebar */}
      {sidebar && (
        <Box
          width={{ base: "0", lg: sidebarWidth }}
          flexShrink={0}
          position="relative"
        >
          {sidebar}
        </Box>
      )}

      {/* Main Content */}
      <Flex flex="1" direction="column" overflow="hidden">
        {/* Header */}
        {header && (
          <Box
            borderBottom="1px solid"
            borderColor="border"
            bg="bg"
            position="sticky"
            top="0"
            zIndex="sticky"
          >
            {header}
          </Box>
        )}

        {/* Page Content */}
        <Box flex="1" overflow="auto">
          {children}
        </Box>
      </Flex>

      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <Box
          position="fixed"
          inset="0"
          bg="blackAlpha.600"
          zIndex="overlay"
          display={{ base: "block", lg: "none" }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </Flex>
  )
}

export interface AppHeaderProps {
  children: ReactNode
  logo?: ReactNode
  actions?: ReactNode
}

export function AppHeader({ children, logo, actions }: AppHeaderProps) {
  return (
    <Flex
      h="16"
      px={{ base: "4", md: "6", lg: "8" }}
      align="center"
      justify="space-between"
      gap="4"
    >
      {logo && <Box flexShrink={0}>{logo}</Box>}
      <Box flex="1">{children}</Box>
      {actions && <Box flexShrink={0}>{actions}</Box>}
    </Flex>
  )
}
