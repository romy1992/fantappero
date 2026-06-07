import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export function JoinLeaguePage() {
  const navigate = useNavigate();
  const [code, setCode] = useState("FANTA26");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/leagues/lega-serie-a");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-black text-white">Entra in una lega</h1>
      <p className="mt-2 text-slate-400">
        Usa un codice invito per collegare il tuo account a una lega esistente.
      </p>
      <Card className="mt-6">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            label="Codice invito"
            name="inviteCode"
            onChange={(event) => setCode(event.target.value.toUpperCase())}
            value={code}
          />
          <Button type="submit">Entra nella lega</Button>
        </form>
      </Card>
    </div>
  );
}
