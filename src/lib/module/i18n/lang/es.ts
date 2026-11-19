import type { I18N } from '..';

import ratingUploadGuide from '../md/es/ratingUploadGuide.md?raw';
import ratingExplanation from '../md/es/ratingExplanation.md?raw';

const newEs: I18N.RecursiveStringRecord = {
    layout: {
        main: {
            song: 'Canciones',
            doc: 'Documentos',
            newSong: 'Canciones nuevas',
            diffchart: 'Tablas de dificultad',
            dani: 'Dan-i Dojo',
            gamecenter: 'Recreativos',
            measures: 'Constantes',
            user: {
                user: 'Usuario',
                donderData: 'Rating',
                notLogined: 'Sin iniciar sesión',
                login: 'Iniciar sesión',
                logout: 'Cerrar sesión',
                theme: 'Tema',
                lang: 'Idioma',
                experimental: 'Experimental'
            }
        },
        'dedicated diffchart': {
            type: {
                clear: 'Clear',
                fc: 'Full Combo',
                dfc: 'Donderful Combo'
            },
            select: 'Seleccionar'
        },
        '/auth/user': {
            user: 'Usuario',
            myData: 'Mis datos',
            donderData: 'Rating'
        },
        rating: {
            title: 'Rating',
            me: 'Mi rating',
            ranking: 'Clasificación',
            measure: 'Constantes'
        }
    },
    component: {
        SongEditor: {
            difficulties: {
                easy: 'Fácil',
                normal: 'Normal',
                hard: 'Difícil',
                oni: 'Oni (anverso)',
                ura: 'Oni (reverso)'
            },
            BasicEditor: {
                songNo: 'N.º de canción'
            },
            TitleEditor: {
                title: 'Título',
                songTitle: 'Título de la canción',
                titleKo: 'Coreano',
                aliasKo: 'Coreano (no oficial)',
                titleEn: 'Inglés',
                aliasEn: 'Inglés (no oficial)',
                titleZhCN: 'Chino',
                romaji: 'Romaji'
            },
            OtherEditor: {
                other: 'Otros',
                genre: 'Género',
                bpmShiver: 'Variación de BPM',
                keybpm: 'BPM principal',
                version: 'Versiones',
                artist: 'Artistas',
                commaPlz: 'Sepáralos con comas.',
                included: 'Incluida',
                deleted: 'Eliminada',
                asiaBanned: 'Bloqueada en Asia',
                krBanned: 'Bloqueada en Corea',
                addedDate: 'Fecha de incorporación',
                use: 'Usar'
            },
            CoursesEditor: {
                course: 'Partituras'
            },
            CourseEditor: {
                level: 'Nivel',
                branched: 'Bifurcaciones',
                maxCombo: 'Combo máximo',
                playTime: 'Duración máx. (s)',
                playTimeSub: 'Desde la primera nota Don/Ka hasta la última.',
                density: 'Densidad máx. (golpes/s)',
                calculate: 'Calcular',
                maxBalloon: 'Globos máx.',
                commaPlz: 'Sepáralos con comas.',
                maxRoll: 'Redoble máx. (s)',
                dani: 'Dan-i',
                add: 'Añadir',
                img: 'Imágenes de la partitura',
                imgLink: 'Enlace de la imagen'
            },
            DaniEditor: {
                first: '1.ª',
                second: '2.ª',
                third: '3.ª'
            }
        },
        DaniDisplay: {
            type: {
                "gauge": "Medidor de alma",
                "combo": "Combos",
                "score": "Puntuación",
                "roll": "Redobles",
                "hit": "Golpes",
                "good": "Buenos",
                "ok": "OK",
                "bad": "Malos",
                "score_sum": "Puntuación total"
            },
            suffix1: {
                percent: "%",
                times: " veces",
                point: " puntos",
                count: ""
            },
            suffix2: {
                up: 'o más',
                down: '(sin llegar)'
            }
        },
        Diffchart: {
            diffchart: 'Tabla de dificultad',
            downloadMessage: 'La imagen se descargará en breve.'
        }
    },
    title: {
        base: 'Wiki de Taiko no Tatsujin',
        '/auth/login': 'Iniciar sesión',
        '/auth/user': 'Mis datos',
        '/auth/user/donder': 'Datos de Donder',
        '/dani': 'Dan-i Dojo',
        '/diffchart/clear': 'Tabla de dificultad (Clear)',
        '/diffchart/fc': 'Tabla de dificultad (Full Combo)',
        '/diffchart/dfc': 'Tabla de dificultad (Donderful Combo)',
        '/gamecenter': 'Mapa de recreativos',
        '/gamecenter/report': 'Informar sobre un recreativo',
        '/measures': 'Tabla de constantes de partituras',
        '/song': 'Buscar canciones',
        '/song/[songNo]': 'Sin resultados',
        '/song/[songNo]/edit': 'Solicitar edición',
        '/song/add': 'Añadir canción',
        '/rating/me': 'Mi rating',
        '/rating/ranking': 'Clasificación',
        '/rating/measure': 'Constantes'
    },
    dani: {
        dan: {
            "senpo": "Senpo",
            "jiho": "Jiho",
            "chiuken": "Chiuken",
            "fukusho": "Fukusho",
            "taisho": "Taisho",
            "beginner": "Principiante",
            "10kyu": "10.º kyu",
            "9kyu": "9.º kyu",
            "8kyu": "8.º kyu",
            "7kyu": "7.º kyu",
            "6kyu": "6.º kyu",
            '5kyu': '5.º kyu',
            '4kyu': '4.º kyu',
            '3kyu': '3.er kyu',
            '2kyu': '2.º kyu',
            '1kyu': '1.er kyu',
            '1dan': 'Shodan',
            '2dan': '2.º dan',
            '3dan': '3.er dan',
            '4dan': '4.º dan',
            '5dan': '5.º dan',
            '6dan': '6.º dan',
            '7dan': '7.º dan',
            '8dan': '8.º dan',
            '9dan': '9.º dan',
            '10dan': '10.º dan',
            'kuroto': 'Kuroto',
            'meijin': 'Meijin',
            'chojin': 'Chojin',
            'tatsujin': 'Tatsujin',
            'gaiden': 'Gaiden'
        },
        version: {
            'katsudon': 'Katsudon',
            'sorairo': 'Sorairo',
            'momoiro': 'Momoiro',
            'kimidori': 'Kimidori',
            'murasaki': 'Murasaki',
            'white': 'White',
            'red': 'Red',
            'yellow': 'Yellow',
            'blue': 'Blue',
            'green': 'Green',
            'nijiiro_gaiden': 'Nijiiro Gaiden',
            '20': 'Nijiiro 2020',
            '21': 'Nijiiro 2021',
            '22': 'Nijiiro 2022',
            '23': 'Nijiiro 2023',
            '24': 'Nijiiro 2024',
            '25': 'Nijiiro 2025',
            '26': 'Nijiiro 2026',
            '27': 'Nijiiro 2027',
            '28': 'Nijiiro 2028',
            '29': 'Nijiiro 2029',
            '30': 'Nijiiro 2030'
        }
    },
    song: {
        difficulty: {
            easy: 'Fácil',
            normal: 'Normal',
            hard: 'Difícil',
            oni: 'Extremo (anverso)',
            ura: 'Extremo (reverso)'
        }
    },
    page: {
        index: {
            shortcut: {
                song: 'Canciones',
                doc: 'Documentos',
                diffchart: 'Tablas de dificultad',
                dani: 'Dan-i Dojo',
                gamecenter: 'Recreativos',
                rating: 'Rating'
            },
            notice: 'Avisos'
        },
        songNo: {
            alert: {
                deleted: 'Esta canción se ha eliminado.',
                krBanned: 'Esta canción no se puede jugar en Corea.',
                asiaBanned: 'Esta canción no se puede jugar en la versión asiática.'
            },
            multipleTitle: {
                translatedTitle: 'Título traducido',
                ko: 'Coreano',
                aliasKo: 'Coreano (no oficial)',
                en: 'Inglés',
                aliasEn: 'Inglés (no oficial)',
                zhCN: 'Chino',
                romaji: 'Romaji'
            },
            songData: {
                version: 'Versiones',
                artists: 'Artistas',
                addedDate: 'Fecha de incorporación'
            },
            course: {
                combos: 'Combo máximo',
                branched: 'Bifurcaciones',
                balloons: 'Globos máx.',
                roll: 'Redoble máx.',
                density: 'Densidad máx.',
                playTime: 'Duración máx.',
                hitsec: 'golpes/s',
                sec: 's',
                total: 'Total',
                count: '',
                daniList: 'Aparece en el Dan-i Dojo',
                nthSong: '.ª canción',
                noDani: 'En el Dan-i Dojo',
                fumenImage: 'Imagen de la partitura'
            },
            preview: {
                branch: 'Bifurcación',
                branches: {
                    normal: 'Normal',
                    advanced: 'Profesional',
                    master: 'Maestro'
                },
                mode: 'Modo',
                modes: {
                    normal: 'Normal',
                    fixedScroll: 'HS fijo',
                    fixedBPM: 'BPM fijo'
                },
                isAnnotationMode: 'Usar anotaciones'
            }
        },
        diffchart: {
            dfc: {
                '10 level dfc': 'Tabla de dificultad ★10 (Donderful Combo)',
                sections: {
                    'SS': "SS",
                    'iS+': "Habilidad S+",
                    'pS+': "Variable S+",
                    'iS': "Habilidad S",
                    'pS': "Variable S",
                    'iA+': 'Habilidad A+',
                    'pA+': 'Variable A+',
                    'iA': "Habilidad A",
                    'pA': "Variable A",
                    'iB': 'Habilidad B',
                    'pB': "Variable B",
                    'iC': 'Habilidad C',
                    'pC': 'Variable C',
                    'iD': 'Habilidad D',
                    'pD': 'Variable D',
                    'iE': 'Habilidad E',
                    'pE': 'Variable E',
                    'iF': 'Habilidad F'
                }
            },
            fc: {
                '10 level fc': 'Tabla de dificultad ★10 (Full Combo)',
                '9 level fc': 'Tabla de dificultad ★9 (Full Combo)',
                '8 level fc': 'Tabla de dificultad ★8 (Full Combo)',
                '7 level fc': 'Tabla de dificultad ★7 (Full Combo)',
                '6 level fc': 'Tabla de dificultad ★6 (Full Combo)',
                sections: {
                    'SS': "SS",
                    'S+': "S+",
                    'pS+': "Variable S+",
                    'S': "S",
                    'pS': "Variable S",
                    'A+': 'A+',
                    'pA+': 'Variable A+',
                    'A': "A",
                    'pA': "Variable A",
                    'B+': 'B+',
                    'B': "B",
                    'pB': "Variable B",
                    'C+': 'C+',
                    'C': 'C',
                    'pC': 'Variable C',
                    'D': 'D',
                    'E': 'E',
                    'F': 'F'
                }
            }
        },
        dani: {
            go: 'Ir'
        },
        gamecenter: {
            selector: {
                search: 'Buscar'
            },
            machineInfo: 'Información de las máquinas'
        },
        donder: {
            rating: {
                top: 'Top'
            },
            section: {
                song: 'Rating por canción',
                measure: 'Constantes',
                explanation: 'Explicación del rating'
            },
            song: ' canciones',
            otherSong: 'Otras canciones',
            link: 'Enlace',
            download: 'Descargar',
            downloadMessage: 'La imagen se descargará en breve.'
        },
        user: {
            showRating: {
                name: 'Perfil de rating público',
                showRatingNick: 'Mostrar el apodo de Donder Hiroba',
                showRatingTaikoNo: 'Mostrar el número de Taiko de Donder Hiroba',
                showRatingSongs: 'Mostrar el rating por canción',
                submit: 'Aplicar',
                success: 'Cambios aplicados.',
                error: 'Se ha producido un error.'
            }
        },
        rating: {
            ranking: {
                heading: 'Clasificación',
                ranking: 'Posición',
                tier: 'Rango',
                rating: 'Rating',
                nickname: 'Apodo'
            },
            measures: {
                heading: 'Constantes'
            },
            user: {
                nondisclosure: 'El rating por canción es privado.'
            }
        }
    }
}

