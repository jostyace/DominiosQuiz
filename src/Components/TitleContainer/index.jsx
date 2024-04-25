import './TitleContainer.css'
export const TitleContainer = ({clase, screen}) => {
 
  return (
    <div className={`menuHeader ${clase}`}>
        <>
          {screen}
        </>
    </div>
)}
