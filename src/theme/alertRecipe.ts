import { defineRecipe } from "@chakra-ui/react"

export const alertRecipe = defineRecipe({
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    p: "4",
    borderRadius: "md",
    border: "1px solid",
  },
  variants: {
    status: {
      info: {
        bg: "{colors.info.50}",
        borderColor: "{colors.info.200}",
        color: "{colors.info.900}",
        _dark: {
          bg: "{colors.info.950}",
          borderColor: "{colors.info.800}",
          color: "{colors.info.100}",
        },
      },
      success: {
        bg: "{colors.success.50}",
        borderColor: "{colors.success.200}",
        color: "{colors.success.900}",
        _dark: {
          bg: "{colors.success.950}",
          borderColor: "{colors.success.800}",
          color: "{colors.success.100}",
        },
      },
      warning: {
        bg: "{colors.warning.50}",
        borderColor: "{colors.warning.200}",
        color: "{colors.warning.900}",
        _dark: {
          bg: "{colors.warning.950}",
          borderColor: "{colors.warning.800}",
          color: "{colors.warning.100}",
        },
      },
      error: {
        bg: "{colors.error.50}",
        borderColor: "{colors.error.200}",
        color: "{colors.error.900}",
        _dark: {
          bg: "{colors.error.950}",
          borderColor: "{colors.error.800}",
          color: "{colors.error.100}",
        },
      },
    },
  },
  defaultVariants: {
    status: "info",
  },
})
