// Datos globales del sitio kuminov.es (versión en español).
// La versión en inglés vive en vickum.com con la misma estructura.

export const LANG = "es";
export const SITE_URL = "https://kuminov.es";
export const SITE_NAME = "Víctor Kuminov";
export const SITE_TITLE = "Víctor Kuminov · Estudio de diseño y desarrollo web · España";
export const SITE_DESCRIPTION =
	"Landings ultrarrápidas, tiendas online ligeras y apps iOS y Android. Estudio boutique con 20 años de experiencia y clientes como LG, Sisley y Toyota.";

// Contacto / datos del titular
export const CONTACT_EMAIL = "victor.kuminov@gmail.com";
export const CONTACT_CITY = "Avilés (Asturias)";
export const WHATSAPP_PHONE = "+34 637 23 56 34";
export const WHATSAPP_URL =
	"https://wa.me/34637235634?text=" +
	encodeURIComponent("Hola Víctor, vengo de kuminov.es. Quiero hablarte de mi proyecto.");
export const TELEGRAM_URL = "https://t.me/vickumcom";

// Versión en otro idioma: misma página en vickum.com (hreflang y selector de idioma)
export const ALT_LANG = { code: "en", label: "EN", name: "English", site: "https://vickum.com" };
export const ALT_PATHS: Record<string, string> = {
	"/": "/",
	"/servicios": "/services",
	"/landings": "/landing-pages",
	"/tiendas-online": "/online-stores",
	"/apps": "/apps",
	"/rescate": "/rescue",
	"/cambio-de-plataforma": "/platform-migration",
	"/ia": "/ai",
	"/hosteleria": "/restaurants",
	"/vender-al-mundo": "/sell-worldwide",
	"/seo-visibilidad-ia": "/seo-ai-visibility",
	"/mantenimiento": "/maintenance",
	"/plataforma": "/platform",
	"/casos": "/work",
	"/precios": "/pricing",
	"/sobre-mi": "/about",
	"/contacto": "/contact",
	"/legal/aviso-legal": "/legal/notice",
	"/legal/privacidad": "/legal/privacy",
	"/legal/cookies": "/legal/cookies",
};
