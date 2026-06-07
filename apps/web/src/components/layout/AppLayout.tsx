import { Outlet } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />
        <main className="min-h-screen flex-1 px-4 pb-28 pt-6 sm:px-6 lg:px-10 lg:pb-10">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
