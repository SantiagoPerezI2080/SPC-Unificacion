import { useEffect, useState } from "react";
import { getAllUsuarios } from "../api/registroUsuarios.api";
import { UsuariosCard } from "./UsuariosCard";

export function UsuariosList() {
  const [registroUsuarios, setUsuarios] = useState([]);
  useEffect(() => {
    async function loadUsuarios() {
      const res = await getAllUsuarios();
      setUsuarios(res.data);
    }
    loadUsuarios();
  }, []);
  return (
    <div>
      {registroUsuarios.map((registroUsuarios) => (
        <UsuariosCard key={registroUsuarios.id} registroUsuarios={registroUsuarios} />
      ))}
    </div>
  );
}
