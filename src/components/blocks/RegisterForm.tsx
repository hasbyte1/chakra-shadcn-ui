import { Box, Heading, Text, Stack, Flex, SimpleGrid } from "@chakra-ui/react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Card, CardHeader, CardBody, CardFooter } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Separator } from "../ui/separator"
import { FaGithub, FaGoogle } from "react-icons/fa6"

export interface RegisterFormProps {
  onSubmit?: (data: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    acceptTerms: boolean
  }) => void
  onGithubSignup?: () => void
  onGoogleSignup?: () => void
  onSignInClick?: () => void
}

export function RegisterForm({
  onSubmit,
  onGithubSignup,
  onGoogleSignup,
  onSignInClick,
}: RegisterFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit?.({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      acceptTerms: formData.get("terms") === "on",
    })
  }

  return (
    <Card variant="outline" maxW="md" w="100%" mx="auto">
      <CardHeader>
        <Stack gap="2" align="center" textAlign="center">
          <Heading as="h2" fontSize="2xl" fontWeight="bold">
            Create an account
          </Heading>
          <Text color="fg.muted">
            Enter your information to get started
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Stack gap="4">
            {/* Social Signup Buttons */}
            <Stack gap="3">
              {onGithubSignup && (
                <Button
                  type="button"
                  variant="outline"
                  w="100%"
                  onClick={onGithubSignup}
                >
                  <FaGithub />
                  Continue with GitHub
                </Button>
              )}
              {onGoogleSignup && (
                <Button
                  type="button"
                  variant="outline"
                  w="100%"
                  onClick={onGoogleSignup}
                >
                  <FaGoogle />
                  Continue with Google
                </Button>
              )}
            </Stack>

            {(onGithubSignup || onGoogleSignup) && (
              <Flex align="center" gap="4">
                <Separator flex="1" />
                <Text fontSize="sm" color="fg.muted">
                  OR
                </Text>
                <Separator flex="1" />
              </Flex>
            )}

            {/* Name Inputs */}
            <SimpleGrid columns={2} gap="4">
              <Stack gap="2">
                <Text fontSize="sm" fontWeight="medium">
                  First name
                </Text>
                <Input
                  name="firstName"
                  placeholder="John"
                  required
                />
              </Stack>
              <Stack gap="2">
                <Text fontSize="sm" fontWeight="medium">
                  Last name
                </Text>
                <Input
                  name="lastName"
                  placeholder="Doe"
                  required
                />
              </Stack>
            </SimpleGrid>

            {/* Email Input */}
            <Stack gap="2">
              <Text fontSize="sm" fontWeight="medium">
                Email
              </Text>
              <Input
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </Stack>

            {/* Password Input */}
            <Stack gap="2">
              <Text fontSize="sm" fontWeight="medium">
                Password
              </Text>
              <Input
                name="password"
                type="password"
                placeholder="Create a password"
                required
              />
            </Stack>

            {/* Confirm Password Input */}
            <Stack gap="2">
              <Text fontSize="sm" fontWeight="medium">
                Confirm password
              </Text>
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                required
              />
            </Stack>

            {/* Terms and Conditions */}
            <Checkbox.Root name="terms" required>
              <Checkbox.Control />
              <Checkbox.Label fontSize="sm">
                I agree to the{" "}
                <Box as="span" color="color.primary" textDecoration="underline">
                  Terms of Service
                </Box>{" "}
                and{" "}
                <Box as="span" color="color.primary" textDecoration="underline">
                  Privacy Policy
                </Box>
              </Checkbox.Label>
            </Checkbox.Root>

            {/* Submit Button */}
            <Button type="submit" w="100%">
              Create account
            </Button>
          </Stack>
        </form>
      </CardBody>
      {onSignInClick && (
        <CardFooter>
          <Text fontSize="sm" color="fg.muted" textAlign="center" w="100%">
            Already have an account?{" "}
            <Button
              variant="ghost"
              size="sm"
              onClick={onSignInClick}
              p="0"
              h="auto"
              color="color.primary"
            >
              Sign in
            </Button>
          </Text>
        </CardFooter>
      )}
    </Card>
  )
}
