import { Box, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react"
import { Container } from "../ui/container"
import { Card, CardBody } from "../ui/card"
import type { ReactNode } from "react"

export interface Feature {
  icon?: ReactNode
  title: string
  description: string
}

export interface FeaturesProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function Features({
  title,
  description,
  features,
  columns = 3,
}: FeaturesProps) {
  return (
    <Box py={{ base: "16", md: "24" }}>
      <Container>
        <Stack gap="12">
          {(title || description) && (
            <Stack gap="4" align="center" textAlign="center" maxW="2xl" mx="auto">
              {title && (
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="bold"
                  color="fg"
                >
                  {title}
                </Heading>
              )}
              {description && (
                <Text fontSize="lg" color="fg.muted">
                  {description}
                </Text>
              )}
            </Stack>
          )}
          <SimpleGrid columns={{ base: 1, md: 2, lg: columns }} gap="8">
            {features.map((feature, index) => (
              <Card key={index} variant="outline">
                <CardBody>
                  <Stack gap="4">
                    {feature.icon && (
                      <Box fontSize="3xl" color="color.primary">
                        {feature.icon}
                      </Box>
                    )}
                    <Heading as="h3" fontSize="xl" fontWeight="semibold" color="fg">
                      {feature.title}
                    </Heading>
                    <Text color="fg.muted">{feature.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
