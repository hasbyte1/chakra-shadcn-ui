import { Tabs as ChakraTabs } from "@chakra-ui/react"

export const TabsRoot = ChakraTabs.Root
export const TabsList = ChakraTabs.List
export const TabsTrigger = ChakraTabs.Trigger
export const TabsContent = ChakraTabs.Content
export const TabsIndicator = ChakraTabs.Indicator

export interface TabsRootProps extends ChakraTabs.RootProps {
  variant?: "line" | "enclosed" | "outline" | "subtle" | "plain"
  size?: "sm" | "md" | "lg"
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
}
