import { ScreenCategorias } from "../ScreenCategorias"
import { Button } from "../Button"
import { ScreenNuevaCategoria } from "../ScreenNuevaCategoria"

export const ScreenConfig = ({setActualScreen, cambiarElementos, setTitleScreen, }) => {
  return (
    <div className="nuevaEntrada">
        <Button
    btnColor='#990099'
    btnTitle='Categorias'
    setActualScreen={setActualScreen}
    cambiarElementos={cambiarElementos}
    location = {location}
    setTitleScreen = {setTitleScreen}
    destinoScreen={<ScreenCategorias cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
     />
         <Button
    btnColor='#990099'
    btnTitle='Nueva Categoria'
    setActualScreen={setActualScreen}
    cambiarElementos={cambiarElementos}
    location = {location}
    setTitleScreen = {setTitleScreen}
    destinoScreen={<ScreenNuevaCategoria cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
     />
    </div>
  )
}
