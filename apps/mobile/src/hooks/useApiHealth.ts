import { useEffect, useState } from "react";
import { apiClient } from "../lib/api";

type ApiHealthState = {
  status: "checking" | "online" | "offline";
  label: string;
};

export function useApiHealth(): ApiHealthState {
  const [state, setState] = useState<ApiHealthState>({
    status: "checking",
    label: "Verifica API..."
  });

  useEffect(() => {
    let isMounted = true;

    apiClient
      .getHealth()
      .then((health) => {
        if (isMounted) {
          setState({ status: "online", label: `${health.service}: ${health.status}` });
        }
      })
      .catch(() => {
        if (isMounted) {
          setState({ status: "offline", label: "Dati mock in uso" });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
