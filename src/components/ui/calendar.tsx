import { Box, Grid, Heading, Stack, Flex } from "@chakra-ui/react"
import { Button } from "./button"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export interface CalendarProps {
  selected?: Date
  onSelect?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function Calendar({
  selected,
  onSelect,
  minDate,
  maxDate,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(selected || new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days: (number | null)[] = []

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push(null)
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const handleDayClick = (day: number) => {
    const date = new Date(year, month, day)
    if (minDate && date < minDate) return
    if (maxDate && date > maxDate) return
    onSelect?.(date)
  }

  const isSelected = (day: number) => {
    if (!selected) return false
    return (
      selected.getDate() === day &&
      selected.getMonth() === month &&
      selected.getFullYear() === year
    )
  }

  const isToday = (day: number) => {
    const today = new Date()
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    )
  }

  const isDisabled = (day: number) => {
    const date = new Date(year, month, day)
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  return (
    <Stack gap="4" w="100%" maxW="sm">
      {/* Header */}
      <Flex justify="space-between" align="center">
        <Heading as="h3" fontSize="lg" fontWeight="semibold">
          {MONTHS[month]} {year}
        </Heading>
        <Flex gap="1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevMonth}
            aria-label="Previous month"
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            <FaChevronRight />
          </Button>
        </Flex>
      </Flex>

      {/* Days of week */}
      <Grid templateColumns="repeat(7, 1fr)" gap="1">
        {DAYS.map((day) => (
          <Box
            key={day}
            textAlign="center"
            fontSize="xs"
            fontWeight="medium"
            color="fg.muted"
            py="2"
          >
            {day}
          </Box>
        ))}
      </Grid>

      {/* Calendar days */}
      <Grid templateColumns="repeat(7, 1fr)" gap="1">
        {days.map((day, index) => (
          <Box
            key={index}
            aspectRatio="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {day !== null && (
              <Button
                variant={isSelected(day) ? "solid" : "ghost"}
                size="sm"
                w="100%"
                h="100%"
                onClick={() => handleDayClick(day)}
                disabled={isDisabled(day)}
                borderRadius="md"
                bg={
                  isSelected(day)
                    ? "color.primary"
                    : isToday(day)
                    ? "bg.subtle"
                    : undefined
                }
                color={
                  isSelected(day)
                    ? "white"
                    : isToday(day)
                    ? "color.primary"
                    : undefined
                }
                fontWeight={isToday(day) ? "semibold" : "normal"}
              >
                {day}
              </Button>
            )}
          </Box>
        ))}
      </Grid>
    </Stack>
  )
}
