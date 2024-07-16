import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoutes=props=>{
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
        return <Route {...props} />
    }
    return <Redirect to='/user_registeration'/>
}
export default ProtectedRoutes

