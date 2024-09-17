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

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const login = useAuthenticationStore((state) => state.login)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "test" && password === "test1234") {
      login()
      router.replace("/")
    } else {
      setError("Invalid username or password")
    }
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
                placeholder="Username e.g. test"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password e.g. test1234"
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
              <Button type="submit">Login</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
