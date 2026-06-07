import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ className = "", error, id, label, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="block space-y-2" htmlFor={inputId}>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        id={inputId}
        className={`w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 ${className}`}
        {...props}
      />
      {error ? <span className="text-sm text-rose-300">{error}</span> : null}
    </label>
  );
}
