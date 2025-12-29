# Chakra UI v3 Design System

A comprehensive design system built on Chakra UI v3 with custom color palettes, reusable components, and pre-built blocks.

## Features

### Color Palettes

The design system includes 8 carefully crafted color palettes:

- **Primary (#D80621)**: Your brand's primary red color
- **Secondary**: Slate blue for secondary actions
- **Success**: Green for success states
- **Warning**: Orange for warnings
- **Error**: Red for errors
- **Info**: Blue for informational content
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Purple for special highlights

Each palette includes 11 shades (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950) for maximum flexibility.

### Design Tokens

#### Typography
- **Fonts**: Inter for headings and body, Fira Code for monospace
- **Font Sizes**: xs (12px) to 9xl (128px)
- **Font Weights**: thin (100) to black (900)
- **Line Heights**: none (1) to loose (2)

#### Spacing
- Consistent spacing scale from px (1px) to 96 (24rem)

#### Shadows
- 7 elevation levels: xs, sm, md, lg, xl, 2xl, inner

#### Border Radius
- From none to full (9999px) for various use cases

### Components

#### Button
```tsx
import { Button } from "@/components/ui/button"

// Variants: solid, outline, ghost, subtle
<Button variant="solid">Click me</Button>

// Color schemes: primary, secondary, success, warning, error, info
<Button colorScheme="primary">Primary</Button>

// Sizes: xs, sm, md, lg, xl
<Button size="lg">Large Button</Button>

// With loading state
<Button loading>Loading...</Button>
```

#### Card
```tsx
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"

// Variants: outline, elevated, subtle
<Card variant="elevated">
  <CardHeader>
    <Heading>Card Title</Heading>
  </CardHeader>
  <CardBody>
    Card content goes here
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Input
```tsx
import { Input } from "@/components/ui/input"

// Variants: outline, subtle, flushed
<Input placeholder="Enter text" variant="outline" />

// Sizes: sm, md, lg
<Input size="lg" placeholder="Large input" />
```

#### Badge
```tsx
import { Badge } from "@/components/ui/badge"

// Color schemes: primary, secondary, success, warning, error, info
<Badge colorScheme="success">Success</Badge>

// Variants: solid, outline, subtle
<Badge variant="outline">Outline</Badge>
```

#### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

// Status: info, success, warning, error
<Alert status="info">
  <AlertTitle>Info Alert</AlertTitle>
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>
```

#### Container
```tsx
import { Container } from "@/components/ui/container"

// Sizes: sm (640px), md (768px), lg (1024px), xl (1280px), full (100%)
<Container size="lg">
  Your content here
</Container>
```

### Pre-built Blocks

#### Hero Section
```tsx
import { Hero } from "@/components/blocks"

<Hero
  subtitle="Design System"
  title="Build Beautiful Apps"
  description="A comprehensive design system built on Chakra UI v3"
  primaryAction={{
    label: "Get Started",
    onClick: () => console.log("Get started")
  }}
  secondaryAction={{
    label: "Learn More",
    onClick: () => console.log("Learn more")
  }}
/>
```

#### Features Section
```tsx
import { Features } from "@/components/blocks"
import { FaRocket } from "react-icons/fa6"

<Features
  title="Why Choose Us?"
  description="Built with modern best practices"
  features={[
    {
      icon: <FaRocket />,
      title: "Fast Development",
      description: "Speed up your workflow"
    },
    // ... more features
  ]}
  columns={3}
/>
```

#### CTA Section
```tsx
import { CTA } from "@/components/blocks"

<CTA
  title="Ready to Get Started?"
  description="Join thousands of developers"
  primaryAction={{
    label: "Start Now",
    onClick: () => console.log("Start")
  }}
  variant="primary" // or "default", "gradient"
/>
```

#### Pricing Section
```tsx
import { Pricing } from "@/components/blocks"

<Pricing
  title="Simple Pricing"
  description="Choose your plan"
  plans={[
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["Feature 1", "Feature 2"],
      action: {
        label: "Get Started",
        onClick: () => console.log("Free")
      }
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      highlighted: true,
      badge: "Popular",
      features: ["All Free features", "Feature 3"],
      action: {
        label: "Start Trial",
        onClick: () => console.log("Pro")
      }
    }
  ]}
/>
```

#### Stats Section
```tsx
import { Stats } from "@/components/blocks"

<Stats
  title="Trusted by Developers"
  stats={[
    {
      value: "50+",
      label: "Components",
      description: "Ready to use"
    },
    // ... more stats
  ]}
/>
```

## Getting Started

### 1. Install Dependencies

The project comes with all dependencies pre-installed. If you need to reinstall:

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── alert.tsx
│   │   ├── container.tsx
│   │   └── index.ts
│   └── blocks/          # Pre-built page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── CTA.tsx
│       ├── Pricing.tsx
│       ├── Stats.tsx
│       └── index.ts
├── theme/
│   ├── index.ts         # Theme configuration
│   └── recipes.ts       # Component recipes
└── App.tsx              # Demo showcase
```

## Customization

### Changing the Primary Color

Edit `src/theme/index.ts` and update the primary color palette:

```typescript
primary: {
  500: { value: "#YOUR_COLOR" }, // Update this
  // Adjust other shades accordingly
}
```

### Adding New Component Recipes

Add new recipes in `src/theme/recipes.ts`:

```typescript
export const yourRecipe = defineRecipe({
  base: {
    // Base styles
  },
  variants: {
    // Your variants
  }
})
```

Then register it in `src/theme/index.ts`:

```typescript
recipes: {
  // ... existing recipes
  yourComponent: yourRecipe,
}
```

## Dark Mode

The design system includes full dark mode support. Use the `ColorModeButton` component to toggle between light and dark modes:

```tsx
import { ColorModeButton } from "@/components/ui/color-mode"

<ColorModeButton />
```

## TypeScript Support

All components are fully typed with TypeScript for excellent developer experience and type safety.

## Contributing

Feel free to extend the design system with additional components, blocks, or color palettes to suit your needs.

## License

MIT
