import { redirect } from "react-router-dom"
import { ENDPOINT_MAPPING, BACK_END_URL } from "../constants/api"

const mainPageLoader = ({params}) => {

    const backendPath = ENDPOINT_MAPPING[params.gender]
    if (backendPath){
        return fetch(`${BACK_END_URL}/${backendPath}`)
    } else {
        return redirect('/kobieta')
    }
}
export default mainPageLoader