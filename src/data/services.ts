// Servicios del estudio. Cada uno genera su página en /[slug].
// Precios: TZ del 14.07.2026, todos + IVA. Sin nombres de plataformas ni tecnologías.

export type Group = "build" | "ai" | "sector" | "grow";

export interface Service {
	slug: string;
	group: Group;
	name: string;
	short: string;
	price: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	lead: string;
	badge?: "demo" | "dev";
	forWhom?: string[];
	includes?: string[];
	blocks?: { title: string; text: string; badge?: "demo" | "dev" }[];
	steps?: { title: string; text: string }[];
	proof?: { title: string; text: string };
	pricing: { price: string; notes: string[] };
	faq: { q: string; a: string }[];
	related: string[];
}

export const groups: Record<Group, { title: string; text: string }> = {
	build: {
		title: "Lo que construyo",
		text: "Webs, tiendas y apps a medida. Precio y plazo cerrados antes de empezar.",
	},
	ai: {
		title: "Inteligencia artificial",
		text: "Asistentes, automatizaciones y una tienda que se gestiona hablando.",
	},
	sector: {
		title: "Por sectores",
		text: "Soluciones probadas para tipos de negocio concretos.",
	},
	grow: {
		title: "Crecer y mantener",
		text: "Que te encuentren, que todo funcione y que cada mes vaya un poco mejor.",
	},
};

