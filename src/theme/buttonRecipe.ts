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
