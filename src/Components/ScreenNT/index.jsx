import {  useState } from "react";
import { Button } from "../Button"
import './ScreenNT.css'
import imgCorrecto from '/correcto.webp'
import imgIncorrecto from '/incorrecto.webp'

export const ScreenNT = ({setComponentesAlternos}) => {
  const [dominioActual, setDominioActual] = useState(1)
  const [correctas, setCorrectas] = useState(0);
  const [continuar, setContinuar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);
  const [correcto, setCorrecto] = useState(null);
  const [imgResult, setImgResult] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const ldm = [
    {
      "id": 1,
      "reference": "Mateo 5:14–16",
      "texto": "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder. Ni se enciende una vela y se pone debajo de un almud, sino sobre el candelero, y alumbra a todos los que están en casa. Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras y glorifiquen a vuestro Padre que está en los cielos."
    },
    {
      "id": 2,
      "reference": "Mateo 11:28–30",
      "texto": "28 Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. Llevad mi yugo sobre vosotros y aprended de mí, que soy manso y humilde de corazón, y hallaréis descanso para vuestras almas. Porque mi yugo es fácil y ligera mi carga."
    },
    {
      "id": 3,
      "reference": "Mateo 16:15–19",
      "texto": "Él les dijo: Y vosotros, ¿quién decís que soy yo? Respondió Simón Pedro y dijo: ¡Tú eres el Cristo, el Hijo del Dios viviente! Entonces, respondiendo Jesús, le dijo: Bienaventurado eres, Simón hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. Mas yo también te digo que tú eres Pedro, y sobre esta roca edificaré mi iglesia, y las puertas del infierno no prevalecerán contra ella. Y a ti te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos; y todo lo que desates en la tierra será desatado en los cielos."
    },
    {
      "id": 4,
      "reference": "Mateo 22:36–39",
      "texto": "Maestro, ¿cuál es el gran mandamiento de la ley? Y Jesús le dijo: Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante a este: Amarás a tu prójimo como a ti mismo."
    },
    {
      "id": 5,
      "reference": "Mateo 28:19–20",
      "texto": "Por tanto, id y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí, yo estoy con vosotros todos los días, hasta el fin del mundo. Amén."
    },
    {
      "id": 6,
      "reference": "Lucas 24:36–39",
      "texto": "Y mientras ellos aún hablaban de estas cosas, Jesús se puso en medio de ellos y les dijo: Paz a vosotros. Entonces ellos, espantados y atemorizados, pensaban que veían un espíritu. Mas él les dijo: ¿Por qué estáis turbados y surgen dudas en vuestros corazones? Mirad mis manos y mis pies, que yo mismo soy; palpad y ved, porque un espíritu no tiene carne ni huesos como veis que yo tengo."
    },
    {
      "id": 7,
      "reference": "Juan 3:5",
      "texto": "Respondió Jesús: De cierto, de cierto te digo que el que no naciere de agua y del Espíritu no puede entrar en el reino de Dios."
    },
    {
      "id": 8,
      "reference": "Juan 14:6",
      "texto": "Jesús le dijo: Yo soy el camino, y la verdad y la vida; nadie viene al Padre sino por mí."
    },
    {
      "id": 9,
      "reference": "Juan 14:15",
      "texto": "Si me amáis, guardad mis mandamientos."
    },
    {
      "id": 10,
      "reference": "Juan 17:3",
      "texto": "Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado."
    },
    {
      "id": 11,
      "reference": "Hechos 2:36–38",
      "texto": "Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo. Entonces al oír esto, se compungieron de corazón y dijeron a Pedro y a los otros apóstoles: Varones hermanos, ¿qué haremos? Y Pedro les dijo: Arrepentíos y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados, y recibiréis el don del Espíritu Santo."
    },
    {
      "id": 12,
      "reference": "Hechos 3:19–21",
      "texto": "Así que, arrepentíos y convertíos para que sean borrados vuestros pecados; para que vengan tiempos de refrigerio de la presencia del Señor, y él envíe a Jesucristo, que os fue antes anunciado; a quien de cierto es menester que el cielo reciba hasta los tiempos de la restauración de todas las cosas, de que habló Dios por boca de sus santos profetas que han sido desde tiempos antiguos."
    },
    {
      "id": 13,
      "reference": "1 Corintios 6:19–20",
      "texto": "¿O no sabéis que vuestro cuerpo es templo del Espíritu Santo, que está en vosotros, el que tenéis de Dios, y que no sois vuestros? Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios."
    },
    {
      "id": 14,
      "reference": "1 Corintios 15:20–22",
      "texto": "Pero ahora Cristo ha resucitado de entre los muertos; y llegó a ser primicias de los que durmieron. Porque por cuanto la muerte entró por un hombre, también por un hombre la resurrección de los muertos. Porque así como en Adán todos mueren, así también en Cristo todos serán vivificados."
    },
    {
      "id": 15,
      "reference": "1 Corintios 15:40–42",
      "texto": "Y hay cuerpos celestiales, y cuerpos terrestres; mas ciertamente una es la gloria de los celestiales, y otra la de los terrestres. Una es la gloria del sol, y otra la gloria de la luna, y otra la gloria de las estrellas, pues una estrella es diferente de otra en gloria. Así también es la resurrección de los muertos. Se siembra en corrupción, resucitará en incorrupción;"
    },
    {
      "id": 16,
      "reference": "Gálatas 5:22–23",
      "texto": "Pero el fruto del Espíritu es: amor, gozo, paz, longanimidad, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley."
    },
    {
      "id": 17,
      "reference": "Efesios 4:11–14",
      "texto": "Y él mismo constituyó a unos apóstoles; y a otros, profetas; y a otros, evangelistas; y a otros, pastores y maestros; a fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo, hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto, a la medida de la estatura de la plenitud de Cristo; para que ya no seamos niños fluctuantes, llevados por doquiera de todo viento de doctrina, por estratagema de hombres que, para engañar, emplean con astucia las artimañas del error,"
    },
    {
      "id": 18,
      "reference": "Filipenses 4:13",
      "texto": "Todo lo puedo en Cristo que me fortalece."
    },
    {
      "id": 19,
      "reference": "2 Tesalonicenses 2:1–3",
      "texto": "Pero os rogamos, hermanos, en cuanto a la venida de nuestro Señor Jesucristo, y a nuestro recogimiento con él, que no cambiéis fácilmente vuestro modo de pensar, ni os conturbéis, ni por espíritu, ni por palabra ni por carta como si fuera nuestra, en el sentido de que el día del Señor está cerca. No os engañe nadie de ninguna manera, porque no vendrá sin que antes venga la apostasía, y se manifieste el hombre de pecado, el hijo de perdición,"
    },
    {
      "id": 20,
      "reference": "2 Timoteo 3:15–17",
      "texto": "y que desde la niñez has sabido las Sagradas Escrituras, las cuales te pueden hacer sabio para la salvación por la fe que es en Cristo Jesús. Toda Escritura es inspirada por Dios y útil para enseñar, para reprender, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente instruido para toda buena obra."
    },
    {
      "id": 21,
      "reference": "Hebreos 12:9",
      "texto": "Por otra parte, tuvimos a nuestros padres terrenales que nos disciplinaban y los reverenciábamos, ¿por qué no obedeceremos mucho mejor al Padre de los espíritus, y viviremos?"
    },
    {
      "id": 22,
      "reference": "Santiago 1:5–6",
      "texto": "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, quien da a todos abundantemente y sin reproche, y le será dada. Pero pida con fe, no dudando nada, porque el que duda es semejante a la ola del mar, que es movida por el viento y echada de una parte a otra."
    },
    {
      "id": 23,
      "reference": "Santiago 2:17–18",
      "texto": "Así también la fe, si no tiene obras, es muerta en sí misma. Pero alguno dirá: Tú tienes fe, y yo tengo obras; muéstrame tu fe sin tus obras, y yo te mostraré mi fe por mis obras."
    },
    {
      "id": 24,
      "reference": "1 Pedro 4:6",
      "texto": "Porque por esto también ha sido predicado el evangelio a los muertos; para que sean juzgados en la carne según los hombres, pero vivan en el espíritu según Dios."
    },
    {
      "id": 25,
      "reference": "Apocalipsis 20:12",
      "texto": "Y vi a los muertos, grandes y pequeños, de pie delante de Dios; y los libros fueron abiertos; y otro libro fue abierto, el cual es el libro de la vida. Y fueron juzgados los muertos por las cosas que estaban escritas en los libros, según sus obras."
    }
  ]



  function obtenerReferenciasAleatorias(id) {
    const versiculo = ldm.find(v => v.id === id);
    if (!versiculo) {
      return {};
    }

    const referenciasExcluidas = ldm.filter(v => v.id !== id).map(v => v.reference);

    if (referenciasExcluidas.length < 3) {
      return {};
    }

    const referenciasAleatorias = [];
    while (referenciasAleatorias.length < 3) {
      const indiceAleatorio = Math.floor(Math.random() * referenciasExcluidas.length);
      const referenciaAleatoria = referenciasExcluidas.splice(indiceAleatorio, 1)[0];
      referenciasAleatorias.push(referenciaAleatoria);
    }

    if (referenciasAleatorias.includes(versiculo.reference)) {
      const indiceReemplazo = Math.floor(Math.random() * referenciasExcluidas.length);
      referenciasAleatorias[referenciasAleatorias.indexOf(versiculo.reference)] = referenciasExcluidas[indiceReemplazo];
    }

    referenciasAleatorias.push(versiculo.reference);

    const referenciasMezcladas = shuffleArray(referenciasAleatorias);

    const respuesta = {
      id: versiculo.id,
      texto: versiculo.texto,
      referencia: versiculo.reference,
      referenciasAleatorias: referenciasMezcladas,
    };
    return respuesta;
  }


  const resultado = obtenerReferenciasAleatorias(dominioActual);

  const verificarSeleccion = (referenciaSeleccionada) => {
    if(dominioActual >= ldm.length){
      if(correctas >= 20){
        setImgResult(imgCorrecto)
          setMensaje("Excelente")
      } else if(correctas < 20 && correctas>= 10) {
        setImgResult(imgCorrecto)
        setMensaje("Bien")
      }else if(correctas <10){
        setImgResult(imgIncorrecto)
        setMensaje("Ups! hay que practicar")
      }
      setDominioActual(24)
      setOpenModal(true)
    }
    if (referenciaSeleccionada === resultado.referencia) {
      setSeleccionada(referenciaSeleccionada)
      setCorrectas(correctas + 1)
      setContinuar(true)
      setCorrecto('Correcto')
      setImgResult(imgCorrecto)
    } else {
      setSeleccionada(referenciaSeleccionada)
      setContinuar(true)
      setCorrecto('Incorrecto')
      setImgResult(imgIncorrecto)
    }
  };


  const siguienteVersiculo = () => {
    setDominioActual(dominioActual + 1)
    setContinuar(false)
    setOpenModal(false)

  }
  const cx = () => {
    setComponentesAlternos(false)

  }

  const botonesReferencias = resultado.referenciasAleatorias.map(referencia => (
    <Button onClick={() => verificarSeleccion(referencia)} key={referencia} clase='opciones' btnTitle={referencia} btnColor={'#445566'} />
  ));

  return (
    <div className="nuevaEntrada">
      <label>Correctas: {correctas} de 25</label>
      <textarea className="escritura" placeholder="" value={resultado.texto} readOnly />
      <div className="optionsClass">
        {!continuar && botonesReferencias}
      </div>

      {continuar &&
        <div className="modalResult">
          <img className="imgOk" src={imgResult} alt="" />
          <h1 className="correct">{correcto}</h1>
          <p>Tu seleccion fue <strong> {seleccionada}</strong>y la respuesta correcta es <strong>{resultado.referencia}</strong></p>
          <Button btnTitle='Siguiente' btnColor='#663399' clase='btnOkClass' onClick={() => siguienteVersiculo()} />
        </div>
      }
      {openModal &&
        <div className="modalResult">
          <img className="imgOk" src={imgResult} alt="" />
          <h1 className="correct">{mensaje}</h1>
          <p>Respondiste el <strong> {(correctas / 25)*100} %</strong>, de forma correcta, es decir <strong>{correctas}</strong> de los 25 Dominios</p>
          <Button btnTitle='Regresar' btnColor='#663399' clase='btnOkClass' onClick={cx} />
        </div>
      }
    </div>
  );
}
