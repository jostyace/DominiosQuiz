import {  useState } from "react";
import './NuevaEntrada.css'
import { Button } from "../Button"
import imgCorrecto from '/correcto.svg'
import imgIncorrecto from '/incorrecto.svg'

export const ScreenLDM = () => {
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
      "reference": "1 Nefi 3:7",
      "texto": "Y sucedió que yo, Nefi, dije a mi padre: Iré y haré lo que el Señor ha mandado, porque sé que él nunca da mandamientos a los hijos de los hombres sin prepararles una vía para que cumplan lo que les ha mandado."
    },
    {
      "id": 2,
      "reference": "2 Nefi 2:25",
      "texto": "Adán cayó para que los hombres existiesen; y existen los hombres para que tengan gozo."
    },
    {
      "id": 3,
      "reference": "2 Nefi 2:27",
      "texto": "Así pues, los hombres son libres según la carne; y les son dadas todas las cosas que para ellos son propias. Y son libres para escoger la libertad y la vida eterna, por medio del gran Mediador de todos los hombres, o escoger la cautividad y la muerte, según la cautividad y el poder del diablo; pues él busca que todos los hombres sean miserables como él."
    },
    {
      "id": 4,
      "reference": "2 Nefi 9:28–29",
      "texto": "¡Oh ese sutil plan del maligno! ¡Oh las vanidades, y las flaquezas, y las necedades de los hombres! Cuando son instruidos se creen sabios, y no escuchan el consejo de Dios, porque lo menosprecian, suponiendo que saben por sí mismos; por tanto, su sabiduría es locura, y de nada les sirve; y perecerán. Pero bueno es ser instruido, si hacen caso de los consejos de Dios."
    },
    {
      "id": 5,
      "reference": "2 Nefi 25:23, 26",
      "texto": "Porque nosotros trabajamos diligentemente para escribir, a fin de persuadir a nuestros hijos, así como a nuestros hermanos, a creer en Cristo y a reconciliarse con Dios; pues sabemos que es por la gracia por la que nos salvamos, después de hacer cuanto podamos; Y hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo, profetizamos de Cristo y escribimos según nuestras profecías, para que nuestros hijos sepan a qué fuente han de acudir para la remisión de sus pecados."
    },
    {
      "id": 6,
      "reference": "2 Nefi 28:7–9",
      "texto": "Sí, y habrá muchos que dirán: Comed, bebed y divertíos, porque mañana moriremos; y nos irá bien. Y también habrá muchos que dirán: Comed, bebed y divertíos; no obstante, temed a Dios, pues él justificará la comisión de unos cuantos pecados; sí, mentid un poco, aprovechaos de alguno por causa de sus palabras, tended trampa a vuestro prójimo; en esto no hay mal; y haced todas estas cosas, porque mañana moriremos; y si es que somos culpables, Dios nos dará algunos azotes, y al fin nos salvaremos en el reino de Dios. Sí, y habrá muchos que de esta manera enseñarán falsas, vanas e insensatas doctrinas; y se engreirán en sus corazones, y tratarán afanosamente de ocultar sus designios del Señor, y sus obras se harán en las tinieblas."
    },
    {
      "id": 7,
      "reference": "2 Nefi 31:19–20",
      "texto": "Y ahora bien, amados hermanos míos, después de haber entrado en esta estrecha y angosta senda, quisiera preguntar si ya quedó hecho todo. He aquí, os digo que no; porque no habéis llegado hasta aquí sino por la palabra de Cristo, con fe inquebrantable en él, confiando íntegramente en los méritos de aquel que es poderoso para salvar.Por tanto, debéis seguir adelante con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor por Dios y por todos los hombres. Por tanto, si marcháis adelante, deleitándoos en la palabra de Cristo, y perseveráis hasta el fin, he aquí, así dice el Padre: Tendréis la vida eterna."
    },
    {
      "id": 8,
      "reference": "2 Nefi 32:3",
      "texto": "Los ángeles hablan por el poder del Espíritu Santo; por lo que declaran las palabras de Cristo. Por tanto, os dije: Deleitaos en las palabras de Cristo; porque he aquí, las palabras de Cristo os dirán todas las cosas que debéis hacer."
    },
    {
      "id": 9,
      "reference": "2 Nefi 32:8–9",
      "texto": "Y ahora bien, amados hermanos míos, percibo que aún estáis meditando en vuestros corazones; y me duele tener que hablaros concerniente a esto. Porque si escuchaseis al Espíritu que enseña al hombre a orar, sabríais que os es menester orar; porque el espíritu malo no enseña al hombre a orar, sino le enseña que no debe orar. Mas he aquí, os digo que debéis orar siempre, y no desmayar; que nada debéis hacer ante el Señor, sin que primero oréis al Padre en el nombre de Cristo, para que él os consagre vuestra acción, a fin de que vuestra obra sea para el beneficio de vuestras almas."
    },
    {
      "id": 10,
      "reference": "Mosíah 2:17",
      "texto": "Y he aquí, os digo estas cosas para que aprendáis sabiduría; para que sepáis que cuando os halláis al servicio de vuestros semejantes, solo estáis al servicio de vuestro Dios."
    },
    {
      "id": 11,
      "reference": "Mosíah 3:19",
      "texto": "Porque el hombre natural es enemigo de Dios, y lo ha sido desde la caída de Adán, y lo será para siempre jamás, a menos que se someta al influjo del Santo Espíritu, y se despoje del hombre natural, y se haga santo por la expiación de Cristo el Señor, y se vuelva como un niño: sumiso, manso, humilde, paciente, lleno de amor y dispuesto a someterse a cuanto el Señor juzgue conveniente infligir sobre él, tal como un niño se somete a su padre."
    },
    {
      "id": 12,
      "reference": "Mosíah 4:30",
      "texto": "Pero esto puedo deciros, que si no os cuidáis a vosotros mismos, y vuestros pensamientos, y vuestras palabras y vuestras obras, y si no observáis los mandamientos de Dios ni perseveráis en la fe de lo que habéis oído concerniente a la venida de nuestro Señor, aun hasta el fin de vuestras vidas, debéis perecer. Y ahora bien, ¡oh hombre!, recuerda, y no perezcas."
    },
    {
      "id": 13,
      "reference": "Alma 7:11–13",
      "texto": "Y él saldrá, sufriendo dolores, aflicciones y tentaciones de todas clases; y esto para que se cumpla la palabra que dice: Tomará sobre sí los dolores y las enfermedades de su pueblo. Y tomará sobre sí la muerte, para soltar las ligaduras de la muerte que sujetan a su pueblo; y sus debilidades tomará él sobre sí, para que sus entrañas sean llenas de misericordia, según la carne, a fin de que según la carne sepa cómo socorrer a los de su pueblo, de acuerdo con las debilidades de ellos. Ahora bien, el Espíritu sabe todas las cosas; sin embargo, el Hijo de Dios padece según la carne, a fin de tomar sobre sí los pecados de su pueblo, para borrar sus transgresiones según el poder de su liberación; y he aquí, este es el testimonio que hay en mí."
    },
    {
      "id": 14,
      "reference": "Alma 32:21",
      "texto": "Y ahora bien, como decía concerniente a la fe: La fe no es tener un conocimiento perfecto de las cosas; de modo que si tenéis fe, tenéis esperanza en cosas que no se ven, y que son verdaderas."
    },
    {
      "id": 15,
      "reference": "Alma 37:35",
      "texto": "¡Oh recuerda, hijo mío, y aprende sabiduría en tu juventud; sí, aprende en tu juventud a guardar los mandamientos de Dios!"
    },
    {
      "id": 16,
      "reference": "Alma 39:9",
      "texto": "Hijo mío, quisiera que te arrepintieses y abandonases tus pecados, y no te dejases llevar más por las concupiscencias de tus ojos, sino que te refrenaras de todas estas cosas; porque a menos que hagas esto, de ningún modo podrás heredar el reino de Dios. ¡Oh recuerda, y comprométete, y abstente de estas cosas!"
    },
    {
      "id": 17,
      "reference": "Alma 41:10",
      "texto": "No vayas a suponer, porque se ha hablado concerniente a la restauración, que serás restaurado del pecado a la felicidad. He aquí, te digo que la maldad nunca fue felicidad."
    },
    {
      "id": 18,
      "reference": "Helamán 5:12",
      "texto": "Y ahora bien, recordad, hijos míos, recordad que es sobre la roca de nuestro Redentor, el cual es Cristo, el Hijo de Dios, donde debéis establecer vuestro fundamento, para que cuando el diablo lance sus impetuosos vientos, sí, sus dardos en el torbellino, sí, cuando todo su granizo y furiosa tormenta os azoten, esto no tenga poder para arrastraros al abismo de miseria y angustia sin fin, a causa de la roca sobre la cual estáis edificados, que es un fundamento seguro, un fundamento sobre el cual, si los hombres edifican, no caerán."
    },
    {
      "id": 19,
      "reference": "3 Nefi 12:48",
      "texto": "Por tanto, quisiera que fueseis perfectos así como yo, o como vuestro Padre que está en los cielos es perfecto."
    },
    {
      "id": 20,
      "reference": "3 Nefi 18:15, 20–21",
      "texto": "De cierto, de cierto os digo que debéis velar y orar siempre, no sea que el diablo os tiente, y seáis llevados cautivos por él. y cualquier cosa que pidáis al Padre en mi nombre, si es justa, creyendo que recibiréis, he aquí, os será concedida. Orad al Padre en vuestras familias, siempre en mi nombre, para que sean bendecidos vuestras esposas y vuestros hijos."
    },
    {
      "id": 21,
      "reference": "Éter 12:6",
      "texto": "Y ahora yo, Moroni, quisiera hablar algo concerniente a estas cosas. Quisiera mostrar al mundo que la fe es las cosas que se esperan y no se ven; por tanto, no contendáis porque no veis, porque no recibís ningún testimonio sino hasta después de la prueba de vuestra fe."
    },
    {
      "id": 22,
      "reference": "Éter 12:27",
      "texto": "y si los hombres vienen a mí, les mostraré su debilidad. Doy a los hombres debilidad para que sean humildes; y basta mi gracia a todos los hombres que se humillan ante mí; porque si se humillan ante mí, y tienen fe en mí, entonces haré que las cosas débiles sean fuertes para ellos."
    },
    {
      "id": 23,
      "reference": "Moroni 7:41",
      "texto": "Y, ¿qué es lo que habéis de esperar? He aquí, os digo que debéis tener esperanza, por medio de la expiación de Cristo y el poder de su resurrección, en que seréis levantados a vida eterna, y esto por causa de vuestra fe en él, de acuerdo con la promesa."
    },
    {
      "id": 24,
      "reference": "Moroni 7:45, 47–48",
      "texto": "Y la caridad es sufrida y es benigna, y no tiene envidia, ni se envanece, no busca lo suyo, no se irrita fácilmente, no piensa el mal, no se regocija en la iniquidad, sino se regocija en la verdad; todo lo sufre, todo lo cree, todo lo espera, todo lo soporta. pero la caridad es el amor puro de Cristo, y permanece para siempre; y a quien la posea en el postrer día, le irá bien. Por consiguiente, amados hermanos míos, pedid al Padre con toda la energía de vuestros corazones, que seáis llenos de este amor que él ha otorgado a todos los que son discípulos verdaderos de su Hijo Jesucristo; para que lleguéis a ser hijos de Dios; para que cuando él aparezca, seamos semejantes a él, porque lo veremos tal como es; para que tengamos esta esperanza; para que seamos purificados así como él es puro. Amén."
    },
    {
      "id": 25,
      "reference": "Moroni 10:4–5",
      "texto": "Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo; y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas."
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
      setCorrectas(correctas+1)
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

  
  const siguienteVersiculo = ()=>{
    setDominioActual(dominioActual+1)
    setContinuar(false)
    setOpenModal(false)
    
  }

  const botonesReferencias = resultado.referenciasAleatorias.map(referencia => (
    <Button onClick={() => verificarSeleccion(referencia)} key={referencia} clase='opciones' btnTitle={referencia} btnColor={'#445566'} />
  ));

  return (
    <div className="nuevaEntrada">
      <label>Correctas: {correctas} de 25</label>
      <textarea className="escritura" placeholder="" value={resultado.texto} readOnly/>
      <div className="optionsClass">
      {!openModal && botonesReferencias}
      </div>
      
        {continuar && 
          <div className="modalResult">
          <img className="imgOk" src={imgResult} alt="" />
            <h1 className="correct">{correcto}</h1>
            <p>Tu seleccion fue <strong> {seleccionada}</strong>y la respuesta correcta es <strong>{resultado.referencia}</strong></p>
            <Button btnTitle='Siguiente' btnColor='#663399' clase='btnOkClass' onClick={()=> siguienteVersiculo()} />
          </div>
        }
    </div>
  );
}