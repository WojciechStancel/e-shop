import style from "./FullWidthBtn.module.css"
const FullWidthBtn = ({children, onClick}) => {
  return (
   <button className={style.button} onClick={onClick}>
    {children}
   </button>
  )
}
export default FullWidthBtn