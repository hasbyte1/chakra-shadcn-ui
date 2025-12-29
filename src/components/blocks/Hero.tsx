import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react"
import { Button } from "../ui/button"
import { Container } from "../ui/container"

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <Box bg="bg" py={{ base: "16", md: "24" }}>
      <Container>
        <Stack gap="8" align="center" textAlign="center" maxW="3xl" mx="auto">
          {subtitle && (
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="color.primary"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {subtitle}
            </Text>
          )}
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            lineHeight="tight"
            color="fg"
          >
            {title}
          </Heading>
          {description && (
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="2xl"
            >
              {description}
            </Text>
          )}
          {(primaryAction || secondaryAction) && (
            <Flex gap="4" flexWrap="wrap" justify="center">
              {primaryAction && (
                <Button
                  size="lg"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </Flex>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
