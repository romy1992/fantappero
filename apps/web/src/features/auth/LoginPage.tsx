import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@fantappero.local");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem("fantappero_token", "mock-token");
    navigate("/");
  }

  return (
    <Card>
      <h2 className="text-3xl font-black text-white">Accedi</h2>
      <p className="mt-2 text-sm text-slate-400">
        Login mock per navigare il primo MVP web.
      </p>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <Input label="Email" name="email" onChange={(event) => setEmail(event.target.value)} type="email" value={email} />
        <Input label="Password" name="password" type="password" defaultValue="fantappero" />
        <Button className="w-full" type="submit">Entra</Button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Non hai un account?{" "}
        <Link className="font-semibold text-emerald-300" to="/register">
          Registrati
        </Link>
      </p>
    </Card>
  );
}
