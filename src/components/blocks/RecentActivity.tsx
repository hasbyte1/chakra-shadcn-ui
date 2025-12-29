import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react"
import { Card, CardHeader, CardBody } from "../ui/card"
import { Avatar } from "../ui/avatar"
import { Separator } from "../ui/separator"
import type { ReactNode } from "react"

export interface ActivityItem {
  id: string
  user: {
    name: string
    avatar?: string
  }
  action: string
  timestamp: string
  icon?: ReactNode
}

export interface RecentActivityProps {
  title?: string
  activities: ActivityItem[]
  maxHeight?: string
}

export function RecentActivity({
  title = "Recent Activity",
  activities,
  maxHeight,
}: RecentActivityProps) {
  return (
    <Card variant="outline">
      <CardHeader>
        <Heading as="h3" fontSize="lg" fontWeight="semibold">
          {title}
        </Heading>
      </CardHeader>
      <CardBody maxH={maxHeight} overflow="auto">
        <Stack gap="0">
          {activities.map((activity, index) => (
            <Box key={activity.id}>
              <Flex gap="4" py="4" align="flex-start">
                <Avatar.Root size="sm" flexShrink={0}>
                  {activity.user.avatar ? (
                    <Avatar.Image src={activity.user.avatar} alt={activity.user.name} />
                  ) : (
                    <Avatar.Fallback>
                      {activity.user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </Avatar.Fallback>
                  )}
                </Avatar.Root>
                <Stack gap="1" flex="1">
                  <Text fontSize="sm">
                    <Box as="span" fontWeight="semibold">
                      {activity.user.name}
                    </Box>{" "}
                    {activity.action}
                  </Text>
                  <Text fontSize="xs" color="fg.muted">
                    {activity.timestamp}
                  </Text>
                </Stack>
                {activity.icon && (
                  <Box fontSize="lg" color="fg.muted" flexShrink={0}>
                    {activity.icon}
                  </Box>
                )}
              </Flex>
              {index < activities.length - 1 && <Separator />}
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
}
