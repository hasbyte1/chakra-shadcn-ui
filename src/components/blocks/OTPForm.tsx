import { Heading, Text, Stack } from "@chakra-ui/react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardBody, CardFooter } from "../ui/card"
import { PinInput } from "../ui/pin-input"

export interface OTPFormProps {
  onSubmit?: (otp: string) => void
  onResend?: () => void
  length?: number
  email?: string
}

export function OTPForm({
  onSubmit,
  onResend,
  length = 6,
  email,
}: OTPFormProps) {
  const handleComplete = (details: { value: string[] }) => {
    onSubmit?.(details.value.join(""))
  }

  return (
    <Card variant="outline" maxW="md" w="100%" mx="auto">
      <CardHeader>
        <Stack gap="2" align="center" textAlign="center">
          <Heading as="h2" fontSize="2xl" fontWeight="bold">
            Verify your email
          </Heading>
          <Text color="fg.muted">
            {email
              ? `We sent a code to ${email}`
              : "Enter the verification code sent to your email"}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack gap="6" align="center">
          <PinInput.Root
            onValueComplete={handleComplete}
            otp
            placeholder="0"
          >
            <PinInput.Control>
              {Array.from({ length }).map((_, index) => (
                <PinInput.Input key={index} index={index} />
              ))}
            </PinInput.Control>
          </PinInput.Root>

          <Button type="button" w="100%">
            Verify
          </Button>
        </Stack>
      </CardBody>
      {onResend && (
        <CardFooter>
          <Text fontSize="sm" color="fg.muted" textAlign="center" w="100%">
            Didn't receive the code?{" "}
            <Button
              variant="ghost"
              size="sm"
              onClick={onResend}
              p="0"
              h="auto"
              color="color.primary"
            >
              Resend
            </Button>
          </Text>
        </CardFooter>
      )}
    </Card>
  )
}
