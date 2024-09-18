"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthenticationStore } from "@/store/authentication"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const login = useAuthenticationStore((state) => state.login)
  const router = useRouter()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!username || !password) {
      setError("Both fields are required.")
    } else {
      // Simulate an API call
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })

      if (username === "user" && password === "password") {
        login()
        router.replace("/")
      } else {
        setError("Password and Username do not match.")
      }
    }
    setIsSubmitting(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Username e.g. user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password e.g. password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <CardFooter className="flex justify-end mt-4">
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Login"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
