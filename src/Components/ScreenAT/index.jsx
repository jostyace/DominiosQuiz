import {  useState } from "react";
import { Button } from "../Button"
import './ScreenAT.css'
import imgCorrecto from '/correcto.svg'
import imgIncorrecto from '/incorrecto.svg'

export const ScreenAT = () => {
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
      "reference": "",
      "texto": ""
    },
    {
      "id": 9,
      "reference": "",
      "texto": ""
    },
    {
      "id": 10,
      "reference": "",
      "texto": ""
    },
    {
      "id": 11,
      "reference": "",
      "texto": ""
    },
    {
      "id": 12,
      "reference": "",
      "texto": ""
    },
    {
      "id": 13,
      "reference": "",
      "texto": ""
    },
    {
      "id": 14,
      "reference": "",
      "texto": ""
    },
    {
      "id": 15,
      "reference": "",
      "texto": ""
    },
    {
      "id": 16,
      "reference": "",
      "texto": ""
    },
    {
      "id": 17,
      "reference": "",
      "texto": ""
    },
    {
      "id": 18,
      "reference": "",
      "texto": ""
    },
    {
      "id": 29,
      "reference": "",
      "texto": ""
    },
    {
      "id": 20,
      "reference": "",
      "texto": ""
    },
    {
      "id": 21,
      "reference": "",
      "texto": ""
    },
    {
      "id": 22,
      "reference": "",
      "texto": ""
    },
    {
      "id": 23,
      "reference": "",
      "texto": ""
    },
    {
      "id": 24,
      "reference": "",
      "texto": ""
    },
    {
      "id": 25,
      "reference": "",
      "texto": ""
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
