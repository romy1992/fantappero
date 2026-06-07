export const appNavigation = [
  { label: "Dashboard", to: "/" },
  { label: "Crea lega", to: "/leagues/new" },
  { label: "Join lega", to: "/leagues/join" },
  { label: "Squadra", to: "/team" },
  { label: "Rosa", to: "/roster" },
  { label: "Giocatori", to: "/players" },
  { label: "Formazione", to: "/lineup" },
  { label: "Classifica", to: "/standings" }
] as const;
