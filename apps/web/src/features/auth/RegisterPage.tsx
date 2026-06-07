import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export function RegisterPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem("fantappero_token", "mock-token");
    navigate("/");
  }

  return (
    <Card>
      <h2 className="text-3xl font-black text-white">Crea account</h2>
      <p className="mt-2 text-sm text-slate-400">
        Registrazione mock per iniziare a creare leghe e squadre.
      </p>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <Input label="Nome manager" name="name" placeholder="Es. Demo Manager" />
        <Input label="Email" name="email" placeholder="demo@fantappero.local" type="email" />
        <Input label="Password" name="password" type="password" />
        <Button className="w-full" type="submit">Registrati</Button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Hai già un account?{" "}
        <Link className="font-semibold text-emerald-300" to="/login">
          Accedi
        </Link>
      </p>
    </Card>
  );
}
