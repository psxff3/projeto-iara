import { tratamentos } from "@/lib/conteudo";
import TituloSecao from "./TituloSecao";

export default function Tratamentos() {
  return (
    <section id="tratamentos">
      <div className="wrap">
        <TituloSecao rotulo="Tratamentos" titulo="Cuidado completo para o seu sorriso" />
        <ul className="lista">
          {tratamentos.map((t) => (
            <li key={t.titulo}>
              <span className="selo">
                <img src={`/images/${t.imagem}.webp`} alt={t.alt} width={64} height={64} loading="lazy" />
              </span>
              <h3>{t.titulo}</h3>
              <p>{t.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
