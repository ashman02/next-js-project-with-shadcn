"use client"
import React from "react"
import { useAuthenticationStore } from "@/store/authentication"
import Link from "next/link"

const Example = () => {
  const isAuthenticated = useAuthenticationStore(
    (state) => state.isAuthenticated
  )
  return <div>{isAuthenticated ? "You is logged in" : "You should login"}
  <Link href="/">Go to Home page</Link>
  </div>
}

export default Example
