import { APP_NAME } from "@fantappero/shared";
import { NavLink } from "react-router-dom";
import { appNavigation } from "../../app/navigation";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950/95 px-5 py-6 lg:block">
      <div className="rounded-3xl bg-emerald-400 p-5 text-slate-950">
        <p className="text-sm font-black uppercase tracking-[0.25em]">Fantasy</p>
        <h1 className="mt-2 text-3xl font-black">{APP_NAME}</h1>
      </div>
      <nav className="mt-8 space-y-2">
        {appNavigation.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
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
    </aside>
  );
}
