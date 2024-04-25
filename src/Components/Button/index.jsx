import './MenuItem.css'
export const Button = ({btnTitle, btnColor, img, setActualScreen, cambiarElementos, location, setTitleScreen, destinoScreen, clase, onClick  }) => {
  const handleClick = () => {
    cambiarElementos()
    setTitleScreen(btnTitle)
    setActualScreen(destinoScreen)
  }
  
  if(location === 'menu') {
  return (

    <button  onClick={handleClick} style={{backgroundColor: btnColor}}><img className="imgTitle" src={img}></img><span className="menuTitle">{btnTitle}</span></button>
  )
}else{
  return (

    <button className={`btnScreen ${clase}`} onClick={onClick} value={btnTitle}  style={{backgroundColor: btnColor}}><span className="menuTitle">{btnTitle}</span></button>
  )
}
}
