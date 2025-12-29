import { Heading, Text, Stack, Flex } from "@chakra-ui/react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Card, CardHeader, CardBody, CardFooter } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Separator } from "../ui/separator"
import { FaGithub, FaGoogle } from "react-icons/fa6"

export interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string; remember: boolean }) => void
  onGithubLogin?: () => void
  onGoogleLogin?: () => void
  onForgotPassword?: () => void
  onSignUpClick?: () => void
}

export function LoginForm({
  onSubmit,
  onGithubLogin,
  onGoogleLogin,
  onForgotPassword,
  onSignUpClick,
}: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit?.({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      remember: formData.get("remember") === "on",
    })
  }

  return (
    <Card variant="outline" maxW="md" w="100%" mx="auto">
      <CardHeader>
        <Stack gap="2" align="center" textAlign="center">
          <Heading as="h2" fontSize="2xl" fontWeight="bold">
            Welcome back
          </Heading>
          <Text color="fg.muted">
            Enter your credentials to access your account
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Stack gap="4">
            {/* Social Login Buttons */}
            <Stack gap="3">
              {onGithubLogin && (
                <Button
                  type="button"
                  variant="outline"
                  w="100%"
                  onClick={onGithubLogin}
                >
                  <FaGithub />
                  Continue with GitHub
                </Button>
              )}
              {onGoogleLogin && (
                <Button
                  type="button"
                  variant="outline"
                  w="100%"
                  onClick={onGoogleLogin}
                >
                  <FaGoogle />
                  Continue with Google
                </Button>
              )}
            </Stack>

            {(onGithubLogin || onGoogleLogin) && (
              <Flex align="center" gap="4">
                <Separator flex="1" />
                <Text fontSize="sm" color="fg.muted">
                  OR
                </Text>
                <Separator flex="1" />
              </Flex>
            )}

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
              <Flex justify="space-between" align="center">
                <Text fontSize="sm" fontWeight="medium">
                  Password
                </Text>
                {onForgotPassword && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={onForgotPassword}
                    p="0"
                    h="auto"
                    fontSize="sm"
                  >
                    Forgot password?
                  </Button>
                )}
              </Flex>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </Stack>

            {/* Remember Me */}
            <Checkbox.Root name="remember">
              <Checkbox.Control />
              <Checkbox.Label fontSize="sm">Remember me</Checkbox.Label>
            </Checkbox.Root>

            {/* Submit Button */}
            <Button type="submit" w="100%">
              Sign in
            </Button>
          </Stack>
        </form>
      </CardBody>
      {onSignUpClick && (
        <CardFooter>
          <Text fontSize="sm" color="fg.muted" textAlign="center" w="100%">
            Don't have an account?{" "}
            <Button
              variant="ghost"
              size="sm"
              onClick={onSignUpClick}
              p="0"
              h="auto"
              color="color.primary"
            >
              Sign up
            </Button>
          </Text>
        </CardFooter>
      )}
    </Card>
  )
}
