import { defineRecipe } from "@chakra-ui/react"

export const inputRecipe = defineRecipe({
  base: {
    width: "100%",
    borderRadius: "md",
    border: "1px solid",
    borderColor: "border",
    bg: "bg",
    color: "fg",
    px: "3",
    py: "2",
    fontSize: "md",
    transition: "all 0.2s",
    _placeholder: {
      color: "fg.subtle",
    },
    _hover: {
      borderColor: "{colors.neutral.400}",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "color.primary",
      outlineOffset: "0",
      borderColor: "transparent",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    size: {
      sm: {
        fontSize: "sm",
        px: "2",
        py: "1",
        height: "8",
      },
      md: {
        fontSize: "md",
        px: "3",
        py: "2",
        height: "10",
      },
      lg: {
        fontSize: "lg",
        px: "4",
        py: "2.5",
        height: "12",
      },
    },
    variant: {
      outline: {},
      filled: {
        bg: "bg.subtle",
        border: "none",
        _hover: {
          bg: "bg.muted",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
