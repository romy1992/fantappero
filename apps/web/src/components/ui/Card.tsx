import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
