import { diferenciais } from "@/lib/conteudo";
import TituloSecao from "./TituloSecao";

export default function Diferenciais() {
  return (
    <section className="diferenciais" id="diferenciais">
      <div className="wrap">
        <TituloSecao rotulo="Diferenciais" titulo="O que torna o atendimento especial" />
        <div className="dif">
          {diferenciais.map((d) => (
            <div key={d.titulo}>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
