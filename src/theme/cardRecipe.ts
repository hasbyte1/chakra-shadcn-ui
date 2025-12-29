import { defineRecipe } from "@chakra-ui/react"

export const cardRecipe = defineRecipe({
  base: {
    bg: "bg",
    borderRadius: "lg",
    border: "1px solid",
    borderColor: "border",
    overflow: "hidden",
  },
  variants: {
    variant: {
      elevated: {
        boxShadow: "md",
        border: "none",
      },
      outline: {
        boxShadow: "none",
      },
      subtle: {
        bg: "bg.subtle",
        border: "none",
      },
    },
    size: {
      sm: {
        p: "3",
      },
      md: {
        p: "6",
      },
      lg: {
        p: "8",
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})
