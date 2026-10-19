/* ============================================================
   TuMarca — main.js
   ============================================================ */

/* ============================================================
   1) CONFIGURACIÓN — CAMBIÁ ESTOS DATOS POR LOS TUYOS
   (aparecen en la página automáticamente en todos lados)
   ============================================================ */
const CONFIG = {
  brand:     "Lumenix",
  owner:     "Lucas",
  email:     "luchocatorcino60@gmail.com",
  whatsapp:  "5493884418917",          // formato país + número, sin + ni espacios
  whatsappDisplay: "+54 9 388 441-8917",
  github:    "https://github.com/juycode"
};

/* Frases del efecto de máquina de escribir del hero */
const TYPING_PHRASES = [
  "sistemas de turnos",
  "cartas digitales",
  "paneles de gestión",
  "páginas que venden"
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   1.1) TUS PROYECTOS
   ------------------------------------------------------------
   ►► ESTO ES LO ÚNICO QUE TENÉS QUE TOCAR PARA AGREGAR TRABAJOS ◄◄

   Copiá un bloque { ... }, pegalo y cambiá los datos:

     title     Nombre del proyecto (lo que se ve grande)
     summary   Una línea corta para la tarjeta
     desc      Descripción larga (la que aparece al abrir el detalle)
     category  "turnos" | "carta" | "gestion" | "reservas"
               | "landing" | "ecommerce" | "corporativo"
               (los botones de filtro se crean solos con estas)
     cat       (opcional) texto de la etiqueta sobre la foto.
               Si no lo ponés, se usa el nombre de la categoría.
     tags      Etiquetas, máximo 3 se ven en la tarjeta
     url       Link al sitio real
     image     (opcional) captura propia: "img/proyectos/mi-proyecto.jpg"
               Si no ponés image, se muestra una maqueta de ejemplo.

   Para la captura: guardá la foto dentro de la carpeta img/proyectos/
   y escribí acá el nombre exacto del archivo.
   ============================================================ */
const PROJECTS = [
  {
    title: "Tauro Barbería",
    summary: "Sistema de turnos online en 4 pasos, con panel de administración.",
    desc: "Reserva de turnos para barbería, pensada para usarse desde el celular. El cliente elige barbero, servicio, día y horario, y confirma el pago en efectivo o por Mercado Pago en pocos toques. Incluye horarios de atención, ubicación y panel de administración para que el negocio maneje sus propios turnos.",
    category: "turnos",
    cat: "Turnos online",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://taurobarberia.netlify.app/",
    image: "img/proyectos/tauro-barberia.jpg"
  },
  {
    title: "La Casa del Sabor",
    summary: "Carta digital con categorías, precios y platos destacados.",
    desc: "Menú digital para restaurante: la carta completa organizada por categorías (hamburguesas, milanesas, pizzas, empanadas, merienda y bebidas), con precios, descripciones y platos destacados. Se abre al instante con el QR de la mesa y los filtros ayudan a encontrar rápido lo que el cliente busca. Cambiar un precio es editar una línea, sin reimprimir nada.",
    category: "carta",
    cat: "Carta virtual",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://juycode.github.io/modelo-comida/",
    image: "img/proyectos/carta-comida.jpg"
  },
  {
    title: "Gestión de Stock",
    summary: "Panel para emprendedores: stock, ventas, gastos y clientes.",
    desc: "Aplicación web para ordenar un emprendimiento: carga de productos y entrada de mercadería, registro de ventas y gastos, alertas de stock bajo, cálculo automático de ganancia y valor del stock, mini CRM de clientes y respaldo en Excel. Guarda todo en el navegador, así que funciona sin servidor ni mensualidad.",
    category: "gestion",
    cat: "Gestión y ventas",
    tags: ["HTML", "CSS", "JavaScript", "Excel"],
    url: "https://juycode.github.io/gestion-stock/",
    image: "img/proyectos/gestion-stock.jpg"
  },
  {
    title: "Tu Estética",
    summary: "Turnos online con galería de antes y después y elección de especialista.",
    desc: "Web de reservas para centro de estética: galería de trabajos con antes y después, elección de especialista y servicio, selección de fecha y horario, y confirmación con pago en efectivo o por Mercado Pago. Suma horarios de atención, ubicación y panel de administración para gestionar los turnos del día.",
    category: "turnos",
    cat: "Turnos online",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://juycode.github.io/modelo-estetica/",
    image: "img/proyectos/estetica-turnos.jpg"
  },
  {
    title: "Patita Peluche",
    summary: "Tienda online de peluches y accesorios kawaii, con carrito y pedidos guardados.",
    desc: "Tienda virtual de peluches, llaveros y accesorios kawaii: catálogo por categorías (cartucheras, llaveros y peluches), carrito de compras, variantes de cada producto, control de stock con los agotados marcados solos y cierre de pedido con los datos de entrega. Los pedidos se registran en Firebase, así que las ventas quedan guardadas en una base de datos y no se pierden entre los mensajes. La entrega se coordina por WhatsApp o en puntos de encuentro, con envíos a todo el país.",
    category: "ecommerce",
    cat: "Tienda online",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    url: "https://juycode.github.io/patitapeluchenuevo/",
    image: "img/proyectos/patita-peluche.jpg"
  }
];