export const services: Service[] = [
	// ───────────── Construir ─────────────
	{
		slug: "landings",
		group: "build",
		name: "Landings ultrarrápidas",
		short: "Páginas de venta a medida que cargan en menos de un segundo y convierten visitas en clientes.",
		price: "desde 2.900 €",
		metaTitle: "Landings ultrarrápidas que convierten · Víctor Kuminov",
		metaDescription:
			"Páginas de venta y webs corporativas a medida: diseño propio, carga en menos de un segundo y entrega en 2-3 semanas. Desde 2.900 € + IVA.",
		h1: "Landings ultrarrápidas que convierten",
		lead: "Páginas de venta a medida, con diseño propio y un único objetivo: que la visita se convierta en cliente. Cargan en menos de un segundo, y eso lo puedes medir tú mismo.",
		forWhom: [
			"Lanzamientos de producto y campañas de publicidad.",
			"Servicios que viven de la confianza: clínicas, despachos, inmobiliarias, academias.",
			"Eventos, cursos y reservas.",
			"Empresas que necesitan una web corporativa seria, sin plantilla.",
		],
		includes: [
			"Estrategia y estructura de venta",
			"Textos pensados para convertir, también en otros idiomas",
			"Diseño 100% a medida, sin plantillas",
			"Carga en menos de 1 segundo, comprobable en Google PageSpeed",
			"SEO técnico y analítica con eventos",
			"Formulario, WhatsApp y reserva de citas",
			"Formularios con consentimiento RGPD",
			"Panel para publicar noticias y artículos, si lo necesitas",
		],
		blocks: [
			{
				title: "La velocidad es dinero",
				text: "Google penaliza las webs lentas y la gente se va antes de que terminen de cargar. Mis páginas se preparan antes de que nadie las pida y el servidor las entrega ya hechas. Por eso se abren al instante, incluso con mala cobertura.",
			},
			{
				title: "Cada pantalla tiene una misión",
				text: "Nada de decoración vacía. Primero decidimos qué tiene que hacer el visitante en cada bloque, luego lo diseño. El resultado parece caro porque está ordenado, no porque lleve efectos.",
			},
		],
		pricing: {
			price: "desde 2.900 €",
			notes: [
				"Landing: 2.900-6.000 €, entrega en 2-3 semanas.",
				"Web corporativa de varias páginas: desde 4.900 €, 3-5 semanas.",
				"Precio y plazo cerrados antes de empezar.",
			],
		},
		faq: [
			{
				q: "¿Podré cambiar los textos yo mismo?",
				a: "Sí. Si lo necesitas, te dejo un panel sencillo para textos, noticias y artículos. Y si prefieres no tocar nada, me lo mandas y lo cambio yo dentro del mantenimiento.",
			},
			{
				q: "¿De quién son el dominio y la web?",
				a: "Tuyos. El dominio se registra a tu nombre y te entrego todo. Si un día quieres cambiar de proveedor, te lo llevas entero.",
			},
			{
				q: "¿Cuánto tarda?",
				a: "Una landing, 2-3 semanas. Una web corporativa, 3-5. Te doy fecha cerrada antes de empezar.",
			},
		],
		related: ["tiendas-online", "seo-visibilidad-ia", "mantenimiento"],
	},
	{
		slug: "tiendas-online",
		group: "build",
		name: "Tiendas online ligeras",
		short: "Un e-commerce rápido, fácil de gestionar y que te pertenece: pagas una vez, sin alquiler mensual.",
		price: "desde 7.500 €",
		metaTitle: "Tiendas online ligeras y rápidas · Víctor Kuminov",
		metaDescription:
			"E-commerce que te pertenece, sin alquiler mensual de plataforma. Panel propio, pagos, envíos, Verifactu con tu gestor. Desde 7.500 € + IVA. Ventas en 40+ países.",
		h1: "Tiendas online ligeras, rápidas y fáciles de gestionar",
		lead: "Un e-commerce que vende desde el primer día, que tu equipo lleva sin depender de nadie y que es tuyo. Pagas el desarrollo una vez, sin cuota mensual de plataforma.",
		forWhom: [
			"Marcas y productores que venden directamente al cliente: alimentación, cosmética, moda, muebles, artesanía.",
			"Tiendas que pagan cada mes por una plataforma y ven cómo sube la cuota.",
			"Fabricantes que venden a medida y quieren que el cliente calcule el precio por su cuenta.",
			"Negocios con catálogos de cientos o miles de productos.",
		],
		blocks: [
			{
				title: "No alquiles tu tienda: cómprala",
				text: "En una plataforma de alquiler pagas cada mes y cada función extra es otra cuota. Si suben el precio, lo pagas tú. Con mi tienda pagas el desarrollo una vez y el código, los datos y el dominio son tuyos. Si un día quieres cambiar de proveedor, te la llevas entera.",
			},
			{
				title: "Tu propio panel de gestión",
				text: "Cambias precios, stock y visibilidad y la web se actualiza al momento. Puedes subir todo el catálogo un porcentaje, ocultar un grupo de productos o cargar precios desde una hoja de cálculo. Cada persona del equipo tiene sus permisos y un registro muestra quién cambió qué y cuándo.",
			},
			{
				title: "Pedidos que no se pierden",
				text: "Cada pedido se guarda en el servidor y aparece en el panel con su estado. El aviso te llega por email y por Telegram. Si el panel no está disponible, la tienda sigue vendiendo y el pedido te llega igual.",
			},
			{
				title: "Área de cliente",
				text: "Tus clientes guardan direcciones y favoritos, repiten un pedido con un clic y encuentran su carrito en el móvil y en el ordenador.",
			},
			{
				title: "Para productos a medida",
				text: "Si vendes a medida, el propio cliente calcula el precio: medidas, colores, acabados, herrajes. Para un fabricante de puertas lo montamos con 4.185 combinaciones, y cada pedido llega con la especificación completa.",
			},
		],
		includes: [
			"Estrategia de catálogo y de venta",
			"Diseño a medida",
			"Pagos con tarjeta, Bizum, Apple Pay y PayPal",
			"Envíos con Correos, SEUR, GLS y otros",
			"Facturación en regla (IVA, Verifactu) de la mano de tu gestor",
			"Banners y promociones que se activan y desactivan solas por fecha",
			"Fotos optimizadas: mucho más ligeras, sin perder calidad",
			"Descripciones de producto redactadas con IA cuando faltan",
			"Fichas con vista de 360° si tu producto lo pide",
			"Migración desde tu tienda actual sin perder posicionamiento",
			"Formación en vídeo para tu equipo",
			"30 días de soporte tras el lanzamiento",
		],
		proof: {
			title: "El estándar",
			text: "Mi cliente más antiguo lleva más de 10 años vendiendo con la tienda que construí. Hoy vende en más de 40 países.",
		},
		pricing: {
			price: "desde 7.500 €",
			notes: [
				"Proyecto típico: 7.500-18.000 €.",
				"Plazo: 4-8 semanas.",
				"Después solo pagas el alojamiento y, si quieres, un plan de mantenimiento.",
			],
		},
		faq: [
			{
				q: "¿Podré gestionarla yo?",
				a: "Sí. Precios, stock, pedidos, artículos y banners los llevas desde tu panel. Te dejo formación en vídeo y 30 días de soporte incluidos.",
			},
			{
				q: "Ya tengo tienda. ¿Pierdo el posicionamiento?",
				a: "No. Mantengo las direcciones de las páginas o pongo redirecciones desde las antiguas, y conservo tu analítica. El posicionamiento se muda con la tienda.",
			},
			{
				q: "¿Qué tienen las grandes plataformas que esta tienda no tenga?",
				a: "Las grandes plataformas traen más funciones de almacén y aplicaciones listas para instalar. Yo añado lo que tu tienda necesita y no cargo lo que sobra. A cambio no hay cuota mensual y la tienda es tuya.",
			},
			{
				q: "¿Se puede vender también por chat?",
				a: "Sí. La misma tienda puede tener una mini-tienda dentro de Telegram y un asistente de IA que recomienda productos. Los pedidos llegan al mismo panel.",
			},
		],
		related: ["cambio-de-plataforma", "vender-al-mundo", "ia"],
	},
	{
		slug: "cambio-de-plataforma",
		group: "build",
		name: "De alquiler a tienda propia",
		short: "Mudo tu tienda de una plataforma de pago mensual a una propia, sin perder ventas ni posiciones en Google.",
		price: "presupuesto cerrado",
		metaTitle: "Cambia tu tienda de alquiler por una propia · Víctor Kuminov",
		metaDescription:
			"Migración de tiendas online sin perder posicionamiento: catálogo, fotos, redirecciones y analítica. Deja de pagar cuota mensual de plataforma.",
		h1: "Tu tienda, de alquiler a propiedad",
		lead: "Llevo tu tienda de una plataforma de pago mensual a una propia. El catálogo, las fotos, las direcciones de las páginas y las estadísticas se mudan con ella. Pagas el desarrollo una vez y dejas de pagar cuota.",
		forWhom: [
			"Tu catálogo ha crecido y la cuota sube con él.",
			"Pagas extras por funciones que deberían venir de serie.",
			"Quieres que la web, el código y los datos sean tuyos.",
			"Tu tienda actual es lenta y no sabes por qué.",
		],
		steps: [
			{
				title: "Auditoría y traslado",
				text: "Reviso la tienda actual y traslado catálogo, fotos y textos. Preparo las redirecciones.",
			},
			{
				title: "Prueba en paralelo",
				text: "Revisas la tienda nueva en una dirección temporal mientras la antigua sigue vendiendo.",
			},
			{
				title: "Cambio de dominio",
				text: "Cambio el dominio sin cortar ni la web ni el correo un solo minuto.",
			},
			{
				title: "Trabajo y soporte",
				text: "Tú llevas precios y stock en el panel. Yo vigilo la web y añado lo que haga falta.",
			},
		],
		blocks: [
			{
				title: "Lo que no se pierde",
				text: "Mantengo las direcciones de las páginas o pongo redirecciones permanentes desde las antiguas, y conservo la misma analítica. El posicionamiento y el historial se mudan con la tienda. Lo he hecho con tiendas de 274, 580 y 677 productos. En una de ellas configuré 736 redirecciones.",
			},
			{
				title: "Cuándo no compensa",
				text: "Si tu tienda es pequeña y la cuota es baja, quizá no te salga a cuenta. Te lo digo con números antes de empezar: cuánto pagas ahora, cuánto costaría la tuya y en cuánto tiempo se recupera.",
			},
		],
		includes: [
			"Traslado de catálogo, fotos, textos y clientes",
			"Redirecciones permanentes desde las direcciones antiguas",
			"La misma analítica, sin perder el historial",
			"Fotos convertidas a formatos ligeros",
			"Descripciones con IA para los productos que no tienen",
			"Cambio de dominio sin cortes de web ni de correo",
		],
		pricing: {
			price: "presupuesto cerrado",
			notes: [
				"Lo fijo tras la auditoría (450 €, se descuenta del proyecto).",
				"Si además quieres un diseño nuevo, se calcula como tienda online: desde 7.500 €.",
			],
		},
		faq: [
			{
				q: "¿Cuánto tarda la mudanza?",
				a: "Depende del catálogo. Una tienda de moda con 677 productos y 37 marcas la trasladamos en pocos días. Te doy fecha cerrada tras la auditoría.",
			},
			{
				q: "¿Se para la tienda durante el cambio?",
				a: "No. La tienda nueva se prueba en paralelo y el dominio se cambia cuando todo está listo. La web y el correo no se cortan.",
			},
		],
		related: ["tiendas-online", "rescate", "seo-visibilidad-ia"],
	},
	{
		slug: "apps",
		group: "build",
		name: "Apps iOS y Android",
		short: "Una sola base de código, dos plataformas: tu primera app sin presupuestos de agencia grande.",
		price: "desde 3.000 €",
		metaTitle: "Apps iOS y Android a medida · Víctor Kuminov",
		metaDescription:
			"Tu primera app con una sola base de código: del concepto a la App Store y Google Play desde 3.000 € + IVA. Estudio senior, trato directo.",
		h1: "Apps para iPhone y Android que tus clientes querrán usar",
		lead: "Una sola base de código, dos plataformas. Tu primera app sin los presupuestos de una gran agencia, del concepto a la App Store.",
		forWhom: [
			"Negocios con clientes que repiten: reservas, pedidos, fidelización.",
			"Una idea que quieres validar sin gastar decenas de miles.",
			"Empresas que necesitan una herramienta interna para su equipo.",
		],
		includes: [
			"Definición de producto y experiencia: la primera versión que de verdad hace falta",
			"Diseño de interfaz para iOS y Android",
			"Desarrollo multiplataforma: un código, dos tiendas",
			"Integraciones: pagos, notificaciones, tu web o tu CRM",
			"Publicación en App Store y Google Play",
			"Analítica y plan de evolución",
		],
		blocks: [
			{
				title: "¿Seguro que necesitas una app?",
				text: "Te lo diré en la primera llamada. Si tu caso se resuelve con una web, te lo digo y te ahorro miles de euros. Solo construyo apps que tienen sentido.",
			},
			{
				title: "Por qué este precio",
				text: "Dos apps nativas, una para iOS y otra para Android, cuestan 30.000 € o más en una agencia. Yo trabajo con una sola base de código: el mismo resultado para tus clientes, la mitad de trabajo y un precio de entrada honesto.",
			},
		],
		pricing: {
			price: "desde 3.000 €",
			notes: [
				"Primera app: 3.000-12.000 €.",
				"Productos con servidor propio e integraciones: presupuesto a medida.",
				"Plazo: desde 4 semanas.",
			],
		},
		faq: [
			{
				q: "¿La app puede usar el catálogo de mi tienda?",
				a: "Sí. Si tu tienda está hecha conmigo, la app trabaja con el mismo catálogo, los mismos precios y el mismo stock.",
			},
			{
				q: "¿Quién la publica en las tiendas?",
				a: "Yo. Preparo fichas y capturas y me ocupo de la revisión de Apple y Google. La cuenta de desarrollador va a tu nombre, la app es tuya.",
			},
		],
		related: ["tiendas-online", "ia", "mantenimiento"],
	},
	{
		slug: "rescate",
		group: "build",
		name: "Rescate de proyectos",
		short: "¿Pagaste por una web que no vende? Averiguo por qué y la pongo a funcionar.",
		price: "desde 2.500 €",
		metaTitle: "Rescate de webs y tiendas que no venden · Víctor Kuminov",
		metaDescription:
			"Tu web o tu tienda no vende o se quedó a medias. Auditoría estratégica de 450 € y rescate desde 2.500 € + IVA. Lo rehago o te devuelvo el dinero.",
		h1: "Tu web no vende. Averiguo por qué y la arreglo.",
		lead: "Arreglo lo que otros no supieron hacer. Si pagaste por una web o una tienda y nunca llegó a vender, o te la dejaron a medias, eso es justo lo mío.",
		forWhom: [
			"Pagaste por una web y nunca llegó a vender.",
			"Alguien empezó tu tienda online y la dejó a medias.",
			"Lo intentaste por tu cuenta y se quedó a medio camino.",
			"Nadie quiere tocar tu web porque «es un lío».",
		],
		steps: [
			{
				title: "Auditoría estratégica",
				text: "Analizo técnica, diseño y conversión. Recibes un informe claro y una videollamada de 60 minutos.",
			},
			{
				title: "Plan con prioridades",
				text: "Qué falla, qué sobra y qué arreglar primero para que empiece a vender.",
			},
			{
				title: "Rescate",
				text: "Arreglo lo que está roto sin rehacerlo todo por rehacer.",
			},
			{
				title: "Medición",
				text: "Comprobamos con datos que funciona. Si no quedas satisfecho, lo rehago o te devuelvo el dinero.",
			},
		],
		proof: {
			title: "De medio año perdido a vender en un mes",
			text: "Una fábrica histórica de artesanía llevaba medio año con una tienda que no vendía nada. La relancé en menos de un mes y por una fracción de lo que habían pagado. Más de diez años después sigue conmigo.",
		},
		pricing: {
			price: "desde 2.500 €",
			notes: [
				"Entrada: auditoría estratégica, 450 €. Si me encargas el rescate, se descuenta entera.",
				"Rescate típico: 2.500-8.000 €.",
			],
		},
		faq: [
			{
				q: "¿Y si la auditoría dice que hay que empezar de cero?",
				a: "Te lo diré tal cual, con el porqué y lo que costaría. A veces cuesta menos rehacer que remendar, y otras veces basta con arreglar tres cosas.",
			},
			{
				q: "Mi web la hizo otra persona. ¿Puedes trabajar sobre ella?",
				a: "Sí, es lo que más hago. Necesito los accesos que tengas; si no los tienes, te ayudo a recuperarlos.",
			},
		],
		related: ["cambio-de-plataforma", "tiendas-online", "mantenimiento"],
	},

	// ───────────── IA ─────────────
	{
		slug: "ia",
		group: "ai",
		name: "IA para tu negocio",
		short: "Un asistente que atiende a tus clientes, tareas que se hacen solas y una tienda que se gestiona hablando.",
		price: "consultoría 75 €/h",
		metaTitle: "Inteligencia artificial para negocios · Víctor Kuminov",
		metaDescription:
			"Asistente de IA que atiende a tus clientes con tu catálogo real, automatizaciones, textos de producto y gestión de la tienda por voz. Consultoría desde 75 €/h + IVA.",
		h1: "Inteligencia artificial que trabaja para tu negocio",
		lead: "Uso IA cada día en mi propio trabajo y la llevo a negocios reales: un asistente que atiende a tus clientes, tareas repetitivas que se hacen solas y textos que antes nadie tenía tiempo de escribir. Tú ves el resultado. Yo me ocupo de la tecnología.",
		blocks: [
			{
				title: "Un asistente que vende con tu catálogo",
				text: "Responde a tus clientes en el chat, recomienda productos con su foto, precio y stock reales y solo ofrece lo que tienes. Cuando la pregunta se sale de lo que sabe, avisa a una persona de tu equipo. En una tienda de equipamiento táctico recomienda productos por compatibilidad y prepara el pedido. Hoy funciona en Telegram.",
			},
			{
				title: "Tu tienda dentro de Telegram",
				text: "Catálogo con buscador, fotos, precios y stock en vivo, carrito y pedido sin salir del chat. Los pedidos llegan al mismo panel que los de la web, con un solo catálogo para todo.",
			},
			{
				title: "Gestiona la tienda hablando",
				text: "Le escribes o le dices a un bot: «sube un 10% los precios de los quesos». Te enseña cómo lo ha entendido, confirmas y el cambio aparece en la web. Precios, stock, textos y banners cambian al momento. El diseño, solo tras una vista previa. El código y los pagos no se tocan por voz. Cada cambio queda registrado y se deshace con un botón.",
			},
			{
				title: "Automatizaciones",
				text: "Traducción de catálogos y documentos, respuestas a las preguntas de siempre, informes que se preparan solos, fichas de producto a partir de fotos y características. En una tienda de moda, la IA escribió las descripciones de 413 productos que no tenían ninguna.",
			},
			{
				title: "Consultoría",
				text: "Si no sabes por dónde empezar, una sesión para ver qué tareas de tu negocio se pueden automatizar y cuáles no merecen la pena. Te lo digo con sinceridad, aunque la respuesta sea «todavía no».",
			},
			{
				title: "Avisos de pedido por chat",
				text: "El cliente recibe cada cambio de estado de su pedido en el chat, sin correos que nadie lee.",
				badge: "dev",
			},
		],
		pricing: {
			price: "desde 75 €/h",
			notes: [
				"Consultoría: 75 €/h.",
				"Implantación (asistente, mini-tienda en Telegram, automatizaciones): presupuesto cerrado tras la primera sesión.",
			],
		},
		faq: [
			{
				q: "¿La IA se va a inventar cosas delante de mis clientes?",
				a: "El asistente solo recomienda lo que está en tu catálogo, con precio y stock reales. Lo que no sabe, lo pasa a una persona.",
			},
			{
				q: "¿Necesito saber de tecnología?",
				a: "No. Me cuentas qué te quita tiempo y yo te propongo qué automatizar, con lo que cuesta y lo que ahorras.",
			},
			{
				q: "¿Funciona en WhatsApp?",
				a: "Hoy el asistente y la mini-tienda funcionan en Telegram. Si tus clientes están en WhatsApp, lo estudiamos para tu caso y te digo con claridad qué se puede hacer.",
			},
		],
		related: ["tiendas-online", "hosteleria", "mantenimiento"],
	},

	// ───────────── Sectores ─────────────
	{
		slug: "hosteleria",
		group: "sector",
		name: "Carta QR y pedidos en mesa",
		short: "Para sidrerías, restaurantes y bares: el cliente escanea, pide desde la mesa y el camarero lo recibe al momento.",
		price: "presupuesto a medida",
		badge: "demo",
		metaTitle: "Carta QR y pedidos desde la mesa para hostelería · Víctor Kuminov",
		metaDescription:
			"Carta digital con código QR y pedidos desde la mesa sin instalar nada. El camarero recibe el pedido con el número de mesa. Para sidrerías, restaurantes y bares.",
		h1: "Carta digital y pedidos desde la mesa",
		lead: "Para sidrerías, restaurantes, bares y cafeterías. El cliente escanea el código de la mesa, ve la carta en su móvil sin instalar nada y pide. El pedido llega al camarero con el número de mesa.",
		blocks: [
			{
				title: "Sin aplicaciones",
				text: "La carta se abre en el navegador del móvil, con fotos y precios. Si recibes turistas, la preparamos también en inglés o en otros idiomas.",
			},
			{
				title: "El pedido, directo al camarero",
				text: "El pedido con el número de mesa llega al móvil del camarero. Pulsa «Aceptar» y luego «Listo», y el cliente ve el estado en su teléfono.",
			},
			{
				title: "Los carteles de mesa, también",
				text: "Diseñamos los carteles con el código QR para cada mesa, listos para imprimir.",
			},
			{
				title: "Pago, propinas y reservas",
				text: "Pago desde el móvil, propinas, reserva de mesa y conexión con tu TPV.",
				badge: "dev",
			},
		],
		pricing: {
			price: "presupuesto a medida",
			notes: ["Depende del número de mesas, de idiomas y de si quieres la carta solo para ver o también para pedir."],
		},
		faq: [
			{
				q: "¿Puedo verlo funcionando antes?",
				a: "Sí. Tengo una demo de un café: te la enseño en una videollamada o te paso el enlace por WhatsApp.",
			},
			{
				q: "¿Quién cambia los precios y los platos del día?",
				a: "Tú, desde un panel sencillo. Los cambios se ven en la carta al momento.",
			},
		],
		related: ["ia", "landings", "seo-visibilidad-ia"],
	},
	{
		slug: "vender-al-mundo",
		group: "sector",
		name: "Vende tu producto al mundo",
		short: "Tienda en varios idiomas y envíos internacionales para productores, artesanos y marcas de aquí.",
		price: "desde 7.500 €",
		metaTitle: "Vende tus productos al mundo: tienda online multilingüe · Víctor Kuminov",
		metaDescription:
			"Tienda online en varios idiomas, pagos internacionales y envíos por país para productores y artesanos. Lo hice con una fábrica de artesanía que hoy vende en 40+ países.",
		h1: "Lleva tu producto de aquí al mundo",
		lead: "Lo hice con una fábrica histórica de artesanía que hoy vende en más de 40 países. Quiero hacer lo mismo con los quesos, la sidra, las conservas y la artesanía de Asturias y de toda España.",
		forWhom: [
			"Productores de alimentación y bebida con un producto que fuera no se encuentra.",
			"Talleres y artesanos con clientes extranjeros que vuelven a casa y quieren seguir comprando.",
			"Marcas que venden a turistas y quieren seguir vendiéndoles después del viaje.",
		],
		blocks: [
			{
				title: "Una tienda en varios idiomas",
				text: "Traduzco la web y el catálogo al inglés y a otros idiomas. He trabajado con textos en inglés, italiano, hebreo, ruso y español. Textos revisados, no traducción automática a ciegas.",
			},
			{
				title: "Pagos y envíos internacionales",
				text: "Tarjetas extranjeras y PayPal, tarifas de envío por país y zonas. Te ayudo a decidir a qué países vender primero. Para alimentación o alcohol, la parte fiscal y aduanera la revisa tu gestor o asesor, y yo lo monto en la tienda.",
			},
			{
				title: "Que te encuentren fuera",
				text: "SEO en cada idioma, la historia de tu producto contada para quien no conoce la región y visibilidad en los asistentes de IA, que ya recomiendan tiendas a compradores de todo el mundo.",
			},
		],
		proof: {
			title: "40+ países",
			text: "Una fábrica histórica de artesanía vende con mi tienda desde hace más de diez años. Sus piezas viajan a Nueva Zelanda, Bali, Australia, América y toda Europa.",
		},
		pricing: {
			price: "desde 7.500 €",
			notes: [
				"Se calcula como una tienda online, con los idiomas y países que necesites.",
				"Traducción de una tienda que ya tienes: presupuesto según el volumen del catálogo.",
			],
		},
		faq: [
			{
				q: "¿Por qué país empiezo?",
				a: "Por donde ya ves interés: turistas que te compran, pedidos por correo, seguidores en redes. Lo vemos juntos con datos.",
			},
			{
				q: "¿Puedo empezar solo con una web en inglés?",
				a: "Sí. Una landing en inglés con tu historia y un formulario de pedido ya sirve para comprobar si hay demanda antes de invertir en la tienda completa.",
			},
		],
		related: ["tiendas-online", "seo-visibilidad-ia", "landings"],
	},

	// ───────────── Crecer ─────────────
	{
		slug: "seo-visibilidad-ia",
		group: "grow",
		name: "SEO y visibilidad en IA",
		short: "Que te encuentren en Google y que ChatGPT y otros asistentes recomienden tu negocio.",
		price: "desde 100 €/mes",
		metaTitle: "SEO y visibilidad en ChatGPT y asistentes de IA · Víctor Kuminov",
		metaDescription:
			"SEO técnico y local, blog con contenido verificado y visibilidad en ChatGPT, Gemini y Perplexity. Módulo de visibilidad en IA desde 100 €/mes.",
		h1: "Que te encuentren en Google y en las respuestas de la IA",
		lead: "Cada vez más gente pregunta a ChatGPT, Gemini o Perplexity antes de buscar en Google. Preparo tu web para las dos cosas: los buscadores de siempre y los asistentes de IA.",
		blocks: [
			{
				title: "SEO técnico",
				text: "Velocidad, mapa del sitio, datos estructurados para buscadores, redirecciones bien hechas y versiones por idioma marcadas correctamente. La base que casi nadie revisa.",
			},
			{
				title: "SEO local",
				text: "Tu ficha de Google, datos coherentes en directorios y páginas pensadas para tu zona. Para que te encuentren quienes buscan cerca.",
			},
			{
				title: "Visibilidad en IA",
				text: "Archivo llms.txt, marcado y contenido que los asistentes de IA pueden leer y citar. Pocos lo ofrecen todavía. Yo sí, y lo aplico en mis propias webs.",
			},
			{
				title: "Un blog que vende",
				text: "Plan de contenidos para un año y artículos con datos comprobados y enlaces a productos de tu catálogo. Para una tienda de menaje escribimos 10 artículos; para una de vinos, 14. Cada texto pasa por una revisión humana: nada de relleno de máquina.",
			},
		],
		pricing: {
			price: "desde 100 €/mes",
			notes: [
				"Visibilidad en IA: 100-150 €/mes como módulo del mantenimiento.",
				"SEO técnico continuo y contenidos: incluidos en el plan Growth (950 €/mes).",
				"Auditoría SEO puntual: dentro de la auditoría estratégica (450 €).",
			],
		},
		faq: [
			{
				q: "¿En cuánto tiempo se notan los resultados?",
				a: "Lo técnico se nota en semanas. El contenido y el posicionamiento, en meses. Te paso un informe mensual con datos, no con promesas.",
			},
			{
				q: "¿De verdad la IA recomienda negocios?",
				a: "Sí, y cada vez más. Cuando alguien pregunta «dónde comprar» o «quién me hace», el asistente cita fuentes. Mi trabajo es que tu web sea una fuente que pueda leer y citar.",
			},
		],
		related: ["mantenimiento", "landings", "vender-al-mundo"],
	},
	{
		slug: "mantenimiento",
		group: "grow",
		name: "Mantenimiento y soporte",
		short: "Tu web vigilada a diario, siempre actualizada y con alguien que responde. Tu equipo técnico, sin contratarlo.",
		price: "desde 490 €/mes",
		metaTitle: "Mantenimiento web y soporte mensual · Víctor Kuminov",
		metaDescription:
			"Planes de mantenimiento Care, Growth y Partner: vigilancia diaria, copias, seguridad, mejoras y soporte prioritario. Desde 490 €/mes + IVA.",
		h1: "Mantenimiento: tu equipo técnico, sin contratarlo",
		lead: "Lanzar la web es el principio. Después alguien tiene que vigilarla, actualizarla y atender tus cambios. Ese alguien soy yo.",
		blocks: [
			{
				title: "Vigilancia diaria",
				text: "Cada día comprobamos que tu web abre y que el certificado de seguridad no caduca. Nos enteramos de un problema antes que tus clientes.",
			},
			{
				title: "Copias y versiones",
				text: "Copias de seguridad de los datos y todo el código bajo control de versiones. Cualquier cambio se puede deshacer.",
			},
			{
				title: "Seguridad y actualizaciones",
				text: "Mantengo la web al día y aplico los parches de seguridad. Tú no tienes que pensar en ello.",
			},
		],
		pricing: {
			price: "desde 490 €/mes",
			notes: [
				"Care, 490 €/mes: actualizaciones, seguridad, copias, soporte prioritario y hasta 3 h de cambios al mes.",
				"Growth, 950 €/mes: todo lo de Care más experimentos de conversión, SEO técnico e informe mensual.",
				"Partner, 1.900 €/mes: tu equipo técnico externo, con bolsa de horas y estrategia trimestral.",
				"Trabajos puntuales sin plan: 90 €/h, bono desde 5 horas.",
			],
		},
		faq: [
			{
				q: "¿Puedo contratar mantenimiento para una web que no hiciste tú?",
				a: "Sí. Primero la reviso (auditoría) para saber qué me encuentro y si se puede mantener con garantías.",
			},
			{
				q: "¿Hay permanencia?",
				a: "No. Mes a mes. Si sigues conmigo, es porque el trabajo te sirve, no por un contrato.",
			},
		],
		related: ["seo-visibilidad-ia", "rescate", "tiendas-online"],
	},
];

export const bySlug = (slug: string) => services.find((s) => s.slug === slug);

// Servicios pequeños que no tienen página propia (bloque «Y además»)
export const extras = [
	{
		title: "Redes sociales y diseño",
		text: "Publicaciones, diseño gráfico y piezas para campañas, por horas o dentro del mantenimiento.",
	},
	{
		title: "Webs y contenidos en varios idiomas",
		text: "Español, inglés y ruso, también para negocios que atienden a clientes rusohablantes en España.",
	},
	{
		title: "Auditoría estratégica",
		text: "Técnica, diseño y conversión de tu web, tienda o app. Informe y videollamada de 60 minutos. 450 €, se descuentan del proyecto.",
	},
	{
		title: "Trabajos puntuales",
		text: "Arreglos y cambios concretos sin plan mensual. 90 €/h, bono desde 5 horas.",
	},
];
