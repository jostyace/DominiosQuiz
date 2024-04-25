import './index.css'
import { useState } from "react";
import { TitleContainer } from './Components/TitleContainer';
import { ScreenContainer } from './Components/ScreenContainer';
import { Title } from './Components/Title';
import { Menu } from './Components/Menu';
import { TitleApp } from './Components/TitleApp';


function App() {
  
  const [componentesAlternos, setComponentesAlternos] = useState(false)
  const cambiarElementos = () => {setComponentesAlternos(!componentesAlternos)}
  const [actualScreen, setActualScreen] = useState('')
  const [titleScreen, setTitleScreen] = useState('')

  return (
    <>
    <div className="mainScreen">
        {componentesAlternos ? <TitleContainer screen={<Title cambiarElementos={cambiarElementos} btnTitle={titleScreen} setActualScreen={setActualScreen} />} clase={"men"} /> : <TitleContainer screen={<TitleApp />} clase={"ele"}  />}
        {componentesAlternos ? <ScreenContainer cambiarElementos={cambiarElementos} screen={actualScreen} clase={"contentClass"}/> : <ScreenContainer cambiarElementos={cambiarElementos} screen={<Menu cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} setComponentesAlternos={setComponentesAlternos} setTitleScreen={setTitleScreen} location={'menu'} />} clase={"menuClass"}/>}
    </div>
    </>
  )
}

export default App