/* Nombres de las categorías.
   ► Si inventás una categoría nueva (por ejemplo "turnos"), agregala acá
     y el botón del filtro aparece solo. "plural" es el texto del botón,
     "label" es la etiqueta que se ve arriba de la foto del proyecto. */
const CATEGORIES = {
  turnos:      { label: "Turnos online",    plural: "Turnos online" },
  reservas:    { label: "Reservas",         plural: "Reservas" },
  carta:       { label: "Carta virtual",    plural: "Cartas virtuales" },
  gestion:     { label: "Gestión y ventas", plural: "Gestión y ventas" },
  landing:     { label: "Landing page",     plural: "Landing pages" },
  ecommerce:   { label: "Tienda online",    plural: "Tiendas online" },
  corporativo: { label: "Corporativo",      plural: "Corporativos" }
};

/* Maquetas de ejemplo (se usan cuando un proyecto no tiene "image") */
const SHOT_MOCKUPS = [
  '<span class="mini-line w40 big"></span><span class="mini-line w75"></span><span class="mini-line w55"></span><span class="mini-btn"></span><div class="mini-cards"><i></i><i></i><i></i></div>',
  '<span class="mini-line w55 big"></span><span class="mini-line w80"></span><div class="mini-cards"><i></i><i></i><i></i><i></i></div><span class="mini-btn"></span>',
  '<span class="mini-line w65 big"></span><span class="mini-line w90"></span><span class="mini-line w70"></span><div class="mini-cards"><i></i><i></i><i></i></div>',
  '<span class="mini-line w50 big"></span><span class="mini-line w85"></span><span class="mini-line w60"></span><span class="mini-btn"></span><div class="mini-cards"><i></i><i></i><i></i></div>',
  '<span class="mini-line w70 big"></span><div class="mini-cards"><i></i><i></i><i></i><i></i></div><span class="mini-line w55"></span><span class="mini-btn"></span>',
  '<span class="mini-line w45 big"></span><span class="mini-line w80"></span><span class="mini-line w65"></span><span class="mini-btn"></span><div class="mini-cards"><i></i><i></i><i></i></div>'
];

/* ============================================================
   2) UTILIDADES
   ============================================================ */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* Escapa texto para que se pueda inyectar con seguridad en el HTML */
const esc = (s) =>
  String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 4500);
}

/* ============================================================
   3) DATOS DE CONTACTO → se inyectan en [data-config]
   ============================================================ */
function bindConfig() {
  const waLink = `https://wa.me/${CONFIG.whatsapp}`;

  const values = {
    brand: CONFIG.brand,
    owner: CONFIG.owner,
    email: CONFIG.email,
    "email-link": CONFIG.email,
    whatsapp: CONFIG.whatsappDisplay,
    "whatsapp-link": waLink,
    github: CONFIG.github
  };

  $$("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    const val = values[key];
    if (!val) return;

    if (key.endsWith("-link") || ["github", "linkedin", "instagram"].includes(key)) {
      el.setAttribute("href", val);
    } else {
      el.textContent = val;
    }
  });

}

/* ============================================================
   4) NAVBAR: fondo al scrollear + botón "volver arriba"
   ============================================================ */
function initScrollUI() {
  const navbar = $("#navbar");
  const toTop = $("#toTop");

  const onScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 600);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })
  );
}

/* ============================================================
   5) MENÚ MÓVIL
   ============================================================ */
function initMobileMenu() {
  const burger = $("#burger");
  const menu = $("#navMenu");

  const close = () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menú");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.style.overflow = open ? "hidden" : "";
  });

  $$(".nav-menu a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ============================================================
   6) LINK ACTIVO SEGÚN SECCIÓN VISIBLE
   ============================================================ */
