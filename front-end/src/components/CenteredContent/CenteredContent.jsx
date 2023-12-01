import style from "./CenteredContent.module.css"
const CenteredContent = ({children}) => {
  return (
    <div className={style.wrapper}>{children}</div>
  )
}
export default CenteredContent