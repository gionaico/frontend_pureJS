let datos = {
    "company": {
        "name": "Smile-phone",
        "cifnif": "",
        "phone": "602240448",
        "logo": "http://localhost:8000/media/logo/smilePhine-logo_v0iDRbH.jpg",
        "icon_logo": null,
        "mapa_cobertura": null,
        "address": "calle mayor,  numero 2",
        "city": "Ontinyent",
        "province": "Valencia",
        "country": "España",
        "zipcode": "46870",
        "location_lat": "38.823966",
        "location_long": "-0.606957",
        "facebook": "https://www.facebook.com/giovannyINT",
        "twitter": "https://twitter.com/gionaico",
        "textos": [{
                "key": "jumbotron-wifi",
                "content": "<p>Vivamus vestibulum, ipsum sollicitudi.</p>",
                "image": "http://localhost:8000/media/info_empresa_image/internet_OIYoSm2.jpg",
                "lang": "es"
            },
            {
                "key": "jumbotron-movil",
                "content": "<p>Vestibulum pulvinar urna et quam.</p>",
                "image": "http://localhost:8000/media/info_empresa_image/movil_WzDlhjE.jpg",
                "lang": "es"
            },
            {
                "key": "jumbotron-tv",
                "content": "<p>Nullam est lacus, suscipit ut, dapibus quis, condimentum ac, risus.</p>",
                "image": "http://localhost:8000/media/info_empresa_image/television.jpg",
                "lang": "es"
            }
        ]
    },
    home: [{
            "pk": 1,
            "titulo": "¿Por qué Wifibytes?",
            "subtitulo": "Disfruta de nuestras increibles ofertas",
            "caja_izquierda_titulo": "Caja Izquierda",
            "caja_izquierda_texto": "<p><span>&iquest;Quieres darte de baja? &iquest;Cambiar &nbsp;de tarifa? &iquest; Activar el roaming? &iquest;Desactivar el buzon de voz? Sin problema. Entra en tu cuenta y hazlo con un solo click.Sin preguntas o llamadas a telefonos asistidos.</span></p>",
            "caja_derecha_titulo": "Caja Derecha",
            "caja_derecha_texto": "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaLorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea texto home2</p>",
            "activo": true,
            "idioma": 1,
            "lang": "es"
        },
        {
            "pk": 2,
            "titulo": "Slider",
            "subtitulo": "subtitle Slider",
            "caja_izquierda_titulo": "Slider1",
            "caja_izquierda_texto": "<p>texto slider1</p>",
            "caja_derecha_titulo": "Slider2",
            "caja_derecha_texto": "<p>texto slider2</p>",
            "activo": true,
            "idioma": 1,
            "lang": "es"
        }
    ],
    tarifa: [{
            "codtarifa": 1,
            "nombretarifa": "Great-tv",
            "slug": "great-tv",
            "pretitulo": "Disfruta de lamejor tv.",
            "logo": "http://localhost:8000/media/Logo/pantalla-de-tv.svg",
            "precio": 19.99,
            "activo": true,
            "destacado": true,
            "color": {
                "id": 1,
                "titulo": "tv",
                "hexadecimal": "#0000FF"
            },
            "subtarifas": [{
                "subtarifa_id": 2,
                "subtarifa_datos_internet": null,
                "subtarifa_cent_minuto": null,
                "subtarifa_est_llamada": null,
                "subtarifa_precio_sms": null,
                "subtarifa_minutos_gratis": null,
                "subtarifa_minutos_ilimitados": false,
                "subtarifa_velocidad_conexion_subida": null,
                "subtarifa_velocidad_conexion_bajada": null,
                "subtarifa_num_canales": 325,
                "subtarifa_siglas_omv": "tv",
                "subtarifa_omv": null,
                "tipo_tarifa": 5,
                "subtarifa_tarifa": {
                    "codtarifa": 1,
                    "nombretarifa": "Great-tv",
                    "slug": "great-tv",
                    "pretitulo": "Disfruta de lamejor tv.",
                    "pretitulo_va": "",
                    "logo": "media/Logo/pantalla-de-tv.svg",
                    "precio": 19.99,
                    "activo": true,
                    "destacado": true,
                    "created_at": 1540929348,
                    "updated_at": 1541679345,
                    "color": 1
                }
            }]
        },
        {
            "codtarifa": 2,
            "nombretarifa": "Navegatron",
            "slug": "navegatron",
            "pretitulo": "Disfruta navegando",
            "logo": "http://localhost:8000/media/Logo/wifi.svg",
            "precio": 35.99,
            "activo": true,
            "destacado": true,
            "color": {
                "id": 2,
                "titulo": "wifi",
                "hexadecimal": "#9370DB"
            },
            "subtarifas": [{
                    "subtarifa_id": 1,
                    "subtarifa_datos_internet": 0.0,
                    "subtarifa_cent_minuto": null,
                    "subtarifa_est_llamada": null,
                    "subtarifa_precio_sms": null,
                    "subtarifa_minutos_gratis": null,
                    "subtarifa_minutos_ilimitados": false,
                    "subtarifa_velocidad_conexion_subida": 10.0,
                    "subtarifa_velocidad_conexion_bajada": 100.0,
                    "subtarifa_num_canales": null,
                    "subtarifa_siglas_omv": "",
                    "subtarifa_omv": null,
                    "tipo_tarifa": 4,
                    "subtarifa_tarifa": {
                        "codtarifa": 2,
                        "nombretarifa": "Navegatron",
                        "slug": "navegatron",
                        "pretitulo": "Disfruta navegando",
                        "pretitulo_va": "",
                        "logo": "media/Logo/wifi.svg",
                        "precio": 35.99,
                        "activo": true,
                        "destacado": true,
                        "created_at": 1540929550,
                        "updated_at": 1541533798,
                        "color": 2
                    }
                },
                {
                    "subtarifa_id": 3,
                    "subtarifa_datos_internet": 5.0,
                    "subtarifa_cent_minuto": 18.0,
                    "subtarifa_est_llamada": null,
                    "subtarifa_precio_sms": 25.0,
                    "subtarifa_minutos_gratis": 150,
                    "subtarifa_minutos_ilimitados": false,
                    "subtarifa_velocidad_conexion_subida": null,
                    "subtarifa_velocidad_conexion_bajada": null,
                    "subtarifa_num_canales": null,
                    "subtarifa_siglas_omv": "",
                    "subtarifa_omv": null,
                    "tipo_tarifa": 1,
                    "subtarifa_tarifa": {
                        "codtarifa": 2,
                        "nombretarifa": "Navegatron",
                        "slug": "navegatron",
                        "pretitulo": "Disfruta navegando",
                        "pretitulo_va": "",
                        "logo": "media/Logo/wifi.svg",
                        "precio": 35.99,
                        "activo": true,
                        "destacado": true,
                        "created_at": 1540929550,
                        "updated_at": 1541533798,
                        "color": 2
                    }
                }
            ]
        },
        {
            "codtarifa": 3,
            "nombretarifa": "Ciclon ",
            "slug": "ciclon",
            "pretitulo": "pretitulo movil",
            "logo": "http://localhost:8000/media/Logo/telefono-inteligente.svg",
            "precio": 50.0,
            "activo": true,
            "destacado": true,
            "color": {
                "id": 3,
                "titulo": "movile",
                "hexadecimal": "#ffa500"
            },
            "subtarifas": [{
                    "subtarifa_id": 4,
                    "subtarifa_datos_internet": 2.0,
                    "subtarifa_cent_minuto": 11.0,
                    "subtarifa_est_llamada": 18.0,
                    "subtarifa_precio_sms": 21.0,
                    "subtarifa_minutos_gratis": null,
                    "subtarifa_minutos_ilimitados": true,
                    "subtarifa_velocidad_conexion_subida": null,
                    "subtarifa_velocidad_conexion_bajada": null,
                    "subtarifa_num_canales": null,
                    "subtarifa_siglas_omv": "",
                    "subtarifa_omv": null,
                    "tipo_tarifa": 1,
                    "subtarifa_tarifa": {
                        "codtarifa": 3,
                        "nombretarifa": "Ciclon ",
                        "slug": "ciclon",
                        "pretitulo": "pretitulo movil",
                        "pretitulo_va": "",
                        "logo": "media/Logo/telefono-inteligente.svg",
                        "precio": 50.0,
                        "activo": true,
                        "destacado": true,
                        "created_at": 1541334471,
                        "updated_at": 1541680897,
                        "color": 3
                    }
                },
                {
                    "subtarifa_id": 5,
                    "subtarifa_datos_internet": null,
                    "subtarifa_cent_minuto": null,
                    "subtarifa_est_llamada": null,
                    "subtarifa_precio_sms": null,
                    "subtarifa_minutos_gratis": null,
                    "subtarifa_minutos_ilimitados": false,
                    "subtarifa_velocidad_conexion_subida": 20.0,
                    "subtarifa_velocidad_conexion_bajada": 500.0,
                    "subtarifa_num_canales": null,
                    "subtarifa_siglas_omv": "",
                    "subtarifa_omv": null,
                    "tipo_tarifa": 4,
                    "subtarifa_tarifa": {
                        "codtarifa": 3,
                        "nombretarifa": "Ciclon ",
                        "slug": "ciclon",
                        "pretitulo": "pretitulo movil",
                        "pretitulo_va": "",
                        "logo": "media/Logo/telefono-inteligente.svg",
                        "precio": 50.0,
                        "activo": true,
                        "destacado": true,
                        "created_at": 1541334471,
                        "updated_at": 1541680897,
                        "color": 3
                    }
                },
                {
                    "subtarifa_id": 6,
                    "subtarifa_datos_internet": null,
                    "subtarifa_cent_minuto": null,
                    "subtarifa_est_llamada": null,
                    "subtarifa_precio_sms": null,
                    "subtarifa_minutos_gratis": null,
                    "subtarifa_minutos_ilimitados": false,
                    "subtarifa_velocidad_conexion_subida": null,
                    "subtarifa_velocidad_conexion_bajada": null,
                    "subtarifa_num_canales": 90,
                    "subtarifa_siglas_omv": "",
                    "subtarifa_omv": null,
                    "tipo_tarifa": 5,
                    "subtarifa_tarifa": {
                        "codtarifa": 3,
                        "nombretarifa": "Ciclon ",
                        "slug": "ciclon",
                        "pretitulo": "pretitulo movil",
                        "pretitulo_va": "",
                        "logo": "media/Logo/telefono-inteligente.svg",
                        "precio": 50.0,
                        "activo": true,
                        "destacado": true,
                        "created_at": 1541334471,
                        "updated_at": 1541680897,
                        "color": 3
                    }
                }
            ]
        }
    ]
}

export {
    datos
};