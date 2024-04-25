import backButtton from '/back.svg'

export const Title = ({cambiarElementos,btnTitle}) => {
  return (
    <>
        <button className='backBtn'> <img onClick={cambiarElementos} className='backIcon' src={backButtton} alt="Back" /></button>
        <h1 className='Screentitle'>{btnTitle}</h1>
    </>
)
}
