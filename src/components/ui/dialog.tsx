import { Dialog as ChakraDialog } from "@chakra-ui/react"

export const DialogRoot = ChakraDialog.Root
export const DialogTrigger = ChakraDialog.Trigger
export const DialogBackdrop = ChakraDialog.Backdrop
export const DialogPositioner = ChakraDialog.Positioner
export const DialogContent = ChakraDialog.Content
export const DialogHeader = ChakraDialog.Header
export const DialogTitle = ChakraDialog.Title
export const DialogDescription = ChakraDialog.Description
export const DialogBody = ChakraDialog.Body
export const DialogFooter = ChakraDialog.Footer
export const DialogCloseTrigger = ChakraDialog.CloseTrigger
export const DialogActionTrigger = ChakraDialog.ActionTrigger

export interface DialogRootProps extends ChakraDialog.RootProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
  centered?: boolean
}

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Backdrop: DialogBackdrop,
  Positioner: DialogPositioner,
  Content: DialogContent,
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
  Body: DialogBody,
  Footer: DialogFooter,
  CloseTrigger: DialogCloseTrigger,
  ActionTrigger: DialogActionTrigger,
}
