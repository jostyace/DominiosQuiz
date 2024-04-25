import './ScreenContainer.css'

export const ScreenContainer = ({screen, clase}) => {
  return (
    <div className={`mainContainer ${clase}`} > 
      {screen}
    </div>
  )
}
