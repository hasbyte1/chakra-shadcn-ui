import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "medium",
    borderRadius: "md",
    transition: "all 0.2s",
    cursor: "pointer",
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "color.primary",
      outlineOffset: "2px",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "color.primary",
        color: "color.primary.fg",
        _hover: {
          bg: "{colors.primary.600}",
        },
        _active: {
          bg: "{colors.primary.700}",
        },
      },
      outline: {
        border: "1px solid",
        borderColor: "border",
        bg: "transparent",
        _hover: {
          bg: "bg.subtle",
        },
        _active: {
          bg: "bg.muted",
        },
      },
      ghost: {
        bg: "transparent",
        _hover: {
          bg: "bg.subtle",
        },
        _active: {
          bg: "bg.muted",
        },
      },
      subtle: {
        bg: "bg.subtle",
        _hover: {
          bg: "bg.muted",
        },
        _active: {
          bg: "{colors.neutral.200}",
        },
      },
    },
    colorScheme: {
      primary: {},
      secondary: {
        "&[data-variant=solid]": {
          bg: "color.secondary",
          color: "color.secondary.fg",
          _hover: {
            bg: "{colors.secondary.600}",
          },
        },
      },
      success: {
        "&[data-variant=solid]": {
          bg: "color.success",
          color: "color.success.fg",
          _hover: {
            bg: "{colors.success.600}",
          },
        },
      },
      warning: {
        "&[data-variant=solid]": {
          bg: "color.warning",
          color: "color.warning.fg",
          _hover: {
            bg: "{colors.warning.600}",
          },
        },
      },
      error: {
        "&[data-variant=solid]": {
          bg: "color.error",
          color: "color.error.fg",
          _hover: {
            bg: "{colors.error.600}",
          },
        },
      },
      info: {
        "&[data-variant=solid]": {
          bg: "color.info",
          color: "color.info.fg",
          _hover: {
            bg: "{colors.info.600}",
          },
        },
      },
    },
    size: {
      xs: {
        fontSize: "xs",
        px: "2",
        py: "1",
        height: "6",
      },
      sm: {
        fontSize: "sm",
        px: "3",
        py: "1.5",
        height: "8",
      },
      md: {
        fontSize: "md",
        px: "4",
        py: "2",
        height: "10",
      },
      lg: {
        fontSize: "lg",
        px: "6",
        py: "2.5",
        height: "12",
      },
      xl: {
        fontSize: "xl",
        px: "8",
        py: "3",
        height: "14",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    colorScheme: "primary",
  },
})

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
