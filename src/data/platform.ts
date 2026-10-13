// «Qué incluye cada tienda»: la plataforma propia con la que trabajo.
// Fuente: qs50.ru/vozmozhnosti, sin servicios propios del mercado ruso.
// Estado: live = funciona en tiendas de clientes, demo = hay demo, dev = en desarrollo.

export type Status = "live" | "demo" | "dev";

export interface Feature {
	title: string;
	text: string;
	status?: Status;
}

export interface FeatureGroup {
	title: string;
	text: string;
	status: Status;
	items: Feature[];
}

export const platformIntro = {
	metaTitle: "Qué incluye cada tienda · Víctor Kuminov",
	metaDescription:
		"Todo lo que trae una tienda hecha conmigo: web ultrarrápida, panel propio, venta en Telegram, asistente de IA, gestión por voz, carta QR para hostelería. Con su estado real.",
	eyebrow: "La plataforma",
	h1: "Qué incluye cada tienda",
	lead: "Todo lo que construyo para un cliente pasa a la plataforma y queda disponible para el siguiente. Esta es la lista completa, con el estado real de cada parte: funciona en tiendas de clientes, tiene demo o está en desarrollo.",
};

export const platform: FeatureGroup[] = [
	{
		title: "Web rápida y mudanza sin pérdidas",
		text: "La base de todo.",
		status: "live",
		items: [
			{
				title: "Web ultraligera",
				text: "Las páginas se preparan de antemano y el servidor entrega un archivo ya hecho. La web se abre rápido incluso con mala cobertura móvil.",
			},
			{
				title: "Mudanza desde otras plataformas",
				text: "Traslado catálogo, fotos y textos y pongo redirecciones desde las direcciones antiguas. Ya he mudado tiendas de 274, 580 y 677 productos.",
			},
			{
				title: "Fotos ligeras",
				text: "Convierto las imágenes a formatos modernos. En una tienda de moda las fotos pasaron a pesar un 86% menos, sin diferencia a la vista.",
			},
			{
				title: "Descripciones con IA",
				text: "Si faltan descripciones, las escribe una IA a partir de fotos y características. Así se completaron 413 fichas en una tienda de moda.",
			},
			{
				title: "Calculadora a medida",
				text: "El cliente calcula el precio de un producto a medida con tu tabla: medidas, colores, opciones. En un fabricante de puertas son 4.185 combinaciones.",
			},
			{
				title: "Fotos de 360°",
				text: "Fichas de producto que se pueden girar y ver por todos los lados.",
			},
		],
	},
	{
		title: "Panel propio: la tienda la llevas tú",
		text: "Sin depender de nadie para el día a día.",
		status: "live",
		items: [
			{
				title: "Precios y stock al momento",
				text: "Cambias un precio o un stock y la web se actualiza sin esperar. Puedes subir todo el catálogo un porcentaje u ocultar un grupo de productos.",
			},
			{
				title: "Precios desde una hoja de cálculo",
				text: "Subes un archivo o enlazas una hoja de cálculo en línea y la web toma los precios de ahí.",
			},
			{
				title: "Blog y páginas",
				text: "Un artículo o una noticia se publica al guardar. Campos SEO, portadas y una biblioteca de imágenes que las comprime sola.",
			},
			{
				title: "Banners y promociones",
				text: "Defines las fechas y la promoción se activa y se desactiva sola.",
			},
			{
				title: "Pedidos con estados",
				text: "Todos los pedidos en una lista: nuevo, en curso, terminado. Avisos por email y Telegram. Recorres los pedidos uno a uno con el filtro que elijas.",
			},
			{
				title: "Equipo y registro",
				text: "Cada persona tiene sus permisos. El registro muestra quién cambió qué y cuándo.",
			},
			{
				title: "Área de cliente",
				text: "Direcciones guardadas, favoritos, repetir un pedido y el carrito en todos sus dispositivos.",
			},
			{
				title: "Stock que se descuenta solo",
				text: "Cada pedido de la web descuenta las unidades vendidas, para no vender lo que ya no tienes.",
			},
		],
	},
	{
		title: "Venta por chat y asistente de IA",
		text: "Vender donde ya están tus clientes.",
		status: "live",
		items: [
			{
				title: "Mini-tienda en Telegram",
				text: "Catálogo con buscador, galerías, precios y stock en vivo, carrito y pedido dentro del chat. Los pedidos llegan al mismo panel que los de la web.",
			},
			{
				title: "Asistente de IA en el chat",
				text: "Responde a los clientes, recomienda por necesidad y por compatibilidad y enseña fichas con foto, precio y stock. Solo ofrece lo que hay en el catálogo y llama a una persona cuando hace falta.",
			},
			{
				title: "Estado del pedido en el chat",
				text: "El cliente recibe los cambios de estado de su pedido en el chat.",
				status: "dev",
			},
		],
	},
	{
		title: "Gestión por voz",
		text: "Dices, confirmas, está hecho.",
		status: "live",
		items: [
			{
				title: "Dicho y hecho",
				text: "Un mensaje de voz o de texto al bot: «sube un 10% los quesos», «oculta lo que no hay». El bot enseña cómo lo ha entendido y, al confirmar, el cambio aparece en la web.",
			},
			{
				title: "Tres niveles de permiso",
				text: "Precios, stock, textos y banners cambian al momento. Diseño y estructura, solo tras una vista previa. El código y los pagos no se tocan por voz.",
			},
			{
				title: "Registro y deshacer",
				text: "Cada cambio por voz queda en el registro del panel con su marca y se deshace con un botón.",
			},
		],
	},
	{
		title: "Hostelería: carta QR y pedidos en mesa",
		text: "Para sidrerías, restaurantes y bares.",
		status: "demo",
		items: [
			{
				title: "Sin aplicaciones",
				text: "El cliente escanea el código de la mesa y abre la carta en el navegador, sin instalar nada.",
			},
			{
				title: "Pedido al camarero",
				text: "El pedido llega con el número de mesa. El camarero pulsa «Aceptar» y «Listo», y el cliente ve el estado en su móvil. Diseñamos también los carteles de mesa.",
			},
			{
				title: "Pago, propinas y reservas",
				text: "Pago desde el móvil, propinas, reserva de mesa y conexión con tu TPV.",
				status: "dev",
			},
		],
	},
	{
		title: "Sectores",
		text: "Lo que ya hemos resuelto para tipos de negocio concretos.",
		status: "live",
		items: [
			{
				title: "Fabricación a medida",
				text: "El cliente elige medidas, color y opciones, el precio sale de tu tabla de fábrica y el pedido llega con la especificación completa.",
			},
			{
				title: "Moda y multimarca",
				text: "Catálogo con marcas, tallas, colores y filtros. Una tienda de 677 productos y 37 marcas, trasladada en pocos días.",
			},
			{
				title: "Vino y bebidas",
				text: "Escaparate con confirmación de mayoría de edad para alcohol.",
			},
		],
	},
	{
		title: "Fiable y en regla",
		text: "Lo que no se ve, pero se nota el día que falla.",
		status: "live",
		items: [
			{
				title: "Ningún pedido se pierde",
				text: "Cada pedido o consulta se guarda en el servidor y llega al panel. Si el panel no responde, llega por email y Telegram. Si quieres, también a una hoja de cálculo.",
			},
			{
				title: "La web no depende del panel",
				text: "Si el panel no está disponible, la tienda sigue abierta y vendiendo.",
			},
			{
				title: "Vigilancia diaria",
				text: "Cada día comprobamos que las webs de los clientes abren y que el certificado de seguridad no caduca.",
			},
			{
				title: "Copias y versiones",
				text: "Copias de seguridad y todo el código bajo control de versiones. Cualquier cambio se puede deshacer.",
			},
			{
				title: "Mudanza sin cortes",
				text: "El dominio se cambia sin que la web ni el correo se paren.",
			},
			{
				title: "Privacidad",
				text: "Consentimiento en cada formulario y política de privacidad. Los textos legales los revisa tu gestor o abogado.",
			},
		],
	},
	{
		title: "Contenido y visibilidad",
		text: "Para que te encuentren.",
		status: "live",
		items: [
			{
				title: "Blog llave en mano",
				text: "Plan de contenidos para un año y artículos con datos comprobados y enlaces al catálogo. 10 artículos para una tienda de menaje, 14 para una de vinos.",
			},
			{
				title: "De tus redes al blog",
				text: "Tus publicaciones se convierten en artículos de la web, enlazados entre sí: quien llega desde Google descubre tu canal, y quien te sigue llega a la tienda.",
			},
			{
				title: "Buscadores y asistentes de IA",
				text: "Mapa del sitio, datos estructurados y archivo llms.txt para que te encuentren en Google y en las respuestas de los asistentes de IA.",
			},
		],
	},
	{
		title: "Lo que viene",
		text: "En desarrollo. Lo doy por terminado solo cuando está probado con un cliente real.",
		status: "dev",
		items: [
			{
				title: "Club de clientes",
				text: "Programa de fidelización con puntos por compra y pasaporte digital del producto con verificación de autenticidad.",
			},
			{
				title: "App de la tienda",
				text: "App para iOS y Android con el mismo catálogo. La primera versión ya existe: catálogo, recogida en tienda, puntos y lector de códigos de barras.",
			},
			{
				title: "Tienda nueva en 15 minutos",
				text: "Indicas la dirección de tu tienda actual y recibes un borrador de la nueva en la plataforma.",
			},
		],
	},
];
