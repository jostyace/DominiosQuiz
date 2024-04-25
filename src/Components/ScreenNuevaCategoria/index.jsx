import { Button } from "../Button"

export const ScreenNuevaCategoria = () => {
  return (
    <div className="nuevaEntrada">
    <input type="number" className="tituloNueva" placeholder="Nueva Categoria"/>
          <textarea className="descripcionNueva" placeholder="Descripción"></textarea>

          <div className="optionsClass">
          <Button
            btnTitle='Guardar'
            btnColor='#445566'
            />
      </div>
    </div>  )
}
