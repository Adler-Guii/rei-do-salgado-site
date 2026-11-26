const catalog = {
  features: [
    {
      title: "Mini Salgados",
      text: "Coxinha, bolinha de queijo, kibe e enroladinho de presunto e queijo.",
      image: "assets/linha-mini-salgados-v2.jpg",
      alt: "Coxinhas em primeiro plano com a embalagem oficial da linha Mini Salgados",
      tag: "Clássicos do Rei",
      href: "produtos.html#salgados",
    },
    {
      title: "Mini Pastéis",
      text: "Mini pastéis de carne, queijo, frango e pizza em embalagens próprias para a linha.",
      image: "assets/linha-mini-pasteis-v2.jpg",
      alt: "Mini pastéis em primeiro plano com a embalagem oficial de carne",
      tag: "4 opções no catálogo",
      href: "produtos.html#pasteis",
    },
    {
      title: "Mini Churros Gourmet",
      text: "Sete sabores, incluindo doce de leite, chocolate ao leite e creme de avelã.",
      image: "assets/linha-mini-churros-v2.jpg",
      alt: "Mini churros em primeiro plano com a embalagem oficial de doce de leite",
      tag: "7 sabores",
      href: "produtos.html#churros",
    },
    {
      title: "Mini Empadas",
      text: "Empadas de frango e palmito para ampliar as opções do seu cardápio.",
      image: "assets/linha-mini-empadas-v2.jpg",
      alt: "Mini empadas em primeiro plano com as embalagens oficiais de frango e palmito",
      tag: "Frango e palmito",
      href: "produtos.html#empadas",
    },
    {
      title: "Mini Assados",
      text: "Esfihas de carne, frango, calabresa e pizza em embalagens para diferentes negócios.",
      image: "assets/linha-mini-assados-v2.jpg",
      alt: "Mini esfihas em primeiro plano com as embalagens oficiais de carne e frango",
      tag: "4 sabores atualizados",
      href: "produtos.html#assados",
    },
  ],
  pasteis: {
    tabs: ["Todos", "Carne", "Queijo", "Frango", "Pizza"],
    products: [
      { title: "Pastel de Carne", kind: "Carne", image: "assets/produto-pastel-carne-v2.jpg", description: "Massa crocante, recheio de carne em destaque e embalagem oficial da linha." },
      { title: "Pastel de Queijo", kind: "Queijo", image: "assets/produto-pastel-queijo-v2.jpg", description: "Textura dourada, queijo em primeiro plano e embalagem oficial do sabor." },
      { title: "Pastel de Frango", kind: "Frango", image: "assets/produto-pastel-frango-v2.jpg", description: "Recheio de frango visível, acabamento crocante e caixa oficial correspondente." },
      { title: "Pastel de Pizza", kind: "Pizza", image: "assets/produto-pastel-pizza-v2.jpg", description: "Recheio do sabor pizza em evidência com a embalagem oficial da linha." },
    ],
  },
  salgados: {
    tabs: ["Todos", "Coxinha", "Bolinha", "Kibe", "Enroladinho"],
    products: [
      {
        title: "Coxinha",
        kind: "Coxinha",
        image: "assets/card-coxinha-v4.jpg",
        gallery: ["assets/galeria-coxinha-inteira-v4.jpg", "assets/galeria-coxinha-cortada-v4.jpg", "assets/galeria-coxinha-caixa-v4.jpg"],
        description: "Veja a coxinha inteira, o recheio de frango e a embalagem oficial da linha.",
      },
      {
        title: "Bolinha de Queijo",
        kind: "Bolinha",
        image: "assets/card-bolinha-v3.jpg",
        gallery: ["assets/galeria-bolinha-inteira-v4.jpg", "assets/galeria-bolinha-cortada-v4.jpg", "assets/galeria-bolinha-caixa-v4.jpg"],
        description: "Veja o produto inteiro, o queijo em destaque e a embalagem oficial azul.",
      },
      {
        title: "Kibe com Queijo",
        kind: "Kibe",
        image: "assets/card-kibe-v3.jpg",
        gallery: ["assets/galeria-kibe-inteiro-v4.jpg", "assets/galeria-kibe-cortado-v4.jpg", "assets/galeria-kibe-caixa-v4.jpg"],
        description: "Veja o kibe inteiro, o recheio de queijo e a embalagem oficial verde.",
      },
      {
        title: "Enroladinho",
        kind: "Enroladinho",
        image: "assets/card-enroladinho-v3.jpg",
        gallery: ["assets/galeria-enroladinho-inteiro-v4.jpg", "assets/galeria-enroladinho-cortado-v4.jpg", "assets/galeria-enroladinho-caixa-v4.jpg"],
        description: "Veja o enroladinho inteiro, o corte de presunto e queijo e a embalagem oficial rosa.",
      },
    ],
  },
  fritos: {
    tabs: ["Todos", "Coxinha", "Bolinha", "Kibe", "Risoles"],
    description: "Já frito e congelado. Aqueça conforme as instruções da embalagem.",
    tag: "400 g",
    products: [
      { title: "Bolinha de Queijo", kind: "Bolinha", image: "assets/fritos-400g-bolinha-queijo.jpg" },
      { title: "Coxinha de Frango", kind: "Coxinha", image: "assets/fritos-400g-coxinha-frango.jpg" },
      { title: "Kibe com Queijo", kind: "Kibe", image: "assets/fritos-400g-kibe-queijo.jpg" },
      { title: "Risoles de Carne", kind: "Risoles", image: "assets/fritos-400g-risoles-carne.jpg" },
      { title: "Risoles de Pizza", kind: "Risoles", image: "assets/fritos-400g-risoles-pizza.jpg" },
      { title: "Risoles de Calabresa", kind: "Risoles", image: "assets/fritos-400g-risoles-calabresa.jpg" },
    ],
  },
  churros: {
    tabs: ["Todos", "Chocolate", "Nutella", "Doce de leite", "Chocolate branco", "Sensação", "Limoleite", "Pistache"],
    products: [
      {
        title: "Churros de Chocolate",
        kind: "Chocolate",
        image: "assets/churros-foto-chocolate.webp",
        description: "Massa de chocolate com recheio de chocolate ao leite.",
        tag: "Chocolate ao leite",
      },
      {
        title: "Churros de Nutella",
        kind: "Nutella",
        image: "assets/churros-foto-nutella.webp",
        description: "Massa de chocolate com recheio de Nutella, creme de avelã.",
        tag: "Creme de avelã",
      },
      {
        title: "Churros de Doce de Leite",
        kind: "Doce de leite",
        image: "assets/churros-foto-doce-de-leite.webp",
        description: "Recheio cremoso de doce de leite.",
      },
      {
        title: "Churros de Chocolate Branco",
        kind: "Chocolate branco",
        image: "assets/churros-foto-chocolate-branco.webp",
        description: "Massa leve com recheio de chocolate branco.",
      },
      {
        title: "Churros Sensação",
        kind: "Sensação",
        image: "assets/churros-foto-sensacao.webp",
        description: "Massa de chocolate com recheio de morango.",
      },
      {
        title: "Churros Limoleite",
        kind: "Limoleite",
        image: "assets/churros-foto-limoleite.webp",
        description: "Massa de limão com recheio de doce de leite.",
      },
      {
        title: "Churros de Pistache",
        kind: "Pistache",
        image: "assets/churros-foto-pistache.webp",
        description: "Mini churros com recheio cremoso de pistache.",
        tag: "Pistache",
      },
    ],
  },
  empadas: {
    tabs: ["Todos", "Frango", "Palmito"],
    products: [
      {
        title: "Empada de Frango",
        kind: "Frango",
        image: "assets/produto-empada-frango-v2.jpg",
        description: "Mini empada dourada com recheio de frango e a embalagem oficial em destaque.",
      },
      {
        title: "Empada de Palmito",
        kind: "Palmito",
        image: "assets/produto-empada-palmito-v2.jpg",
        description: "Mini empada dourada com recheio cremoso de palmito e a embalagem oficial em destaque.",
      },
    ],
  },
  assados: {
    tabs: ["Todos", "Carne", "Frango", "Calabresa", "Pizza"],
    products: [
      { title: "Esfiha de Carne", kind: "Carne", image: "assets/produto-esfiha-carne-v2.jpg", description: "Caixa de 310 g com 10 unidades; também disponível em embalagens de 500 g e 2 kg." },
      { title: "Esfiha de Frango", kind: "Frango", image: "assets/produto-esfiha-frango-v2.jpg", description: "Caixa de 310 g com 10 unidades; também disponível em embalagens de 500 g e 2 kg." },
      { title: "Esfiha de Calabresa", kind: "Calabresa", image: "assets/produto-esfiha-calabresa-v2.jpg", description: "Sabor atualizado, disponível em embalagens de 500 g e 2 kg." },
      { title: "Esfiha de Pizza", kind: "Pizza", image: "assets/produto-esfiha-pizza-v2.jpg", description: "Sabor atualizado, disponível em embalagens de 500 g e 2 kg." },
    ],
  },
};

