import { Menu as ChakraMenu } from "@chakra-ui/react"

export const MenuRoot = ChakraMenu.Root
export const MenuTrigger = ChakraMenu.Trigger
export const MenuContent = ChakraMenu.Content
export const MenuItem = ChakraMenu.Item
export const MenuItemGroup = ChakraMenu.ItemGroup
export const MenuSeparator = ChakraMenu.Separator
export const MenuTriggerItem = ChakraMenu.TriggerItem
export const MenuContextTrigger = ChakraMenu.ContextTrigger

export interface MenuRootProps extends ChakraMenu.RootProps {
  size?: "sm" | "md"
}

export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
  ItemGroup: MenuItemGroup,
  Separator: MenuSeparator,
  TriggerItem: MenuTriggerItem,
  ContextTrigger: MenuContextTrigger,
}