function initActiveLink() {
  const links = $$(".nav-link");
  const map = new Map();
  links.forEach((l) => {
    const id = l.getAttribute("href").slice(1);
    const sec = document.getElementById(id);
    if (sec) map.set(sec, l);
  });

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("active"));
        map.get(entry.target)?.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  map.forEach((_, sec) => obs.observe(sec));
}

/* ============================================================
   7) APARICIÓN AL SCROLLEAR
   ============================================================ */
function initReveal() {
  const els = $$(".reveal");
  if (prefersReducedMotion) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => obs.observe(el));
}

/* ============================================================
   8) CONTADORES DEL HERO
   ============================================================ */
function initCounters() {}

/* ============================================================
   9) EFECTO MÁQUINA DE ESCRIBIR
   ============================================================ */
function initTyping() {
  const el = $("#typed");
  if (!el) return;
  if (prefersReducedMotion) {
    el.textContent = TYPING_PHRASES[0];
    return;
  }

  let phrase = 0;
  let char = 0;
  let deleting = false;

  const step = () => {
    const current = TYPING_PHRASES[phrase];
    char += deleting ? -1 : 1;
    el.textContent = current.slice(0, char);

    let delay = deleting ? 45 : 95;
    if (!deleting && char === current.length) {
      delay = 2200;
      deleting = true;
    } else if (deleting && char === 0) {
      deleting = false;
      phrase = (phrase + 1) % TYPING_PHRASES.length;
      delay = 400;
    }
    setTimeout(step, delay);
  };

  setTimeout(step, 900);
}

/* ============================================================
   9.1) DIBUJAR LAS TARJETAS DE PROYECTOS
   ------------------------------------------------------------
   Toma la lista PROJECTS y arma las tarjetas. No hace falta
   tocar nada de acá: editá PROJECTS, arriba de todo.
   ============================================================ */
function projectCard(p, i) {
  const info = CATEGORIES[p.category];
  const cat = p.cat || (info && info.label) || "Proyecto";
  const tags = Array.isArray(p.tags) ? p.tags : [];
  const desc = p.desc || p.summary || "";

  const shot = p.image
    ? `<img class="shot" src="${esc(p.image)}" alt="Captura de ${esc(p.title)}" loading="lazy" decoding="async">`
    : `<div class="shot">
                <div class="shot-bar"><i></i><i></i><i></i></div>
                <div class="shot-body">${SHOT_MOCKUPS[i % SHOT_MOCKUPS.length]}</div>
              </div>`;

  return `<article class="card project reveal" tabindex="0" data-category="${esc(p.category)}" data-title="${esc(p.title)}" data-desc="${esc(desc)}" data-tags="${esc(tags.join(", "))}" data-url="${esc(p.url)}">
            <div class="project-visual pv-${(i % 6) + 1}">
              ${shot}
              <span class="project-cat">${esc(cat)}</span>
            </div>
            <div class="project-body">
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.summary || "")}</p>
              <div class="tags">${tags.slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
              <span class="project-link">Ver detalle <svg class="ico"><use href="#i-arrow"/></svg></span>
            </div>
          </article>`;
}

/* ============================================================
   9.1) BOTONES DE FILTRO
   ------------------------------------------------------------
   Se arman solos con las categorías que uses en PROJECTS.
   Ejemplo: si todos tus proyectos son "turnos" y "carta",
   solo aparecen esos dos botones (+ "Todos").
   ============================================================ */
function renderFilters() {
  const box = $("#projectFilters");
  if (!box) return;

  const usadas = [];
  PROJECTS.forEach((p) => {
    if (p.category && !usadas.includes(p.category)) usadas.push(p.category);
  });

  const botones = [
    '<button class="filter active" data-filter="all" aria-pressed="true">Todos</button>'
  ];

  usadas.forEach((cat) => {
    const info = CATEGORIES[cat];
    const nombre = (info && (info.plural || info.label)) || cat;
    botones.push(
      `<button class="filter" data-filter="${esc(cat)}" aria-pressed="false">${esc(nombre)}</button>`
    );
  });

  box.innerHTML = botones.join("");
}

