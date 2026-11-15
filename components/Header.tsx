"use client";

import { useEffect, useState } from "react";
import { menu, site, whatsappAgendar } from "@/lib/site";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [solido, setSolido] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={solido ? "solido" : undefined}>
      <div className="wrap">
        <a className="marca" href="#inicio">
          <img src="/images/icone.png" alt="" />
          <span>
            <b>Dra. Iara Souza</b>
            <small>Odontologia</small>
          </span>
        </a>
        <button
          id="menu"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          ☰
        </button>
        <nav
          id="nav"
          className={aberto ? "aberto" : undefined}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setAberto(false);
          }}
        >
          <ul>
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="cta-topo">
            <a className="tel" href={site.telefoneHref}>
              <small>Agendamentos e dúvidas</small>
              <span>
                <img src="/images/header_tel.svg" alt="" width={14} height={20} />
                {site.telefone}
              </span>
            </a>
            <a className="web" href={whatsappAgendar} target="_blank" rel="noopener">
              <img src="/images/nav2_resv_ico.svg" alt="" width={30} height={30} />
              Agendamento web →
            </a>
          </div>
          <div className="agenda">
            <a className="ag-tel" href={site.telefoneHref}>
              <small>Agendamentos e dúvidas</small>
              <span>
                <img src="/images/header_tel.svg" alt="" width={14} height={20} />
                {site.telefone}
              </span>
            </a>
            <a className="ag-web" href={whatsappAgendar} target="_blank" rel="noopener">
              <img src="/images/nav2_resv_ico.svg" alt="" width={32} height={32} />
              Agendamento web
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
