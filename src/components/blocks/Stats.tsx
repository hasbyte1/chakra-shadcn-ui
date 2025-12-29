import { Box, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react"
import { Container } from "../ui/container"

export interface Stat {
  value: string
  label: string
  description?: string
}

export interface StatsProps {
  title?: string
  description?: string
  stats: Stat[]
}

export function Stats({ title, description, stats }: StatsProps) {
  return (
    <Box py={{ base: "16", md: "24" }} bg="bg.subtle">
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: stats.length }} gap="8">
            {stats.map((stat, index) => (
              <Stack key={index} gap="2" align="center" textAlign="center">
                <Heading
                  as="h3"
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  color="color.primary"
                >
                  {stat.value}
                </Heading>
                <Text fontSize="lg" fontWeight="semibold" color="fg">
                  {stat.label}
                </Text>
                {stat.description && (
                  <Text fontSize="sm" color="fg.muted">
                    {stat.description}
                  </Text>
                )}
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