const es: I18N.LangFile = {
    other: {
        title: {
            base: 'Wiki de Taiko no Tatsujin',
            '/auth/login': 'Iniciar sesión',
            '/auth/user': 'Mis datos',
            '/auth/user/donder': 'Datos de Donder',
            '/dani': 'Dan-i Dojo',
            '/diffchart/clear': 'Tabla de dificultad (Clear)',
            '/diffchart/fc': 'Tabla de dificultad (Full Combo)',
            '/gamecenter': 'Mapa de recreativos',
            '/gamecenter/report': 'Informar sobre un recreativo',
            '/measures': 'Tabla de constantes de partituras',
            '/song': 'Buscar canciones',
            '/song/[songNo]': 'Sin resultados',
            '/song/[songNo]/edit': 'Solicitar edición',
            '/song/add': 'Añadir canción'
        },
        dani: {
            dan: {
                "senpo": "Senpo",
                "jiho": "Jiho",
                "chiuken": "Chiuken",
                "fukusho": "Fukusho",
                "taisho": "Taisho",
                "beginner": "Principiante",
                "10kyu": "10.º kyu",
                "9kyu": "9.º kyu",
                "8kyu": "8.º kyu",
                "7kyu": "7.º kyu",
                "6kyu": "6.º kyu",
                '5kyu': '5.º kyu',
                '4kyu': '4.º kyu',
                '3kyu': '3.er kyu',
                '2kyu': '2.º kyu',
                '1kyu': '1.er kyu',
                '1dan': 'Shodan',
                '2dan': '2.º dan',
                '3dan': '3.er dan',
                '4dan': '4.º dan',
                '5dan': '5.º dan',
                '6dan': '6.º dan',
                '7dan': '7.º dan',
                '8dan': '8.º dan',
                '9dan': '9.º dan',
                '10dan': '10.º dan',
                'kuroto': 'Kuroto',
                'meijin': 'Meijin',
                'chojin': 'Chojin',
                'tatsujin': 'Tatsujin',
                'gaiden': 'Gaiden'
            },
            version: {
                'katsudon': 'Katsudon',
                'sorairo': 'Sorairo',
                'momoiro': 'Momoiro',
                'kimidori': 'Kimidori',
                'murasaki': 'Murasaki',
                'white': 'White',
                'red': 'Red',
                'yellow': 'Yellow',
                'blue': 'Blue',
                'green': 'Green',
                'nijiiro_gaiden': 'Nijiiro Gaiden',
                '20': 'Nijiiro 2020',
                '21': 'Nijiiro 2021',
                '22': 'Nijiiro 2022',
                '23': 'Nijiiro 2023',
                '24': 'Nijiiro 2024',
                '25': 'Nijiiro 2025',
                '26': 'Nijiiro 2026',
                '27': 'Nijiiro 2027',
                '28': 'Nijiiro 2028',
                '29': 'Nijiiro 2029',
                '30': 'Nijiiro 2030'
            }
        },
        difficulty: {
            easy: 'Fácil',
            normal: 'Normal',
            hard: 'Difícil',
            oni: 'Extremo (anverso)',
            ura: 'Extremo (reverso)'
        }
    },
    //path
    '/auth/login': {
        forLogin: ': iniciar sesión'
    },
    '/auth/user': {
        nickname: 'Apodo',
        change: 'Cambiar',
        nickRule: `El apodo solo puede contener letras del alfabeto latino, hangul (coreano), números y '-', sin espacios.`,
        nickChangeSuccess: 'Cambiado',
        provider: 'Proveedor de inicio de sesión',
        delete: 'Eliminar cuenta',
        error: {
            'New nickname is not in the correct format': 'El apodo no tiene un formato válido.',
            'Duplicated Nickname': 'Ese apodo ya está en uso.'
        }
    },
    '/auth/user/donder': {
        noDonderData: 'No hay datos de Donder Hiroba. Sube tus datos de Donder Hiroba.',
        myDon: 'Mi Don',
        lastUpdate: 'Última actualización',
        songRating: 'Rating por canción',
        songTitle: 'Título de la canción',
        accuracy: 'Precisión',
        crown: 'Corona',
        rating: 'Rating',
        hiroba: 'Hiroba',
        measureValue: 'Constante'
    },
    '/song': {
        placeholder: 'Palabras clave',
        difficulty: 'Dificultad',
        easy: 'Fácil',
        normal: 'Normal',
        hard: 'Difícil',
        oni: 'Extremo',
        omote: 'Extremo (anverso)',
        ura: 'Extremo (reverso)',
        genre: 'Género',
        genres: {
            pops: 'Pop',
            anime: 'Anime',
            kids: 'Infantil',
            vocaloid: 'Vocaloid',
            game: 'Música de videojuegos',
            namco: 'Namco Original',
            variety: 'Variedades',
            classic: 'Clásica'
        },
        languages: {
            ja: 'Japonés',
            ko: 'Coreano',
            ako: 'Coreano (no oficial)',
            en: 'Inglés',
            aen: 'Inglés (no oficial)',
            rom: 'Romaji'
        }
    },
    '/song/[songNo]': {
        noSong: 'Esta canción no existe.',
        genres: {
            pops: 'Pop',
            anime: 'Anime',
            kids: 'Infantil',
            vocaloid: 'Vocaloid',
            game: 'Música de videojuegos',
            namco: 'Namco Original',
            variety: 'Variedades',
            classic: 'Clásica'
        }
    },
    '/song/add': {
        genres: {
            pops: 'Pop',
            anime: 'Anime',
            kids: 'Infantil',
            vocaloid: 'Vocaloid',
            game: 'Música de videojuegos',
            namco: 'Namco Original',
            variety: 'Variedades',
            classic: 'Clásica'
        }
    },
    '/diffchart': {
        type: {
            clear: 'Clear',
            fc: 'Full Combo',
            dfc: 'Donderful Combo'
        },
        download: "Descargar",
        go: "Ir",
        custom: 'Personalizada'
    },
    '/diffchart/clear/[level]': {
        '10 level clear': 'Tabla de dificultad ★10 (Clear)',
        '9 level clear': 'Tabla de dificultad ★9 (Clear)',
        '8 level clear': 'Tabla de dificultad ★8 (Clear)',
        '7 level clear': 'Tabla de dificultad ★7 (Clear)',
        '6 level clear': 'Tabla de dificultad ★6 (Clear)',
        sections: {
            'SSS': 'SSS',
            'SS': 'SS',
            'S+': 'S+',
            'S': 'S',
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
            'X': 'Variable'
        },
        subname: "🔴 Varía mucho según el jugador&nbsp;&nbsp;&nbsp;🟢 Cuidado a primera vista&nbsp;&nbsp;&nbsp;🟣 El full combo es mucho más difícil que el clear"
    },
    '/gamecenter': {
        koreanGamecenterAlert: 'Este es un mapa de los recreativos de Corea que tienen Taiko no Tatsujin.',
        amenity: {
            'water': 'Fuente de agua',
            'toilet': 'Aseos',
            'park': 'Aparcamiento',
            'capture': 'Capturadora',
            'rental': 'Alquiler',
            'night': 'Toda la noche',
            'atm': 'Cajero',
            'fan': 'Ventiladores',
            'mybachi': 'Bachi propias'
        },
        date: {
            "0": "DOM",
            "1": "LUN",
            "2": "MAR",
            "3": "MIÉ",
            "4": "JUE",
            "5": "VIE",
            "6": "SÁB"
        },
        report: 'Informar',
        favorites: 'Favoritos',
        keyword: 'Palabras clave',
        region: 'Región',
        all: 'Todas',
        amenityText: 'Servicios',
        machineData: 'Máquinas',
        price: 'Precio',
        tunes: 'Canciones',
        count: 'Unidades',
        login: 'Inicia sesión',
        needed: ' para usar los favoritos.'
    },
    '/measures': {
        measureTable: 'Tabla de constantes de partituras',
        donderData: 'Datos de Donder'
    },
    '/notice': {
        type: {
            wiki: 'Wiki',
            official: 'Oficial'
        }
    },
    ...newEs
} as const;

export default es;
