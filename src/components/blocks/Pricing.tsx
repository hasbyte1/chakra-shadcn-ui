import { Box, Heading, Text, Stack, SimpleGrid, List } from "@chakra-ui/react"
import { Container } from "../ui/container"
import { Card, CardHeader, CardBody, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { FaCheck } from "react-icons/fa6"

export interface PricingPlan {
  name: string
  description?: string
  price: string
  period?: string
  features: string[]
  highlighted?: boolean
  badge?: string
  action: {
    label: string
    onClick: () => void
  }
}

export interface PricingProps {
  title?: string
  description?: string
  plans: PricingPlan[]
}

export function Pricing({ title, description, plans }: PricingProps) {
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: plans.length }} gap="8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                variant={plan.highlighted ? "elevated" : "outline"}
                borderWidth={plan.highlighted ? "2px" : "1px"}
                borderColor={plan.highlighted ? "color.primary" : "border"}
                position="relative"
              >
                {plan.badge && (
                  <Box position="absolute" top="-3" left="50%" transform="translateX(-50%)">
                    <Badge colorScheme="primary">{plan.badge}</Badge>
                  </Box>
                )}
                <CardHeader>
                  <Stack gap="4">
                    <Heading as="h3" fontSize="xl" fontWeight="semibold" color="fg">
                      {plan.name}
                    </Heading>
                    {plan.description && (
                      <Text fontSize="sm" color="fg.muted">
                        {plan.description}
                      </Text>
                    )}
                    <Box>
                      <Heading
                        as="h4"
                        fontSize="4xl"
                        fontWeight="bold"
                        color="fg"
                      >
                        {plan.price}
                      </Heading>
                      {plan.period && (
                        <Text fontSize="sm" color="fg.muted">
                          {plan.period}
                        </Text>
                      )}
                    </Box>
                  </Stack>
                </CardHeader>
                <CardBody>
                  <List.Root gap="3">
                    {plan.features.map((feature, featureIndex) => (
                      <List.Item key={featureIndex} display="flex" gap="3">
                        <Box color="color.success" mt="0.5">
                          <FaCheck />
                        </Box>
                        <Text fontSize="sm" color="fg.muted">
                          {feature}
                        </Text>
                      </List.Item>
                    ))}
                  </List.Root>
                </CardBody>
                <CardFooter>
                  <Button
                    w="100%"
                    variant={plan.highlighted ? "solid" : "outline"}
                    onClick={plan.action.onClick}
                  >
                    {plan.action.label}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
