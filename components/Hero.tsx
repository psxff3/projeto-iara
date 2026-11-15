import { whatsappAgendar } from "@/lib/site";
import { IconeAviso, OndaHero } from "./icons";

export default function Hero() {
  return (
    <div className="hero" id="inicio">
      <div className="slides" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <i key={n} style={{ backgroundImage: `url(/images/hero-${n}.jpg)` }} />
        ))}
      </div>
      <h1 style={{ position: "absolute", left: -9999 }}>
        Dra. Iara Souza Odontologia – Implantodontia em Paulínia
      </h1>
      <a className="aviso" href={whatsappAgendar} target="_blank" rel="noopener">
        <IconeAviso />
        Agenda de dezembro
        <br />
        já está aberta
        <em>Agendar</em>
      </a>
      <a className="noticia" href={whatsappAgendar} target="_blank" rel="noopener">
        <span className="ic">•••</span>
        <span>
          <small>15/11/2026</small>
          Garanta seu horário de fim de ano: atendimento com hora marcada pelo WhatsApp.
        </span>
      </a>
      <a className="rola" href="#sobre">
        Role ↓
      </a>
      <OndaHero />
    </div>
  );
}
