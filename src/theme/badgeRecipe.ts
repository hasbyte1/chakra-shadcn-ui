import { defineRecipe } from "@chakra-ui/react"

export const badgeRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "medium",
    fontSize: "xs",
    px: "2",
    py: "0.5",
    borderRadius: "base",
    textTransform: "uppercase",
    letterSpacing: "wide",
  },
  variants: {
    variant: {
      solid: {
        bg: "color.primary",
        color: "color.primary.fg",
      },
      outline: {
        border: "1px solid",
        borderColor: "border",
        bg: "transparent",
      },
      subtle: {
        bg: "bg.subtle",
        color: "fg",
      },
    },
    colorScheme: {
      primary: {},
      secondary: {
        "&[data-variant=solid]": {
          bg: "color.secondary",
          color: "color.secondary.fg",
        },
      },
      success: {
        "&[data-variant=solid]": {
          bg: "color.success",
          color: "color.success.fg",
        },
      },
      warning: {
        "&[data-variant=solid]": {
          bg: "color.warning",
          color: "color.warning.fg",
        },
      },
      error: {
        "&[data-variant=solid]": {
          bg: "color.error",
          color: "color.error.fg",
        },
      },
      info: {
        "&[data-variant=solid]": {
          bg: "color.info",
          color: "color.info.fg",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
  },
})
