import { useAuth0 } from "@auth0/auth0-react"
import logout1 from "../images/logout.png"

function LogoutButton()
{

    const { logout, isAuthenticated} = useAuth0();

    if(!isAuthenticated)
    {
        return null;
    }

    return(
      
         <img src={logout1} alt="Logout" onClick={logout} style={{ cursor: "pointer" }} width="30px" />    

        )


    

}

export default LogoutButton