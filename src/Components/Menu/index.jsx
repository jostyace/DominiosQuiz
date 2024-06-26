import { ScreenDyC } from "../ScreenDyC"
import { Button } from "../Button"
import { ScreenNT } from "../ScreenNT"
import { ScreenAT } from "../ScreenAT"
import './MainMenu.css'
import { ScreenLDM } from "../ScreenLDM"

export const Menu = ({cambiarElementos,setActualScreen, location, setTitleScreen, setComponentesAlternos }) => {
  return (
      <div className="selector"> 
        <Button
          btnTitle='Libro de Mormón'
          btnColor='var(--celeste)'
          img='/ldm.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenLDM cambiarElementos={cambiarElementos} setComponentesAlternos={setComponentesAlternos} setActualScreen={setActualScreen} />}
        />
        <Button
          btnTitle='Antiguo Testamento'
          btnColor='var(--verde)'
          img='/at.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenAT cambiarElementos={cambiarElementos} setComponentesAlternos={setComponentesAlternos}  setActualScreen={setActualScreen} />}
        />
        <Button
          btnTitle='Nuevo Testamemto'
          btnColor='var(--rojo)'
          img='/nt.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenNT cambiarElementos={cambiarElementos}  setComponentesAlternos={setComponentesAlternos} setActualScreen={setActualScreen} />}
        />
        <Button
          btnTitle='Doctrina y Convenios'
          btnColor='var(--amarillo)'
          img='/dyc.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenDyC cambiarElementos={cambiarElementos} setComponentesAlternos={setComponentesAlternos} setActualScreen={setActualScreen} />}
        />
      </div>
  )
}
