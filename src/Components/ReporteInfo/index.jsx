export const ReporteInfo = () => {
  return (
    <>
    <h2 className="subtitle">Rango de fecha</h2>
    <div className="dateContainer">
      <label className="label">Fecha inicial:</label>
      <input type="date" className="input" />
      <label className="label">Fecha que termina:</label>
      <input type="date" className="input" />
    </div>
    <div className="categoryContainer">
      <label className="label">Categoría:</label>
      <select className="select">
        <option value="categoria1">Categoría 1</option>
        <option value="categoria2">Categoría 2</option>
        <option value="categoria3">Categoría 3</option>
      </select>
    </div>
    </>
)
}
