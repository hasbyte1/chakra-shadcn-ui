import { Avatar as ChakraAvatar } from "@chakra-ui/react"

export const AvatarRoot = ChakraAvatar.Root
export const AvatarImage = ChakraAvatar.Image
export const AvatarFallback = ChakraAvatar.Fallback

export interface AvatarRootProps extends ChakraAvatar.RootProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
}
