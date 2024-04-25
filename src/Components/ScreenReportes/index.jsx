import { Button } from "../Button"
import { ReporteInfo } from "../ReporteInfo"
import './Reportes.css'

export const ScreenReportes = () => {
  return (
<div className="container">
      <h1 className="title">Reportes</h1>
      <div className="buttonsContainer">
        <button className="button">Salida</button>
        <button className="button">Entrada</button>
        <button className="button">Mixto</button>
      </div>
      <ReporteInfo/>
    </div>
    
  )
}