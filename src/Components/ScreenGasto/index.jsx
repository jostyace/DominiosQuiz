import { Button } from "../Button"
import './NuevoGasto.css'

export const ScreenGasto = () => {
  return (
    <div className="nuevaEntrada">
          <textarea className="descripcionNueva" placeholder="Descripción">resultado.texto</textarea>

          <div className="optionsClass">
          <Button
            btnTitle='Guardar'
            btnColor='#445566'
            />
      </div>
    </div>
  )
}
