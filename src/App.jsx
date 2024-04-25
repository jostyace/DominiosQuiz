import './index.css'
import { useState } from "react";
import { TitleContainer } from './Components/TitleContainer';
import { ScreenContainer } from './Components/ScreenContainer';
import { Title } from './Components/Title';
import { Menu } from './Components/Menu';
import { Saldo } from './Components/Saldo';


function App() {
  
  const [componentesAlternos, setComponentesAlternos] = useState(false)
  const cambiarElementos = () => {setComponentesAlternos(!componentesAlternos)}
  const [actualScreen, setActualScreen] = useState('')
  const [titleScreen, setTitleScreen] = useState('')

  return (
    <>
    <div className="mainScreen">
        {componentesAlternos ? <TitleContainer screen={<Title cambiarElementos={cambiarElementos} btnTitle={titleScreen} setActualScreen={setActualScreen} />} clase={"men"} /> : <TitleContainer screen={<Saldo />} clase={"ele"}  />}
        {componentesAlternos ? <ScreenContainer cambiarElementos={cambiarElementos} screen={actualScreen} clase={"contentClass"}/> : <ScreenContainer cambiarElementos={cambiarElementos} screen={<Menu cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} setTitleScreen={setTitleScreen} location={'menu'} />} clase={"menuClass"}/>}
    </div>
    </>
  )
}

export default App
