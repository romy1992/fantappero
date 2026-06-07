import { NavLink } from "react-router-dom";
import { appNavigation } from "../../app/navigation";

const mobileItems = appNavigation.filter((item) =>
  ["/", "/roster", "/lineup", "/standings"].includes(item.to)
);

export function MobileNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 rounded-3xl border border-slate-800 bg-slate-950/95 p-2 shadow-2xl shadow-slate-950/70 backdrop-blur lg:hidden">
      {mobileItems.map((item) => (
        <NavLink
          className={({ isActive }) =>
            `rounded-2xl px-2 py-3 text-center text-xs font-semibold transition ${
              isActive ? "bg-emerald-400 text-slate-950" : "text-slate-400"
            }`
          }
          end={item.to === "/"}
          key={item.to}
          to={item.to}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
