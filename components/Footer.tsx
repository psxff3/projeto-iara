import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {site.nome} · {site.cro}
      </p>
    </footer>
  );
}
