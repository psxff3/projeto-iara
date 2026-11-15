import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Compromissos from "@/components/Compromissos";
import Tratamentos from "@/components/Tratamentos";
import Diferenciais from "@/components/Diferenciais";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="conjunto">
          <Sobre />
          <Compromissos />
        </div>
        <Tratamentos />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
}
