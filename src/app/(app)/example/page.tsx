"use client"
import React, { useEffect, useState } from "react"
import { useAuthenticationStore } from "@/store/authentication"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const Example = () => {

  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = useAuthenticationStore(
    (state) => state.isAuthenticated
  )
  const logout = useAuthenticationStore((state) => state.logout)
  const router = useRouter()

  useEffect(() => {
    if(!isAuthenticated && !isLoading){
      router.replace("/login")
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated, router,isLoading])

  if(isLoading){
    return <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
    </div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Protected Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You are logged in you can visit protected page.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => logout()}>Logout</Button>
          <Button variant="link" onClick={() => router.push("/")}>Go to Home</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Example
