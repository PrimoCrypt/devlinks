import { UserProps } from "@/types/userTypes"
import {create} from "zustand"
import { persist } from "zustand/middleware"


interface UserStoreProps {
   user: UserProps,
   updateUser : (userData: UserProps)=> void
}

const useUserStore = create<UserStoreProps>()(
    persist(
      (set) => ({
        user: {} as UserProps,
        updateUser: (userData) => set((state) => ({ user: userData }))
      }),
      {
        name: "user-store"
      }
    )
)
export default useUserStore