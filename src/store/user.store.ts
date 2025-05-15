import { UserProps } from "@/types/userTypes"
import {create} from "zustand"


interface UserStoreProps {
   user: UserProps,
   updateUser : (userData: UserProps)=> void
}

const useUserStore = create<UserStoreProps>((set)=>({
    user: {} as UserProps ,
    updateUser: (userData) => set((state) => ({ user: userData }))
}))

export default useUserStore