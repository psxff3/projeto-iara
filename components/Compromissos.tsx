import { Fragment } from "react";
import { compromissos } from "@/lib/conteudo";
import TituloSecao from "./TituloSecao";

export default function Compromissos() {
  return (
    <section className="promessas" id="compromissos">
      <div className="wrap">
        <TituloSecao rotulo="Compromissos" titulo="Os 4 compromissos da Dra. Iara">
          <span className="etiqueta">Prometo a você!</span>
        </TituloSecao>
        <ul className="cards">
          {compromissos.map((c, i) => (
            <li key={c.imagem}>
              <span className="num">
                Compromisso<b>{String(i + 1).padStart(2, "0")}</b>
              </span>
              <div className="bola">
                <img
                  src={`/images/${c.imagem}.webp`}
                  alt={c.alt}
                  width={96}
                  height={96}
                  loading="lazy"
                />
                <p>
                  {c.linhas.map((l, j) => (
                    <Fragment key={j}>
                      {j > 0 && <br />}
                      {l}
                    </Fragment>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
