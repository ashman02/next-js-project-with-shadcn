"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAuthenticationStore } from "@/store/authentication"
import Link from "next/link"

export default function Home() {
  const isAuthenticated = useAuthenticationStore(
    (state) => state.isAuthenticated
  )
  const logout = useAuthenticationStore((state) => state.logout)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Home</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is home page you don&apos;t need to be authenticated to access
            this page
          </p>
        </CardContent>
        <CardFooter className="flex justify-evenly">
          <Link href="/login">
            <Button variant="link">Login</Button>
          </Link>
          <Link href="/example">
            <Button variant="link">Example</Button>
          </Link>
          {isAuthenticated && <Button onClick={() => logout()}>Logout</Button>}
        </CardFooter>
      </Card>
    </div>
  )
}
