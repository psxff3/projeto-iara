import { DenteCoracao } from "./icons";

type Props = {
  rotulo: string;
  titulo: string;
  icone?: React.ReactNode;
  children?: React.ReactNode;
};

/** Cabeçalho padrão das seções: dentinho, rótulo entre linhas, título e bolhas. */
export default function TituloSecao({ rotulo, titulo, icone, children }: Props) {
  return (
    <div className="sobre-topo">
      {icone ?? <DenteCoracao />}
      <p className="rotulo">{rotulo}</p>
      {children}
      <h2>{titulo}</h2>
      <img className="bolhas" src="/images/circulos.webp" alt="" loading="lazy" />
    </div>
  );
}
