import { create } from "zustand";

interface User {
  email: string,
  nickname: string;
  profileImageUrl: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void; 
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));

export default useUserStore;