const fallbackDescription = "Embalagem e produto apresentados no catálogo oficial fornecido para o projeto.";

function featureCard(item) {
  return `
    <article class="feature-card">
      <a href="${item.href}" aria-label="Ver ${item.title}">
        <figure class="feature-image"><img src="${item.image}" alt="${item.alt}"></figure>
        <div class="card-panel">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <span class="card-tag">${item.tag}</span>
        </div>
      </a>
    </article>
  `;
}

function productCard(item, group) {
  const imageClass = ["product-image", item.package ? "is-package" : "", item.gallery ? "has-gallery" : ""]
    .filter(Boolean)
    .join(" ");
  const galleryData = item.gallery ? ` data-gallery="${item.gallery.join("|")}" data-gallery-labels="Inteiro|Cortado|Embalagem"` : "";
  const zoomLabel = item.gallery ? `Ver galeria com 3 fotos de ${item.title}` : `Ampliar imagem de ${item.title}`;
  return `
    <article class="product-card" data-kind="${item.kind}">
      <button class="${imageClass}" type="button" data-product-zoom data-image="${item.image}" data-title="${item.title}"${galleryData} aria-label="${zoomLabel}">
        <img src="${item.image}" alt="${item.imageAlt ?? `${item.title} Rei do Salgado`}" loading="lazy">
      </button>
      <div class="card-panel">
        <h3>${item.title}</h3>
        <p>${item.description ?? group.description ?? fallbackDescription}</p>
        <span class="card-tag">${item.tag ?? group.tag ?? "Linha Rei do Salgado"}</span>
      </div>
    </article>
  `;
}

