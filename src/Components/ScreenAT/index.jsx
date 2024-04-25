import {  useState } from "react";
import { Button } from "../Button"
import './ScreenAT.css'
import imgCorrecto from '/correcto.webp'
import imgIncorrecto from '/incorrecto.webp'

export const ScreenAT = ({setComponentesAlternos}) => {
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
      "reference": "Moisés 1:39",
      "texto": "Porque, he aquí, esta es mi obra y mi gloria: Llevar a cabo la inmortalidad y la vida eterna del hombre."
          },
    {
      "id": 2,
      "reference": "Moisés 7:18",
      "texto": "Y el Señor llamó Sion a su pueblo, porque eran uno en corazón y voluntad, y vivían en rectitud; y no había pobres entre ellos."    },
    {
      "id": 3,
      "reference": "Abraham 3:22–23",
      "texto": "Y el Señor me había mostrado a mí, Abraham, las inteligencias que fueron organizadas antes que existiera el mundo; y entre todas estas había muchas de las nobles y grandes; y vio Dios que estas almas eran buenas, y estaba en medio de ellas, y dijo: A estos haré mis gobernantes; pues estaba entre aquellos que eran espíritus, y vio que eran buenos; y me dijo: Abraham, tú eres uno de ellos; fuiste escogido antes de nacer."    },
    {
      "id": 4,
      "reference": "Génesis 1:26–27",
      "texto": "Y dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y tenga dominio sobre los peces del mar, y sobre las aves de los cielos, y sobre las bestias, y sobre toda la tierra y sobre todo animal que se arrastra sobre la tierra. Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó."    },
    {
      "id": 5,
      "reference": "Génesis 2:24",
      "texto": "Por tanto, dejará el hombre a su padre y a su madre, y se allegará a su mujer, y serán una sola carne."    },
    {
      "id": 6,
      "reference": "Génesis 39:9",
      "texto": "No hay otro mayor que yo en esta casa, y ninguna cosa me ha reservado sino a ti, por cuanto tú eres su esposa; ¿cómo, pues, haría yo este gran mal y pecaría contra Dios?"
    },
    {
      "id": 7,
      "reference": "Éxodo 19:5–6",
      "texto": "Ahora pues, si dais oído a mi voz y guardáis mi convenio, vosotros seréis mi especial tesoro sobre todos los pueblos, porque mía es toda la tierra. Y vosotros me seréis un reino de sacerdotes y un pueblo santo. Estas son las palabras que dirás a los hijos de Israel."    },
    {
      "id": 8,
      "reference": "Éxodo 20:3–17",
      "texto": "No tendrás dioses ajenos delante de mí. No te harás imagen, ni ninguna semejanza de cosa alguna que esté arriba en el cielo, ni abajo en la tierra, ni en las aguas debajo de la tierra. No te inclinarás a ellas, ni las honrarás, porque yo soy Jehová tu Dios, fuerte, celoso, que visito la maldad de los padres sobre los hijos hasta la tercera y la cuarta generación de los que me aborrecen, y que hago misericordia a millares, a los que me aman y guardan mis mandamientos. No tomarás el nombre de Jehová tu Dios en vano, porque no dará por inocente Jehová al que tomare su nombre en vano. Acuérdate del día del reposo para santificarlo. Seis días trabajarás y harás toda tu obra, mas el séptimo día es reposo para Jehová tu Dios; no harás en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni el extranjero que está dentro de tus puertas. Porque en seis días hizo Jehová los cielos y la tierra, el mar y todas las cosas que en ellos hay, y reposó en el séptimo día; por tanto, Jehová bendijo el día de reposo y lo santificó. Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que Jehová tu Dios te da. No matarás. No cometerás adulterio. No hurtarás. No dirás contra tu prójimo falso testimonio. No codiciarás la casa de tu prójimo; no codiciarás la esposa de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo."    },
    {
      "id": 9,
      "reference": "Josué 24:15",
      "texto": "Y si mal os parece servir a Jehová, escogeos hoy a quién sirváis; si a los dioses a quienes sirvieron vuestros padres, cuando estuvieron al otro lado del río, o a los dioses de los amorreos en cuya tierra habitáis; pero yo y mi casa serviremos a Jehová."    },
    {
      "id": 10,
      "reference": "1 Samuel 16:7",
      "texto": "Y Jehová respondió a Samuel: No mires a su parecer ni a lo grande de su estatura, porque yo lo desecho; porque Jehová no mira lo que el hombre mira, pues el hombre mira lo que está delante de sus ojos, pero Jehová mira el corazón."
          },
    {
      "id": 11,
      "reference": "Salmo 24:3–4",
      "texto": "¿Quién subirá al monte de Jehová? ¿Y quién estará en su lugar santo? El limpio de manos y puro de corazón, el que no ha elevado su alma a la vanidad ni jurado con engaño."
    },
    {
      "id": 12,
      "reference": "Salmo 119:105",
      "texto": "Lámpara es a mis pies tu palabra, y luz a mi camino."
    },
    {
      "id": 13,
      "reference": "Salmo 127:3",
      "texto": "He aquí, herencia de Jehová son los hijos; cosa de estima el fruto del vientre."
    },
    {
      "id": 14,
      "reference": "Proverbios 3:5–6",
      "texto": "Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas."
      
    },
    {
      "id": 15,
      "reference": "Isaías 1:18",
      "texto": "Venid ahora, dice Jehová, y razonemos juntos: aunque vuestros pecados sean como la grana, como la nieve serán emblanquecidos; aunque sean rojos como el carmesí, vendrán a ser como blanca lana."
      
    },
    {
      "id": 16,
      "reference": "Isaías 5:20",
      "texto": "¡Ay de los que a lo malo llaman bueno, y a lo bueno, malo; que hacen de la luz tinieblas y de las tinieblas luz; que ponen lo amargo por dulce y lo dulce por amargo!"
      
    },
    {
      "id": 17,
      "reference": "Isaías 29:13–14",
      "texto": "Dice, pues, el Señor: Porque este pueblo se me acerca con su boca y con sus labios me honra, pero ha alejado su corazón de mí, y su temor de mí ha sido enseñado por mandamiento de hombres; por tanto, he aquí que nuevamente haré una obra maravillosa entre este pueblo, una obra maravillosa y un prodigio; porque perecerá la sabiduría de sus sabios, y se desvanecerá la prudencia de sus prudentes."
      
    },
    {
      "id": 18,
      "reference": "Isaías 53:3–5",
      "texto": "Despreciado y desechado entre los hombres, varón de dolores y experimentado en quebranto; y como que escondimos de él el rostro, fue menospreciado y no lo estimamos. Ciertamente llevó él nuestras enfermedades y sufrió nuestros dolores, y nosotros le tuvimos por azotado, herido por Dios y afligido. Mas él herido fue por nuestras transgresiones, molido por nuestras iniquidades; el castigo de nuestra paz fue sobre él, y por sus heridas fuimos nosotros sanados."
      
    },
    {
      "id": 19,
      "reference": "Isaías 58:6–7",
      "texto": "¿No es más bien el ayuno que yo escogí: desatar las ligaduras de la maldad, soltar las cargas de opresión, y dejar libres a los quebrantados y romper todo yugo? ¿No consiste en que compartas tu pan con el hambriento y a los pobres errantes alojes en tu casa; en que cuando veas al desnudo, lo cubras y no te escondas del que es tu propia carne?"
      
    },
    {
      "id": 20,
      "reference": "Isaías 58:13–14",
      "texto": "Si retraes del día de reposo tu pie, de hacer tu voluntad en mi día santo, y lo llamas delicia, santo, glorioso de Jehová, y lo veneras, no andando en tus propios caminos, ni buscando tu propia voluntad ni hablando tus propias palabras, entonces te deleitarás en Jehová; y yo te haré cabalgar sobre las alturas de la tierra y te daré a comer la heredad de Jacob, tu padre, porque la boca de Jehová lo ha hablado."
      
    },
    {
      "id": 21,
      "reference": "Jeremías 1:4–5",
      "texto": "Vino, pues, la palabra de Jehová a mí, diciendo: Antes que te formase en el vientre, te conocí; y antes que nacieses, te santifiqué; te di por profeta a las naciones."
      
    },
    {
      "id": 22,
      "reference": "Ezequiel 37:15–17",
      "texto": "Y vino a mí la palabra de Jehová, diciendo: Y tú, hijo de hombre, toma ahora un palo y escribe en él: Para Judá, y para los hijos de Israel, sus compañeros. Toma después otro palo y escribe en él: Para José, palo de Efraín, y para toda la casa de Israel, sus compañeros. Júntalos luego el uno con el otro, para que sean uno solo, y serán uno solo en tu mano."
      
    },
    {
      "id": 23,
      "reference": "Amós 3:7",
      "texto": "Porque no hará nada Jehová el Señor sin que revele su secreto a sus siervos los profetas."
      
    },
    {
      "id": 24,
      "reference": "Malaquías 3:8–10",
      "texto": "¿Robará el hombre a Dios? Pues vosotros me habéis robado. Y dijisteis: ¿En qué te hemos robado? En vuestros diezmos y ofrendas. Malditos sois con maldición, porque vosotros, la nación toda, me habéis robado. Traed todos los diezmos al alfolí, y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos y derramaré sobre vosotros bendición hasta que sobreabunde."
      
    },
    {
      "id": 25,
      "reference": "Malaquías 4:5–6",
      "texto": "He aquí, yo os envío a Elías el Profeta antes que venga el día de Jehová, grande y terrible. Él hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, no sea que yo venga y hiera la tierra con maldición."
      
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
