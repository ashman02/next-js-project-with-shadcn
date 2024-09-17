"use client"
import { Button } from "@/components/ui/button";
import { useAuthenticationStore } from "@/store/authentication";
import Link from "next/link";

export default function Home() {
  const isAuthenticated = useAuthenticationStore((state) => state.isAuthenticated)
  console.log(isAuthenticated)
  const login = useAuthenticationStore((state) => state.login)
  const logout = useAuthenticationStore((state) => state.logout)
  return (
    <div>
      Home Page
      <Button onClick={() => {
        isAuthenticated ? logout() : login()
      }} variant="outline">{
        isAuthenticated ? "Logout" : "Login"
        }</Button>
        <Link href="/example">Go to example page</Link>
    </div>
  );
}
