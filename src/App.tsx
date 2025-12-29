import { Box, Heading, Text, Stack, SimpleGrid, Flex } from "@chakra-ui/react"
import { Provider } from "@/components/ui/provider"
import { ColorModeButton } from "@/components/ui/color-mode"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Container } from "@/components/ui/container"
import { Tabs } from "@/components/ui/tabs"
import { Dialog } from "@/components/ui/dialog"
import { Menu } from "@/components/ui/menu"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup } from "@/components/ui/radio"
import { toaster } from "@/components/ui/toaster"
import { Hero, Features, CTA, Pricing, Stats } from "@/components/blocks"
import {
  FaRocket,
  FaShield,
  FaGauge,
  FaPalette,
  FaCode,
  FaMobile,
  FaEllipsisVertical,
  FaXmark,
} from "react-icons/fa6"

function App() {
  return (
    <Provider>
      <Box minH="100vh" bg="bg">
        {/* Navigation */}
        <Box
          as="nav"
          position="sticky"
          top="0"
          bg="bg"
          borderBottom="1px solid"
          borderColor="border"
          zIndex="sticky"
        >
          <Container>
            <Flex h="16" align="center" justify="space-between">
              <Heading as="h1" fontSize="xl" fontWeight="bold" color="color.primary">
                Chakra Design System
              </Heading>
              <ColorModeButton />
            </Flex>
          </Container>
        </Box>

        {/* Hero Section */}
        <Hero
          subtitle="Design System"
          title="Build Beautiful Apps with Chakra UI v3"
          description="A comprehensive design system built on Chakra UI v3 with custom color palettes, reusable components, and pre-built blocks to accelerate your development."
          primaryAction={{
            label: "Get Started",
            onClick: () => console.log("Get started clicked"),
          }}
          secondaryAction={{
            label: "View Components",
            onClick: () => console.log("View components clicked"),
          }}
        />

        {/* Color Palette Section */}
        <Box py={{ base: "16", md: "24" }} bg="bg.subtle">
          <Container>
            <Stack gap="12">
              <Stack gap="4" align="center" textAlign="center">
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
                  Color Palettes
                </Heading>
                <Text fontSize="lg" color="fg.muted" maxW="2xl">
                  Our design system includes carefully crafted color palettes for primary, secondary, and semantic colors.
                </Text>
              </Stack>

              <Stack gap="8">
                {/* Primary Colors */}
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb="4" color="fg">
                    Primary (#D80621)
                  </Text>
                  <SimpleGrid columns={{ base: 5, md: 11 }} gap="2">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                      <Stack key={shade} gap="2">
                        <Box
                          h="16"
                          bg={`{colors.primary.${shade}}`}
                          borderRadius="md"
                          border="1px solid"
                          borderColor="border.muted"
                        />
                        <Text fontSize="xs" textAlign="center" color="fg.muted">
                          {shade}
                        </Text>
                      </Stack>
                    ))}
                  </SimpleGrid>
                </Box>

                {/* Semantic Colors */}
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
                  {[
                    { name: "Success", color: "success" },
                    { name: "Warning", color: "warning" },
                    { name: "Error", color: "error" },
                    { name: "Info", color: "info" },
                  ].map((item) => (
                    <Box key={item.color}>
                      <Text fontSize="lg" fontWeight="semibold" mb="4" color="fg">
                        {item.name}
                      </Text>
                      <SimpleGrid columns={6} gap="2">
                        {[50, 100, 200, 300, 400, 500].map((shade) => (
                          <Stack key={shade} gap="2">
                            <Box
                              h="12"
                              bg={`{colors.${item.color}.${shade}}`}
                              borderRadius="md"
                              border="1px solid"
                              borderColor="border.muted"
                            />
                            <Text fontSize="xs" textAlign="center" color="fg.muted">
                              {shade}
                            </Text>
                          </Stack>
                        ))}
                      </SimpleGrid>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Components Section */}
        <Box py={{ base: "16", md: "24" }}>
          <Container>
            <Stack gap="12">
              <Stack gap="4" align="center" textAlign="center">
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
                  Components
                </Heading>
                <Text fontSize="lg" color="fg.muted" maxW="2xl">
                  Explore our collection of reusable components with multiple variants and sizes.
                </Text>
              </Stack>

              {/* Buttons */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Buttons
                </Heading>
                <Stack gap="6">
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.muted">
                      Variants
                    </Text>
                    <Flex gap="3" flexWrap="wrap">
                      <Button variant="solid">Solid</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="subtle">Subtle</Button>
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.muted">
                      Color Schemes
                    </Text>
                    <Flex gap="3" flexWrap="wrap">
                      <Button colorScheme="primary">Primary</Button>
                      <Button colorScheme="secondary">Secondary</Button>
                      <Button colorScheme="success">Success</Button>
                      <Button colorScheme="warning">Warning</Button>
                      <Button colorScheme="error">Error</Button>
                      <Button colorScheme="info">Info</Button>
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.muted">
                      Sizes
                    </Text>
                    <Flex gap="3" flexWrap="wrap" align="center">
                      <Button size="xs">Extra Small</Button>
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                      <Button size="xl">Extra Large</Button>
                    </Flex>
                  </Box>
                </Stack>
              </Stack>

              {/* Badges */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Badges
                </Heading>
                <Flex gap="3" flexWrap="wrap">
                  <Badge colorScheme="primary">Primary</Badge>
                  <Badge colorScheme="secondary">Secondary</Badge>
                  <Badge colorScheme="success">Success</Badge>
                  <Badge colorScheme="warning">Warning</Badge>
                  <Badge colorScheme="error">Error</Badge>
                  <Badge colorScheme="info">Info</Badge>
                </Flex>
              </Stack>

              {/* Inputs */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Inputs
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="4" maxW="2xl">
                  <Input placeholder="Default input" />
                  <Input placeholder="Small input" size="sm" />
                  <Input placeholder="Large input" size="lg" />
                  <Input placeholder="Subtle variant" variant="subtle" />
                </SimpleGrid>
              </Stack>

              {/* Alerts */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Alerts
                </Heading>
                <Stack gap="4">
                  <Alert status="info">
                    <AlertTitle>Info Alert</AlertTitle>
                    <AlertDescription>
                      This is an informational message for your attention.
                    </AlertDescription>
                  </Alert>
                  <Alert status="success">
                    <AlertTitle>Success Alert</AlertTitle>
                    <AlertDescription>
                      Your action was completed successfully!
                    </AlertDescription>
                  </Alert>
                  <Alert status="warning">
                    <AlertTitle>Warning Alert</AlertTitle>
                    <AlertDescription>
                      Please review this warning before proceeding.
                    </AlertDescription>
                  </Alert>
                  <Alert status="error">
                    <AlertTitle>Error Alert</AlertTitle>
                    <AlertDescription>
                      An error occurred while processing your request.
                    </AlertDescription>
                  </Alert>
                </Stack>
              </Stack>

              {/* Cards */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Cards
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                  <Card variant="outline">
                    <CardHeader>
                      <Heading as="h4" fontSize="lg">
                        Outline Card
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text color="fg.muted">
                        This is a card with an outline variant.
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant="outline" w="100%">
                        Action
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card variant="elevated">
                    <CardHeader>
                      <Heading as="h4" fontSize="lg">
                        Elevated Card
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text color="fg.muted">
                        This is a card with an elevated variant.
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button w="100%">Action</Button>
                    </CardFooter>
                  </Card>
                  <Card variant="subtle">
                    <CardHeader>
                      <Heading as="h4" fontSize="lg">
                        Subtle Card
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text color="fg.muted">
                        This is a card with a subtle variant.
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant="subtle" w="100%">
                        Action
                      </Button>
                    </CardFooter>
                  </Card>
                </SimpleGrid>
              </Stack>

              {/* Tabs */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Tabs
                </Heading>
                <Tabs.Root defaultValue="tab1">
                  <Tabs.List>
                    <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Features</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Documentation</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="tab1">
                    <Text>
                      This is the overview tab content. Tabs help organize content
                      into separate views where only one view is visible at a time.
                    </Text>
                  </Tabs.Content>
                  <Tabs.Content value="tab2">
                    <Text>
                      Features tab content goes here. You can switch between tabs
                      to see different content sections.
                    </Text>
                  </Tabs.Content>
                  <Tabs.Content value="tab3">
                    <Text>
                      Documentation tab content. Tabs are great for progressive
                      disclosure and reducing cognitive load.
                    </Text>
                  </Tabs.Content>
                </Tabs.Root>
              </Stack>

              {/* Form Controls */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Form Controls
                </Heading>
                <Stack gap="4">
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.muted">
                      Switches
                    </Text>
                    <Flex gap="4" align="center" flexDirection="column" alignItems="flex-start">
                      <Switch.Root>
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                        <Switch.Label>Enable notifications</Switch.Label>
                      </Switch.Root>
                      <Switch.Root size="sm">
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                        <Switch.Label>Small</Switch.Label>
                      </Switch.Root>
                      <Switch.Root size="lg">
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                        <Switch.Label>Large</Switch.Label>
                      </Switch.Root>
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.muted">
                      Checkboxes
                    </Text>
                    <Stack gap="2">
                      <Checkbox.Root>
                        <Checkbox.Control />
                        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
                      </Checkbox.Root>
                      <Checkbox.Root defaultChecked>
                        <Checkbox.Control />
                        <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
                      </Checkbox.Root>
                      <Checkbox.Root disabled>
                        <Checkbox.Control />
                        <Checkbox.Label>Disabled option</Checkbox.Label>
                      </Checkbox.Root>
                    </Stack>
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.muted">
                      Radio Buttons
                    </Text>
                    <RadioGroup.Root defaultValue="option1">
                      <Stack gap="2">
                        <RadioGroup.Item value="option1">
                          <RadioGroup.ItemControl />
                          <RadioGroup.ItemText>Option 1</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="option2">
                          <RadioGroup.ItemControl />
                          <RadioGroup.ItemText>Option 2</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="option3">
                          <RadioGroup.ItemControl />
                          <RadioGroup.ItemText>Option 3</RadioGroup.ItemText>
                        </RadioGroup.Item>
                      </Stack>
                    </RadioGroup.Root>
                  </Box>
                </Stack>
              </Stack>

              {/* Interactive Components */}
              <Stack gap="6">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                  Interactive Components
                </Heading>
                <Flex gap="4" flexWrap="wrap">
                  {/* Dialog */}
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button>Open Dialog</Button>
                    </Dialog.Trigger>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Dialog.Header>
                          <Dialog.Title>Dialog Title</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                          <Text>
                            This is a dialog component. It's great for displaying important
                            information or getting user confirmation before proceeding.
                          </Text>
                        </Dialog.Body>
                        <Dialog.Footer>
                          <Dialog.ActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                          </Dialog.ActionTrigger>
                          <Dialog.ActionTrigger asChild>
                            <Button>Confirm</Button>
                          </Dialog.ActionTrigger>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            position="absolute"
                            top="2"
                            right="2"
                          >
                            <FaXmark />
                          </Button>
                        </Dialog.CloseTrigger>
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Dialog.Root>

                  {/* Menu */}
                  <Menu.Root>
                    <Menu.Trigger asChild>
                      <Button variant="outline">
                        <FaEllipsisVertical />
                      </Button>
                    </Menu.Trigger>
                    <Menu.Content>
                      <Menu.Item value="edit">Edit</Menu.Item>
                      <Menu.Item value="duplicate">Duplicate</Menu.Item>
                      <Menu.Separator />
                      <Menu.Item value="archive">Archive</Menu.Item>
                      <Menu.Item value="delete" color="color.error">
                        Delete
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Root>

                  {/* Toast */}
                  <Button
                    onClick={() =>
                      toaster.create({
                        title: "Success!",
                        description: "Your action was completed successfully.",
                        type: "success",
                      })
                    }
                  >
                    Show Toast
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Features Block */}
        <Features
          title="Why Choose Our Design System?"
          description="Built with modern best practices and developer experience in mind."
          features={[
            {
              icon: <FaRocket />,
              title: "Fast Development",
              description:
                "Pre-built components and blocks to speed up your development workflow.",
            },
            {
              icon: <FaShield />,
              title: "Type Safe",
              description:
                "Full TypeScript support with comprehensive type definitions.",
            },
            {
              icon: <FaGauge />,
              title: "High Performance",
              description:
                "Optimized components built on Chakra UI v3 for excellent performance.",
            },
            {
              icon: <FaPalette />,
              title: "Customizable",
              description:
                "Easily customize colors, typography, and components to match your brand.",
            },
            {
              icon: <FaCode />,
              title: "Developer Friendly",
              description:
                "Clean APIs and excellent documentation for a smooth developer experience.",
            },
            {
              icon: <FaMobile />,
              title: "Responsive",
              description:
                "Mobile-first design ensures your app looks great on all devices.",
            },
          ]}
        />

        {/* Stats Block */}
        <Stats
          title="Trusted by Developers"
          stats={[
            { value: "50+", label: "Components", description: "Ready to use" },
            { value: "100%", label: "Type Safe", description: "Full TypeScript support" },
            { value: "8", label: "Color Palettes", description: "Semantic colors" },
            { value: "5", label: "Pre-built Blocks", description: "Common patterns" },
          ]}
        />

        {/* Pricing Block */}
        <Pricing
          title="Simple, Transparent Pricing"
          description="Choose the plan that works best for your project."
          plans={[
            {
              name: "Free",
              description: "Perfect for personal projects",
              price: "$0",
              period: "forever",
              features: [
                "All components",
                "Basic color palettes",
                "Community support",
                "MIT License",
              ],
              action: {
                label: "Get Started",
                onClick: () => console.log("Free plan selected"),
              },
            },
            {
              name: "Pro",
              description: "For professional developers",
              price: "$49",
              period: "per month",
              highlighted: true,
              badge: "Popular",
              features: [
                "All Free features",
                "Premium components",
                "Advanced color palettes",
                "Priority support",
                "Figma design files",
                "Commercial license",
              ],
              action: {
                label: "Start Free Trial",
                onClick: () => console.log("Pro plan selected"),
              },
            },
            {
              name: "Enterprise",
              description: "For large teams",
              price: "$199",
              period: "per month",
              features: [
                "All Pro features",
                "Custom components",
                "Dedicated support",
                "Custom branding",
                "SLA guarantee",
                "Training sessions",
              ],
              action: {
                label: "Contact Sales",
                onClick: () => console.log("Enterprise plan selected"),
              },
            },
          ]}
        />

        {/* CTA Block */}
        <CTA
          title="Ready to Build Something Amazing?"
          description="Start using our design system today and accelerate your development workflow."
          primaryAction={{
            label: "Get Started Now",
            onClick: () => console.log("CTA primary clicked"),
          }}
          secondaryAction={{
            label: "View Documentation",
            onClick: () => console.log("CTA secondary clicked"),
          }}
          variant="primary"
        />

        {/* Footer */}
        <Box bg="bg.subtle" py="12" borderTop="1px solid" borderColor="border">
          <Container>
            <Stack gap="4" align="center" textAlign="center">
              <Text color="fg.muted">
                Built with ❤️ using Chakra UI v3
              </Text>
              <Text fontSize="sm" color="fg.subtle">
                © 2025 Chakra Design System. All rights reserved.
              </Text>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Provider>
  )
}

export default App
