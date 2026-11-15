import { site } from "@/lib/site";

export default function BotaoWhatsApp() {
  return (
    <a className="zap" href={site.whatsapp} target="_blank" rel="noopener">
      WhatsApp
    </a>
  );
}
