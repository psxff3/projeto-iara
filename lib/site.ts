export const site = {
  nome: "Dra. Iara Souza Odontologia",
  cro: "CRO-SP 115451",
  telefone: "(19) 99341-9699",
  telefoneHref: "tel:+5519993419699",
  whatsapp: "https://wa.me/5519993419699",
  instagram: "https://www.instagram.com/iaradentista_paulinia/",
  instagramUser: "@iaradentista_paulinia",
  endereco: ["Rua General Osório, 395, Jardim Calegaris", "Paulínia – SP"],
  mapa: "https://www.google.com/maps?q=Rua+General+Os%C3%B3rio+395+Jardim+Calegaris+Paul%C3%ADnia+SP&output=embed",
} as const;

export const whatsappAgendar = `${site.whatsapp}?text=${encodeURIComponent(
  "Olá, gostaria de agendar uma avaliação."
)}`;

export const menu = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];