const featureGrid = document.querySelector("[data-feature-grid]");
if (featureGrid) featureGrid.innerHTML = catalog.features.map(featureCard).join("");

for (const key of ["salgados", "fritos", "pasteis", "churros", "empadas", "assados"]) {
  const group = catalog[key];
  const tabs = document.querySelector(`[data-tabs="${key}"]`);
  const grid = document.querySelector(`[data-grid="${key}"]`);

  if (!tabs || !grid) continue;

  tabs.innerHTML = group.tabs
    .map(
      (tab, index) => `
        <button
          class="filter-tab"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          data-filter="${tab}"
        >${tab}</button>
      `,
    )
    .join("");

  grid.innerHTML = group.products.map((item) => productCard(item, group)).join("");

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    tabs.querySelectorAll("[data-filter]").forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab === button));
    });

    const filter = button.dataset.filter;
    grid.querySelectorAll("[data-kind]").forEach((card) => {
      card.hidden = filter !== "Todos" && card.dataset.kind !== filter;
    });
  });

  tabs.addEventListener("keydown", (event) => {
    const buttons = [...tabs.querySelectorAll("[data-filter]")];
    const current = buttons.indexOf(document.activeElement);
    if (current < 0 || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    buttons[(current + direction + buttons.length) % buttons.length].focus();
  });
}

const heroCarousel = document.querySelector("[data-hero-carousel]");

