import { createContext } from "react";

export type ProtectedRoutesUsers = "admin" | "user" | null;

export const ProtectedRoutesContext = createContext<{
  isAllowed: boolean;
  redirectPath: string;
}>({ isAllowed: true, redirectPath: "" });
