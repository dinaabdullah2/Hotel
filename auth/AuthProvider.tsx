import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { notify } from "../utils/toast";

type User = {
  [x: string]: ReactNode;
  type: any;
  // Define the type for the user object here.
  // Modify it as per the actual structure of the user data.
  // For example: id: string; name: string; email: string; etc.
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | null;
  login: (data: User, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(
  null as unknown as AuthContextType
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (data: User, token: string) => {
    setUser(data);
    setCookie("token", token);
    window.localStorage.setItem("user", JSON.stringify(data));
  }, []);

  const logout = useCallback(async () => {
    deleteCookie("token");
    window.localStorage.removeItem("user");
    setUser(null);
    notify("success","Visit Us Again")
  }, []);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
