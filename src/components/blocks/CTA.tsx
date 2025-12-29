import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react"
import { Button } from "../ui/button"
import { Container } from "../ui/container"
import { Card, CardBody } from "../ui/card"

export interface CTAProps {
  title: string
  description?: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  variant?: "default" | "primary" | "gradient"
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
}: CTAProps) {
  return (
    <Box py={{ base: "16", md: "24" }}>
      <Container>
        <Card variant={variant === "default" ? "subtle" : undefined}>
          <CardBody p={{ base: "8", md: "12" }}>
            <Stack
              gap="8"
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
            >
              <Stack gap="4" flex="1">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color={variant === "default" ? "fg" : "inherit"}
                >
                  {title}
                </Heading>
                {description && (
                  <Text
                    fontSize="lg"
                    color={variant === "default" ? "fg.muted" : "inherit"}
                    opacity={variant === "default" ? 1 : 0.9}
                  >
                    {description}
                  </Text>
                )}
              </Stack>
              {(primaryAction || secondaryAction) && (
                <Flex gap="4" flexWrap="wrap">
                  {primaryAction && (
                    <Button
                      size="lg"
                      variant={variant === "default" ? "solid" : "outline"}
                      colorScheme={variant === "default" ? "primary" : undefined}
                      onClick={primaryAction.onClick}
                      bg={variant !== "default" ? "white" : undefined}
                      color={variant !== "default" ? "color.primary" : undefined}
                    >
                      {primaryAction.label}
                    </Button>
                  )}
                  {secondaryAction && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={secondaryAction.onClick}
                      borderColor={variant !== "default" ? "white" : undefined}
                      color={variant !== "default" ? "white" : undefined}
                      _hover={{
                        bg: variant !== "default" ? "whiteAlpha.200" : undefined,
                      }}
                    >
                      {secondaryAction.label}
                    </Button>
                  )}
                </Flex>
              )}
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  )
}
