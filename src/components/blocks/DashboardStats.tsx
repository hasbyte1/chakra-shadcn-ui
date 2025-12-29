import { Box, Heading, Text, SimpleGrid, Stack, Flex } from "@chakra-ui/react"
import { Card, CardBody } from "../ui/card"
import type { ReactNode } from "react"

export interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: string
    trend: "up" | "down" | "neutral"
  }
  icon?: ReactNode
  description?: string
}

export function StatCard({
  title,
  value,
  change,
  icon,
  description,
}: StatCardProps) {
  const trendColor = {
    up: "color.success",
    down: "color.error",
    neutral: "fg.muted",
  }

  return (
    <Card variant="outline">
      <CardBody>
        <Stack gap="4">
          <Flex justify="space-between" align="flex-start">
            <Text fontSize="sm" fontWeight="medium" color="fg.muted">
              {title}
            </Text>
            {icon && (
              <Box fontSize="xl" color="fg.muted">
                {icon}
              </Box>
            )}
          </Flex>
          <Box>
            <Heading as="h3" fontSize="3xl" fontWeight="bold">
              {value}
            </Heading>
            {change && (
              <Text
                fontSize="sm"
                color={trendColor[change.trend]}
                mt="1"
              >
                {change.value}
              </Text>
            )}
            {description && (
              <Text fontSize="xs" color="fg.muted" mt="1">
                {description}
              </Text>
            )}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export interface DashboardStatsProps {
  stats: StatCardProps[]
  columns?: 2 | 3 | 4
}

export function DashboardStats({ stats, columns = 4 }: DashboardStatsProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: columns }} gap="6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </SimpleGrid>
  )
}
