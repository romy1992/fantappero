import { useMemo } from "react";

export function useMockSession() {
  return useMemo(
    () => ({
      user: {
        name: "Demo Manager",
        email: "demo@fantappero.local"
      }
    }),
    []
  );
}
