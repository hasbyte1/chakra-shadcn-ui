import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  buttonRecipe,
  cardRecipe,
  inputRecipe,
  badgeRecipe,
  alertRecipe,
} from "./recipes"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Brand Colors
        primary: {
          50: { value: "#FEE9EC" },
          100: { value: "#FCC2CB" },
          200: { value: "#FA9BA9" },
          300: { value: "#F77488" },
          400: { value: "#F54D66" },
          500: { value: "#D80621" }, // Primary brand color
          600: { value: "#C0051E" },
          700: { value: "#A0041A" },
          800: { value: "#800316" },
          900: { value: "#600212" },
          950: { value: "#40010C" },
        },
        secondary: {
          50: { value: "#F0F4F8" },
          100: { value: "#D9E2EC" },
          102: { value: "#BCCCDC" },
          200: { value: "#9FB3C8" },
          300: { value: "#829AB1" },
          400: { value: "#627D98" },
          500: { value: "#486581" }, // Secondary brand color
          600: { value: "#334E68" },
          700: { value: "#243B53" },
          800: { value: "#102A43" },
          900: { value: "#0A1F33" },
          950: { value: "#051523" },
        },
        // Semantic Colors
        success: {
          50: { value: "#E6F9F0" },
          100: { value: "#C0F0D8" },
          200: { value: "#99E6C0" },
          300: { value: "#73DDA8" },
          400: { value: "#4DD390" },
          500: { value: "#10B981" }, // Success green
          600: { value: "#0E9F6E" },
          700: { value: "#0C855B" },
          800: { value: "#0A6B48" },
          900: { value: "#085135" },
          950: { value: "#053722" },
        },
        warning: {
          50: { value: "#FFF8E6" },
          100: { value: "#FFECC0" },
          200: { value: "#FFE099" },
          300: { value: "#FFD473" },
          400: { value: "#FFC84D" },
          500: { value: "#F59E0B" }, // Warning yellow/orange
          600: { value: "#DD8E0A" },
          700: { value: "#B97408" },
          800: { value: "#955A07" },
          900: { value: "#714405" },
          950: { value: "#4D2E03" },
        },
        error: {
          50: { value: "#FEE9E9" },
          100: { value: "#FCC2C2" },
          200: { value: "#FA9B9B" },
          300: { value: "#F77474" },
          400: { value: "#F54D4D" },
          500: { value: "#EF4444" }, // Error red
          600: { value: "#D73D3D" },
          700: { value: "#B33333" },
          800: { value: "#8F2929" },
          900: { value: "#6B1F1F" },
          950: { value: "#471515" },
        },
        info: {
          50: { value: "#E6F2FF" },
          100: { value: "#C0DEFF" },
          200: { value: "#99CAFF" },
          300: { value: "#73B6FF" },
          400: { value: "#4DA2FF" },
          500: { value: "#3B82F6" }, // Info blue
          600: { value: "#3574DE" },
          700: { value: "#2C60B8" },
          800: { value: "#234C92" },
          900: { value: "#1A386C" },
          950: { value: "#112446" },
        },
        neutral: {
          50: { value: "#FAFAFA" },
          100: { value: "#F4F4F5" },
          200: { value: "#E4E4E7" },
          300: { value: "#D4D4D8" },
          400: { value: "#A1A1AA" },
          500: { value: "#71717A" },
          600: { value: "#52525B" },
          700: { value: "#3F3F46" },
          800: { value: "#27272A" },
          900: { value: "#18181B" },
          950: { value: "#09090B" },
        },
        accent: {
          50: { value: "#FDF4FF" },
          100: { value: "#FAE8FF" },
          200: { value: "#F5D0FE" },
          300: { value: "#F0ABFC" },
          400: { value: "#E879F9" },
          500: { value: "#D946EF" }, // Accent purple
          600: { value: "#C026D3" },
          700: { value: "#A21CAF" },
          800: { value: "#86198F" },
          900: { value: "#701A75" },
          950: { value: "#4A044E" },
        },
      },
      fonts: {
        heading: { value: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif` },
        body: { value: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif` },
        mono: { value: `'Fira Code', 'SF Mono', Monaco, Consolas, 'Courier New', monospace` },
      },
      fontSizes: {
        xs: { value: "0.75rem" },    // 12px
        sm: { value: "0.875rem" },   // 14px
        md: { value: "1rem" },       // 16px
        lg: { value: "1.125rem" },   // 18px
        xl: { value: "1.25rem" },    // 20px
        "2xl": { value: "1.5rem" },   // 24px
        "3xl": { value: "1.875rem" }, // 30px
        "4xl": { value: "2.25rem" },  // 36px
        "5xl": { value: "3rem" },     // 48px
        "6xl": { value: "3.75rem" },  // 60px
        "7xl": { value: "4.5rem" },   // 72px
        "8xl": { value: "6rem" },     // 96px
        "9xl": { value: "8rem" },     // 128px
      },
      fontWeights: {
        thin: { value: "100" },
        extralight: { value: "200" },
        light: { value: "300" },
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
        extrabold: { value: "800" },
        black: { value: "900" },
      },
      lineHeights: {
        none: { value: "1" },
        tight: { value: "1.25" },
        snug: { value: "1.375" },
        normal: { value: "1.5" },
        relaxed: { value: "1.625" },
        loose: { value: "2" },
      },
      radii: {
        none: { value: "0" },
        sm: { value: "0.125rem" },
        base: { value: "0.25rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
        xl: { value: "0.75rem" },
        "2xl": { value: "1rem" },
        "3xl": { value: "1.5rem" },
        full: { value: "9999px" },
      },
      shadows: {
        xs: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
        sm: { value: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" },
        md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
        lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)" },
        xl: { value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" },
        "2xl": { value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
        inner: { value: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)" },
      },
      spacing: {
        px: { value: "1px" },
        0: { value: "0" },
        0.5: { value: "0.125rem" },
        1: { value: "0.25rem" },
        1.5: { value: "0.375rem" },
        2: { value: "0.5rem" },
        2.5: { value: "0.625rem" },
        3: { value: "0.75rem" },
        3.5: { value: "0.875rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        7: { value: "1.75rem" },
        8: { value: "2rem" },
        9: { value: "2.25rem" },
        10: { value: "2.5rem" },
        12: { value: "3rem" },
        14: { value: "3.5rem" },
        16: { value: "4rem" },
        20: { value: "5rem" },
        24: { value: "6rem" },
        28: { value: "7rem" },
        32: { value: "8rem" },
        36: { value: "9rem" },
        40: { value: "10rem" },
        44: { value: "11rem" },
        48: { value: "12rem" },
        52: { value: "13rem" },
        56: { value: "14rem" },
        60: { value: "15rem" },
        64: { value: "16rem" },
        72: { value: "18rem" },
        80: { value: "20rem" },
        96: { value: "24rem" },
      },
    },
    semanticTokens: {
      colors: {
        // Primary semantic tokens
        "color.primary": {
          value: { base: "{colors.primary.500}", _dark: "{colors.primary.400}" },
        },
        "color.primary.fg": {
          value: { base: "white", _dark: "white" },
        },
        // Secondary semantic tokens
        "color.secondary": {
          value: { base: "{colors.secondary.500}", _dark: "{colors.secondary.400}" },
        },
        "color.secondary.fg": {
          value: { base: "white", _dark: "white" },
        },
        // Success semantic tokens
        "color.success": {
          value: { base: "{colors.success.500}", _dark: "{colors.success.400}" },
        },
        "color.success.fg": {
          value: { base: "white", _dark: "white" },
        },
        // Warning semantic tokens
        "color.warning": {
          value: { base: "{colors.warning.500}", _dark: "{colors.warning.400}" },
        },
        "color.warning.fg": {
          value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.900}" },
        },
        // Error semantic tokens
        "color.error": {
          value: { base: "{colors.error.500}", _dark: "{colors.error.400}" },
        },
        "color.error.fg": {
          value: { base: "white", _dark: "white" },
        },
        // Info semantic tokens
        "color.info": {
          value: { base: "{colors.info.500}", _dark: "{colors.info.400}" },
        },
        "color.info.fg": {
          value: { base: "white", _dark: "white" },
        },
        // Background colors
        bg: {
          value: { base: "white", _dark: "{colors.neutral.950}" },
        },
        "bg.subtle": {
          value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" },
        },
        "bg.muted": {
          value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" },
        },
        // Foreground colors
        fg: {
          value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" },
        },
        "fg.muted": {
          value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.400}" },
        },
        "fg.subtle": {
          value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.500}" },
        },
        // Border colors
        border: {
          value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" },
        },
        "border.muted": {
          value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
      card: cardRecipe,
      input: inputRecipe,
      badge: badgeRecipe,
      alert: alertRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, config)
