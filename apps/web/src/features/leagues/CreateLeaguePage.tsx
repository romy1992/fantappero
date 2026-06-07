import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export function CreateLeaguePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("Nuova Lega FantAppero");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/leagues/lega-serie-a");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-black text-white">Crea lega</h1>
      <p className="mt-2 text-slate-400">
        Form mock per preparare il flusso di creazione lega dell’MVP.
      </p>
      <Card className="mt-6">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input label="Nome lega" name="name" onChange={(event) => setName(event.target.value)} value={name} />
          <Input label="Descrizione" name="description" placeholder="Es. Lega privata con draft semplificato" />
          <Input label="Numero squadre" min={2} name="teams" type="number" defaultValue={8} />
          <Button type="submit">Crea lega mock</Button>
        </form>
      </Card>
    </div>
  );
}
