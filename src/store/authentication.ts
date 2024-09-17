import { create } from "zustand"
import { persist } from "zustand/middleware"

type AuthStore = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

export const useAuthenticationStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
)