function renderProjects() {
  const grid = $("#projectGrid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(projectCard).join("");
}

/* ============================================================
   10) FILTRO DE PROYECTOS
   ============================================================ */
function initFilters() {
  const buttons = $$(".filter");
  const cards = $$(".project");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

/* ============================================================
   11) MODAL DE PROYECTO
   ============================================================ */
function initModal() {
  const modal = $("#projectModal");
  const visual = $("#modalVisual");
  const title = $("#modalTitle");
  const desc = $("#modalDesc");
  const cat = $("#modalCat");
  const tags = $("#modalTags");
  const visit = $("#modalVisit");
  let lastFocused = null;

  const open = (card) => {
    lastFocused = document.activeElement;
    title.textContent = card.dataset.title || "Proyecto";
    desc.textContent = card.dataset.desc || "";
    cat.textContent = $(".project-cat", card)?.textContent || "Proyecto";
    visit.setAttribute("href", card.dataset.url || "#");

    tags.innerHTML = "";
    (card.dataset.tags || "").split(",").forEach((t) => {
      const s = document.createElement("span");
      s.textContent = t.trim();
      tags.appendChild(s);
    });

    visual.innerHTML = "";
    const shot = $(".shot", card);
    if (shot) visual.appendChild(shot.cloneNode(true));

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal-close", modal).focus();
  };

  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    lastFocused?.focus();
  };

  $$(".project").forEach((card) => {
    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(card);
      }
    });
  });

  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}

/* ============================================================
   12) BOTONES DE PLANES → preseleccionan el tipo de proyecto
   ============================================================ */
function initServicePrefill() {
  $$("[data-service]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const select = $("#serviceSelect");
      if (select) select.value = btn.dataset.service;
    });
  });
}

/* ============================================================
   13) FORMULARIO DE CONTACTO
   ------------------------------------------------------------
   Sin backend: al enviar se abre el correo del visitante con el
   mensaje ya cargado. Para recibir mensajes sin depender del
   correo del cliente, registrate gratis en formspree.io y
   poné la URL en FORM_ENDPOINT (quitando el comentario).
   ============================================================ */
// const FORM_ENDPOINT = "https://formspree.io/f/TU_CODIGO"; // <- activá esto con Formspree

function initForm() {
  const form = $("#contactForm");
  if (!form) return;

  const clearErrors = () => $$(".field", form).forEach((f) => f.classList.remove("error"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    // Validación
    let valid = true;
    $$("[required]", form).forEach((field) => {
      const empty = !field.value.trim();
      const badEmail = field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      if (empty || badEmail) {
        field.closest(".field").classList.add("error");
        valid = false;
      }
    });

    if (!valid) {
      showToast("Revisá los campos marcados en rojo ✍️");
      form.querySelector(".field.error input, .field.error select, .field.error textarea")?.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    /* ---------- OPCIÓN A: Formspree (recomendada) ---------- */
    // if (FORM_ENDPOINT) {
    //   try {
    //     const res = await fetch(FORM_ENDPOINT, {
    //       method: "POST",
    //       headers: { Accept: "application/json" },
    //       body: new FormData(form)
    //     });
    //     if (res.ok) {
    //       form.reset();
    //       showToast("¡Mensaje enviado! Te respondo en menos de 24 hs ✅");
    //     } else {
    //       showToast("No se pudo enviar. Escribime directo por WhatsApp 🙏");
    //     }
    //   } catch {
    //     showToast("Sin conexión. Escribime por WhatsApp 🙏");
    //   }
    //   return;
    // }

    /* ---------- OPCIÓN B: abre el correo del visitante ---------- */
    const body = [
      `Nombre: ${data.nombre}`,
      `Email: ${data.email}`,
      `WhatsApp: ${data.whatsapp || "-"}`,
      `Tipo de proyecto: ${data.tipo}`,
      `Presupuesto: ${data.presupuesto || "-"}`,
      "",
      "Proyecto:",
      data.mensaje
    ].join("\n");

    const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(
      `Nuevo proyecto: ${data.tipo} — ${data.nombre}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
    showToast("Se abrió tu correo con el mensaje listo para enviar 📩 También podés escribirme por WhatsApp.");
  });
}

/* ============================================================
   14) AÑO ACTUAL EN EL PIE
   ============================================================ */
function initYear() {
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

/* ============================================================
   ARRANQUE
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();          // ← arma las tarjetas desde la lista PROJECTS
  renderFilters();           // ← arma los botones según tus categorías

  bindConfig();
  initYear();
  initScrollUI();
  initMobileMenu();
  initActiveLink();
  initReveal();

  initTyping();
  initFilters();
  initModal();
  initServicePrefill();
  initForm();
});
