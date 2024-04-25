import { useState } from "react";
import { Button } from "../Button"
import imgCorrecto from '/correcto.webp'
import imgIncorrecto from '/incorrecto.webp'

export const ScreenDyC = () => {
  const [dominioActual, setDominioActual] = useState(1)
  const [correctas, setCorrectas] = useState(0);
  const [continuar, setContinuar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);
  const [correcto, setCorrecto] = useState(null);
  const [imgResult, setImgResult] = useState(null);



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
      "reference": "José Smith—Historia 1:15–20",
      "texto": "Después de apartarme al lugar que previamente había designado, mirando a mi derredor y encontrándome solo, me arrodillé y empecé a elevar a Dios el deseo de mi corazón. Apenas lo hube hecho, cuando súbitamente se apoderó de mí una fuerza que me dominó por completo, y surtió tan asombrosa influencia en mí, que se me trabó la lengua, de modo que no pude hablar. Una densa obscuridad se formó alrededor de mí, y por un momento me pareció que estaba destinado a una destrucción repentina. Mas esforzándome con todo mi aliento por pedirle a Dios que me librara del poder de este enemigo que se había apoderado de mí, y en el momento en que estaba para hundirme en la desesperación y entregarme a la destrucción —no a una ruina imaginaria, sino al poder de un ser efectivo del mundo invisible que ejercía una fuerza tan asombrosa como yo nunca había sentido en ningún otro ser— precisamente en este momento de tan grande alarma vi una columna de luz, más brillante que el sol, directamente arriba de mi cabeza; y esta luz gradualmente descendió hasta descansar sobre mí. No bien se apareció, me sentí libre del enemigo que me había sujetado. Al reposar sobre mí la luz, vi en el aire arriba de mí a dos Personajes, cuyo fulgor y gloria no admiten descripción. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Este es mi Hijo Amado: ¡Escúchalo! Había sido mi objeto recurrir al Señor para saber cuál de todas las sectas era la verdadera, a fin de saber a cuál unirme. Por tanto, luego que me hube recobrado lo suficiente para poder hablar, pregunté a los Personajes que estaban en la luz arriba de mí, cuál de todas las sectas era la verdadera (porque hasta ese momento nunca se me había ocurrido pensar que todas estuvieran en error), y a cuál debía unirme. Se me contestó que no debía unirme a ninguna, porque todas estaban en error; y el Personaje que me habló dijo que todos sus credos eran una abominación a su vista; que todos aquellos profesores se habían pervertido; que 'con sus labios me honran, pero su corazón lejos está de mí; enseñan como doctrinas los mandamientos de los hombres, teniendo apariencia de piedad, mas negando el poder de ella'. De nuevo me mandó que no me uniera a ninguna de ellas; y muchas otras cosas me dijo que no puedo escribir en esta ocasión. Cuando otra vez volví en mí, me encontré de espaldas mirando hacia el cielo. Al retirarse la luz, me quedé sin fuerzas, pero poco después, habiéndome recobrado hasta cierto punto, volví a casa. Al apoyarme sobre la mesilla de la chimenea, mi madre me preguntó si algo me pasaba. Yo le contesté: 'Pierda cuidado, todo está bien; me siento bastante bien'. Entonces le dije: 'He sabido a satisfacción mía que el presbiterianismo no es verdadero'. Parece que desde los años más tiernos de mi vida el adversario sabía que yo estaba destinado a perturbar y molestar su reino; de lo contrario, ¿por qué habían de combinarse en mi contra los poderes de las tinieblas? ¿Cuál era el motivo de la oposición y persecución que se desató contra mí casi desde mi infancia?"
    },
    {
      "id": 2,
      "reference": "Doctrina y Convenios 1:37–38",
      "texto": "Escudriñad estos mandamientos porque son verdaderos y fidedignos, y las profecías y promesas que contienen se cumplirán todas. Lo que yo, el Señor, he dicho, yo lo he dicho, y no me disculpo; y aunque pasaren los cielos y la tierra, mi palabra no pasará, sino que toda será cumplida, sea por mi propia voz o por la voz de mis siervos, es lo mismo."
      
    },
    {
      "id": 3,
      "reference": "Doctrina y Convenios 6:36",
      "texto": "Mirad hacia mí en todo pensamiento; no dudéis; no temáis."
      
    },
    {
      "id": 4,
      "reference": "Doctrina y Convenios 8:2–3",
      "texto": "Sí, he aquí, hablaré a tu mente y a tu corazón por medio del Espíritu Santo que vendrá sobre ti y morará en tu corazón. Ahora, he aquí, este es el espíritu de revelación; he aquí, es el espíritu mediante el cual Moisés condujo a los hijos de Israel a través del mar Rojo sobre tierra seca."
      
    },
    {
      "id": 5,
      "reference": "Doctrina y Convenios 10:5",
      "texto": "Ora siempre para que salgas triunfante; sí, para que venzas a Satanás y te libres de las manos de los siervos de Satanás que apoyan su obra."
      
    },
    {
      "id": 6,
      "reference": "Doctrina y Convenios 13:1",
      "texto": "Sobre vosotros, mis consiervos, en el nombre del Mesías, confiero el Sacerdocio de Aarón, el cual tiene las llaves del ministerio de ángeles, y del evangelio de arrepentimiento, y del bautismo por inmersión para la remisión de pecados; y este sacerdocio nunca más será quitado de la tierra, hasta que los hijos de Leví de nuevo ofrezcan al Señor un sacrificio en rectitud."
      
    },
    {
      "id": 7,
      "reference": "Doctrina y Convenios 18:10–11",
      "texto": "Recordad que el valor de las almas es grande a la vista de Dios; porque he aquí, el Señor vuestro Redentor padeció la muerte en la carne; por tanto, sufrió el dolor de todos los hombres, a fin de que todo hombre pudiese arrepentirse y venir a él."
      
    },
    {
      "id": 8,
      "reference": "Doctrina y Convenios 18:15–16",
      "texto": "Y si acontece que trabajáis todos vuestros días proclamando el arrepentimiento a este pueblo y me traéis aun cuando fuere una sola alma, ¡cuán grande será vuestro gozo con ella en el reino de mi Padre! Y ahora, si vuestro gozo será grande con un alma que me hayáis traído al reino de mi Padre, ¡cuán grande no será vuestro gozo si me trajereis muchas almas!"
      
    },
    {
      "id": 9,
      "reference": "Doctrina y Convenios 19:16–19",
      "texto": "Porque he aquí, yo, Dios, he padecido estas cosas por todos, para que no padezcan, si se arrepienten; mas si no se arrepienten, tendrán que padecer así como yo; padecimiento que hizo que yo, Dios, el mayor de todos, temblara a causa del dolor y sangrara por cada poro y padeciera, tanto en el cuerpo como en el espíritu, y deseara no tener que beber la amarga copa y desmayar. Sin embargo, gloria sea al Padre, bebí, y acabé mis preparativos para con los hijos de los hombres."
      
    },
    {
      "id": 10,
      "reference": "Doctrina y Convenios 19:23",
      "texto": "Aprende de mí y escucha mis palabras; camina en la mansedumbre de mi Espíritu, y en mí tendrás paz."
      
    },
    {
      "id": 11,
      "reference": "Doctrina y Convenios 25:13",
      "texto": "Por consiguiente, eleva tu corazón y regocíjate, y adhiérete a los convenios que has hecho."
      
    },
    {
      "id": 12,
      "reference": "Doctrina y Convenios 46:33",
      "texto": "Y debéis practicar la virtud y la santidad delante de mí constantemente. Así sea. Amén."
      
    },
    {
      "id": 13,
      "reference": "Doctrina y Convenios 58:27",
      "texto": "De cierto digo que los hombres deben estar anhelosamente consagrados a una causa buena, y hacer muchas cosas de su propia voluntad y efectuar mucha justicia;"
      
    },
    {
      "id": 14,
      "reference": "Doctrina y Convenios 58:42–43",
      "texto": "He aquí, quien se ha arrepentido de sus pecados es perdonado; y yo, el Señor, no los recuerdo más. Por esto podréis saber si un hombre se arrepiente de sus pecados: He aquí, los confesará y los abandonará."

    },
    {
      "id": 15,
      "reference": "Doctrina y Convenios 64:9–11",
      "texto": "Por tanto, os digo que debéis perdonaros los unos a los otros; pues el que no perdona las ofensas de su hermano, queda condenado ante el Señor, porque en él permanece el mayor pecado. Yo, el Señor, perdonaré a quien sea mi voluntad perdonar, mas a vosotros os es requerido perdonar a todos los hombres. Y debéis decir en vuestros corazones: Juzgue Dios entre tú y yo, y te premie de acuerdo con tus hechos."
      
    },
    {
      "id": 16,
      "reference": "Doctrina y Convenios 76:22–24",
      "texto": "Y ahora, después de los muchos testimonios que se han dado de él, este es el testimonio, el último de todos, que nosotros damos de él: ¡Que vive! Porque lo vimos, sí, a la diestra de Dios; y oímos la voz testificar que él es el Unigénito del Padre; que por él, por medio de él y de él los mundos son y fueron creados, y sus habitantes son engendrados hijos e hijas para Dios."
      
    },
    {
      "id": 17,
      "reference": "Doctrina y Convenios 76:40–41",
      "texto": "Y este es el evangelio, las buenas nuevas, que la voz de los cielos nos testificó: Que vino al mundo, sí, Jesús, para ser crucificado por el mundo y para llevar los pecados del mundo, y para santificarlo y limpiarlo de toda iniquidad;"
      
    },
    {
      "id": 18,
      "reference": "Doctrina y Convenios 78:19",
      "texto": "Y el que reciba todas las cosas con gratitud será glorificado; y le serán añadidas las cosas de esta tierra, hasta cien tantos, sí, y más."
      
    },
    {
      "id": 19,
      "reference": "Doctrina y Convenios 82:10",
      "texto": "Yo, el Señor, estoy obligado cuando hacéis lo que os digo; mas cuando no hacéis lo que os digo, ninguna promesa tenéis."
      
    },
    {
      "id": 20,
      "reference": "Doctrina y Convenios 88:124",
      "texto": "Cesad de ser ociosos; cesad de ser impuros; cesad de criticaros el uno al otro; cesad de dormir más de lo necesario; acostaos temprano para que no os fatiguéis; levantaos temprano para que vuestros cuerpos y vuestras mentes sean vigorizados."
      
    },
    {
      "id": 21,
      "reference": "Doctrina y Convenios 89:18–21",
      "texto": "Y todos los santos que se acuerden de guardar y hacer estas cosas, rindiendo obediencia a los mandamientos, recibirán salud en el ombligo y médula en los huesos; y hallarán sabiduría y grandes tesoros de conocimiento, sí, tesoros escondidos; y correrán sin fatigarse, y andarán sin desmayar. Y yo, el Señor, les prometo que el ángel destructor pasará de ellos, como de los hijos de Israel, y no los matará. Amén."
      
    },
    {
      "id": 22,
      "reference": "Doctrina y Convenios 107:8",
      "texto": "El Sacerdocio de Melquisedec posee el derecho de presidir, y tiene poder y autoridad sobre todos los oficios en la iglesia en todas las edades del mundo, para administrar en las cosas espirituales."
      
    },
    {
      "id": 23,
      "reference": "Doctrina y Convenios 121:36, 41–42",
      "texto": "Que los derechos del sacerdocio están inseparablemente unidos a los poderes del cielo, y que estos no pueden ser gobernados ni manejados sino conforme a los principios de la rectitud. Ningún poder o influencia se puede ni se debe mantener en virtud del sacerdocio, sino por persuasión, por longanimidad, benignidad, mansedumbre y por amor sincero; por bondad y por conocimiento puro, lo cual engrandecerá en gran manera el alma sin hipocresía y sin malicia;"
      
    },
    {
      "id": 24,
      "reference": "Doctrina y Convenios 130:22–23",
      "texto": "El Padre tiene un cuerpo de carne y huesos, tangible como el del hombre; así también el Hijo; pero el Espíritu Santo no tiene un cuerpo de carne y huesos, sino es un personaje de Espíritu. De no ser así, el Espíritu Santo no podría morar en nosotros. El hombre puede recibir el Espíritu Santo, y este puede descender sobre él y no permanecer con él."
      
    },
    {
      "id": 25,
      "reference": "Doctrina y Convenios 131:1–4",
      "texto": "En la gloria celestial hay tres cielos o grados; y para alcanzar el más alto, el hombre tiene que entrar en este orden del sacerdocio [es decir, el nuevo y sempiterno convenio del matrimonio]; y si no lo hace, no puede alcanzarlo. Podrá entrar en el otro, pero ese es el límite de su reino; no puede tener aumento."
      
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
    if (referenciaSeleccionada === resultado.referencia) {
      setSeleccionada(referenciaSeleccionada)
      setCorrectas(correctas + 1)
      setContinuar(true)
      setOpenModal(true)
      setCorrecto('Correcto')
      setImgResult(imgCorrecto)
    } else {
      setSeleccionada(referenciaSeleccionada)
      setContinuar(true)
      setOpenModal(true)
      setCorrecto('Incorrecto')
      setImgResult(imgIncorrecto)
    }
  };


  const siguienteVersiculo = () => {
    setDominioActual(dominioActual + 1)
    setContinuar(false)
    setOpenModal(false)

  }

  const botonesReferencias = resultado.referenciasAleatorias.map(referencia => (
    <Button onClick={() => verificarSeleccion(referencia)} key={referencia} clase='opciones' btnTitle={referencia} btnColor={'#445566'} />
  ));

  return (
    <div className="nuevaEntrada">
      <label>Correctas: {correctas} de 25</label>
      <textarea className="escritura" placeholder="" value={resultado.texto} readOnly />
      <div className="optionsClass">
        {!openModal && botonesReferencias}
      </div>

      {continuar &&
        <div className="modalResult">
          <img className="imgOk" src={imgResult} alt="" />
          <h1 className="correct">{correcto}</h1>
          <p>Tu seleccion fue <strong> {seleccionada}</strong>y la respuesta correcta es <strong>{resultado.referencia}</strong></p>
          <Button btnTitle='Siguiente' btnColor='#663399' clase='btnOkClass' onClick={() => siguienteVersiculo()} />
        </div>
      }
    </div>
  );
}
