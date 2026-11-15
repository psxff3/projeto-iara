import { site, whatsappAgendar } from "@/lib/site";
import TituloSecao from "./TituloSecao";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="wrap">
        <TituloSecao rotulo="Contato" titulo="Agende a sua avaliação" />
        <div>
          <dl>
            <dt>Endereço</dt>
            <dd>
              {site.endereco[0]}
              <br />
              {site.endereco[1]}
            </dd>
            <dt>Horário de atendimento</dt>
            <dd>Com hora marcada. Agende pelo WhatsApp.</dd>
            <dt>WhatsApp</dt>
            <dd>
              <a href={site.whatsapp} target="_blank" rel="noopener">
                {site.telefone}
              </a>
            </dd>
            <dt>Instagram</dt>
            <dd>
              <a href={site.instagram} target="_blank" rel="noopener">
                {site.instagramUser}
              </a>
            </dd>
          </dl>
          <div className="cta-contato">
            <a className="ftel" href={site.telefoneHref}>
              <small>Agendamentos e dúvidas</small>
              <span>
                <img src="/images/header_tel.svg" alt="" width={14} height={20} />
                {site.telefone}
              </span>
            </a>
            <a className="fweb" href={whatsappAgendar} target="_blank" rel="noopener">
              <img src="/images/nav2_resv_ico.svg" alt="" width={30} height={30} />
              Agendamento web →
            </a>
          </div>
        </div>
        <iframe
          className="mapa"
          title="Mapa do consultório"
          loading="lazy"
          src={site.mapa}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
