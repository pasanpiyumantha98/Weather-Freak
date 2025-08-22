import { useAuth0 } from "@auth0/auth0-react"
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginButton()
{

    const { loginWithRedirect, isAuthenticated} = useAuth0();

    return(
        !isAuthenticated && (
                 
            <button onClick={() =>{loginWithRedirect()}} type="button" class="btn btn-outline-warning">Login</button>
        )


    )

}

export default LoginButton