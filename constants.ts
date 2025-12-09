
// CONFIGURAÇÃO PRINCIPAL
export const TELEGRAM_LINK = 'https://t.me/+ZWJgZ0ojKgwwN2U5'; // Link atualizado

// GERA O LINK DINÂMICO PARA USO EM TAGS <a> (MELHOR PARA TRACKING)
export const getDynamicLink = () => {
  // Pega o caminho da URL (ex: /brasil ou /anuncio-01)
  const slug = window.location.pathname.replace(/^\/|\/$/g, '');
  
  // Se existir um slug, adiciona como parâmetro de referência
  let finalLink = TELEGRAM_LINK;
  
  if (slug) {
    const separator = finalLink.includes('?') ? '&' : '?';
    finalLink = `${finalLink}${separator}ref=${slug}`;
  }
  
  return finalLink;
};

// MANTER A FUNÇÃO ANTIGA PARA COMPATIBILIDADE (SE NECESSÁRIO)
export const handleGlobalRedirect = () => {
  const link = getDynamicLink();
  
  // Cria link invisível para simular clique (caso seja chamado via JS)
  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.style.display = 'none';
  document.body.appendChild(a);
  
  setTimeout(() => {
    a.click();
    setTimeout(() => document.body.removeChild(a), 100);
  }, 150);
};

// IMAGENS
// NOTA: Imagens atualizadas para links fornecidos (Proporção 16:9)

export const HERO_IMAGE = "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/bannerprincipal.jpg"; 

export const CATEGORIES = [
  {
    title: "🔥 Vazados do Momento",
    items: [
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner01.jpg",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner02.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner03.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner04.jpg",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner05.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner06.avif",
    ]
  },
  {
    title: "🇧🇷 OS MAIS VISTOS DO BRASIL",
    items: [
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner07.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner08.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner09.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner10.jpg",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner11.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner12.avif",
    ]
  },
  {
    title: "📹 Amadoras Caseiras",
    items: [
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner13.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner14.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner15.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner16.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner17.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner18.avif",
    ]
  },
  {
    title: "😈 AS MAIS SAFADAS",
    items: [
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner19.jpg",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner20.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner21.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner22.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner23.avif",
      "https://pub-9ad786fb39ec4b43b2905a55edcb38d9.r2.dev/banner24.avif",
    ]
  }
];
