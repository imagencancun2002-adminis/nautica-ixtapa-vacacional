const phone = "527551392282"; // México (+52) + número de WhatsApp
let currentLang = "es";

function makeWhatsAppMessage(apartment, lang) {
  if (lang === "en") {
    if (apartment === "1") return "Hello, I'm interested in Apartment 1 (2 bedrooms) at Náutica Ixtapa Vacacional, Building C, first floor. Could you please share rates and availability for my travel dates?";
    if (apartment === "2") return "Hello, I'm interested in Apartment 2 (3 bedrooms) at Náutica Ixtapa Vacacional, Building C, third floor. Could you please share rates and availability for my travel dates?";
    return "Hello, I'd like to ask about rates and availability for the vacation apartments at Náutica Ixtapa Vacacional.";
  }
  if (apartment === "1") return "Hola, me interesa el Apartamento 1 de 2 recámaras en Náutica Ixtapa Vacacional, Edificio C, primer nivel. ¿Me pueden informar las tarifas y la disponibilidad para mis fechas de viaje?";
  if (apartment === "2") return "Hola, me interesa el Apartamento 2 de 3 recámaras en Náutica Ixtapa Vacacional, Edificio C, tercer nivel. ¿Me pueden informar las tarifas y la disponibilidad para mis fechas de viaje?";
  return "Hola, quisiera consultar las tarifas y la disponibilidad de los apartamentos vacacionales de Náutica Ixtapa Vacacional.";
}

function updateWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    const apartment = link.dataset.apartment || "general";
    const message = makeWhatsAppMessage(apartment, currentLang);
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-es][data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  document.querySelectorAll(".lang").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
  updateWhatsAppLinks();
}

document.querySelectorAll(".lang").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
document.getElementById("year").textContent = new Date().getFullYear();
updateWhatsAppLinks();
