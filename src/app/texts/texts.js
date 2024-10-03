const title = "Stilo África Cleidy";
const email = "cleidi844@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesad@ en los servicios de trenzas africanas de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573508879841"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En 'Stilo África Cleidy', nos especializamos en trenzas africanas, creando estilos únicos que reflejan la cultura y tradición de África. Con técnicas auténticas, resaltamos la belleza natural de cada persona.",
        description2: "Nuestro objetivo es ofrecer un servicio personalizado y de alta calidad que te haga sentir empoderad@ y segur@ de ti mism@. Nos enorgullecemos de cada trenza que realizamos, y trabajamos para que cada cliente se vea y se sienta increíble."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Trenzas que cuentan una historia",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566943520648&mibextid=JRoKGi",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
