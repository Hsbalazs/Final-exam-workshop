import { create } from "zustand"
import { jwtDecode } from "jwt-decode"

type User = {
    id: number;
    name: string;
}

type JwtPayload = {
    id: number;
    name: string;
}

type Auth = {
    token: string | null;
    user: User | null;
}

interface MarketplaceState {
    auth: Auth;
    setAuth: (token: string) => void;
    logout: () => void;
}

const useMarketplaceState = create<MarketplaceState>()((set) => ({
    auth: { token: null, user: null },
    logout: () => set({ auth: { token: null, user: null } }),
    setAuth: (token: string) => {
      try {
        const { id, name } = jwtDecode<JwtPayload>(token);
        return set((state) => ({
          ...state,
          auth: {
            user: {
              id,
              name,
            },
            token,
          },
        }));
      } catch (_e) {
        return set((state) => ({ ...state, auth: { token: null, user: null } }));
      }
    },
  }));
  
  export { useMarketplaceState };
  