if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll("[data-hero-slide]")];
  const dots = [...heroCarousel.querySelectorAll("[data-hero-dot]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeSlide = 1;
  let timer = null;

  const stopRotation = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeSlide;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.querySelectorAll("a, button").forEach((control) => {
        control.tabIndex = active ? 0 : -1;
      });
    });

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeSlide;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
  };

  const startRotation = () => {
    stopRotation();
    if (reducedMotion.matches || document.hidden || slides.length < 2) return;
    timer = window.setInterval(() => showSlide(activeSlide + 1), 7000);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startRotation();
    });
  });

  heroCarousel.addEventListener("mouseenter", stopRotation);
  heroCarousel.addEventListener("mouseleave", startRotation);
  heroCarousel.addEventListener("focusin", stopRotation);
  heroCarousel.addEventListener("focusout", startRotation);
  heroCarousel.addEventListener("keydown", (event) => {
    if (!event.target.closest(".hero-controls")) return;
    if (event.key === "ArrowLeft") showSlide(activeSlide - 1);
    if (event.key === "ArrowRight") showSlide(activeSlide + 1);
  });
  document.addEventListener("visibilitychange", startRotation);
  reducedMotion.addEventListener("change", startRotation);

  showSlide(1);
  startRotation();
}

const imageDialog = document.querySelector("[data-image-dialog]");

if (imageDialog) {
  const dialogImage = imageDialog.querySelector("[data-dialog-image]");
  const dialogTitle = imageDialog.querySelector("[data-dialog-title]");
  const dialogCaption = imageDialog.querySelector("[data-dialog-caption]");
  const dialogCounter = imageDialog.querySelector("[data-dialog-counter]");
  const dialogPrevious = imageDialog.querySelector("[data-dialog-previous]");
  const dialogNext = imageDialog.querySelector("[data-dialog-next]");
  const dialogThumbnails = imageDialog.querySelector("[data-dialog-thumbnails]");
  const dialogOriginal = imageDialog.querySelector("[data-dialog-original]");
  let activeGallery = [];
  let activeGalleryLabels = [];
  let activeGalleryIndex = 0;

  const showGalleryImage = (index) => {
    if (!activeGallery.length) return;
    activeGalleryIndex = (index + activeGallery.length) % activeGallery.length;
    const label = activeGalleryLabels[activeGalleryIndex] || "Imagem ampliada";
    dialogImage.src = activeGallery[activeGalleryIndex];
    if (dialogOriginal && !dialogOriginal.hidden) dialogOriginal.href = activeGallery[activeGalleryIndex];
    dialogImage.alt = `${dialogTitle.textContent} — ${label}`;
    dialogCaption.textContent = label;
    dialogCounter.textContent = `${activeGalleryIndex + 1} de ${activeGallery.length}`;
    dialogPrevious.hidden = activeGallery.length < 2;
    dialogNext.hidden = activeGallery.length < 2;
    dialogThumbnails.hidden = activeGallery.length < 2;
    dialogThumbnails.querySelectorAll("button").forEach((button, buttonIndex) => {
      const selected = buttonIndex === activeGalleryIndex;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-current", String(selected));
    });
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-product-zoom]");
    if (!trigger) return;
    activeGallery = (trigger.dataset.gallery || trigger.dataset.image).split("|").filter(Boolean);
    activeGalleryLabels = (trigger.dataset.galleryLabels || "Imagem ampliada").split("|");
    activeGalleryIndex = 0;
    dialogTitle.textContent = trigger.dataset.title;
    if (dialogOriginal) dialogOriginal.hidden = !trigger.hasAttribute("data-packaging");
    dialogThumbnails.innerHTML = activeGallery
      .map(
        (image, index) => `
          <button type="button" data-dialog-thumbnail="${index}" aria-label="Mostrar ${activeGalleryLabels[index] || `imagem ${index + 1}`}" aria-current="false">
            <img src="${image}" alt="" loading="lazy">
          </button>
        `,
      )
      .join("");
    showGalleryImage(0);
    imageDialog.showModal();
  });

  dialogPrevious.addEventListener("click", () => showGalleryImage(activeGalleryIndex - 1));
  dialogNext.addEventListener("click", () => showGalleryImage(activeGalleryIndex + 1));
  dialogThumbnails.addEventListener("click", (event) => {
    const thumbnail = event.target.closest("[data-dialog-thumbnail]");
    if (!thumbnail) return;
    showGalleryImage(Number(thumbnail.dataset.dialogThumbnail));
  });

  imageDialog.querySelector("[data-dialog-close]").addEventListener("click", () => imageDialog.close());
  imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog) imageDialog.close();
  });
  imageDialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showGalleryImage(activeGalleryIndex - 1);
    if (event.key === "ArrowRight") showGalleryImage(activeGalleryIndex + 1);
  });
}

const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menu.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

menu.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1199) {
    menuToggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
