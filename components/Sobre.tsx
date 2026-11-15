import { site } from "@/lib/site";
import { DenteSobre } from "./icons";
import TituloSecao from "./TituloSecao";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <img className="deco deco-banco" src="/images/deco-banco.webp" alt="" loading="lazy" />
      <img className="deco deco-coreto" src="/images/deco-coreto.webp" alt="" loading="lazy" />
      <div className="wrap">
        <TituloSecao
          icone={<DenteSobre />}
          rotulo="Sobre a doutora"
          titulo="Cada sorriso conta uma história"
        />
        <div className="sobre-corpo">
          <div className="sobre-texto">
            <h3 className="sub">Cuidado individual, da prevenção ao implante</h3>
            <p>
              Olá! Sou a Dra. Iara Souza, cirurgiã-dentista, e atendo em Paulínia, em um consultório
              pensado para que você se sinta à vontade desde a chegada. Minha atuação reúne
              Implantodontia, Clínica Geral para adultos e crianças e Estética do sorriso.
            </p>
            <p>
              Cada paciente tem uma história e uma necessidade diferente. Por isso, o atendimento é
              individual: escuto com atenção, explico cada etapa do diagnóstico e apresento as opções
              de tratamento antes de qualquer decisão.
            </p>
            <p>
              Meu compromisso é unir precisão técnica, sensibilidade estética e cuidado humano, para
              devolver saúde, função e confiança ao seu sorriso.
            </p>
          </div>
          <div className="sobre-foto">
            <img
              src="/images/dra-iara.webp"
              alt="Dra. Iara Souza, cirurgiã-dentista"
              width={320}
              height={320}
            />
            <p className="funcao">Cirurgiã-Dentista · {site.cro}</p>
            <p className="nome">Dra. Iara Souza</p>
            <a className="vazado-link" href="#tratamentos">
              → Conheça os tratamentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
