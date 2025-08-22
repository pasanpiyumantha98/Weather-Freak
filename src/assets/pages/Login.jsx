import "../css/custom.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import LoginButton from "../components/LoginButton";
import logo1 from "../images/logo1.png"
import loginimg from "../images/login.png"

function Login()
{

console.log('Auth0 domain:', import.meta.env.VITE_AUTH0_DOMAIN);
// should print something like "dev-abc123.eu.auth0.com"



return(
  
<div className="body">
<div style={{ display: "flex", alignItems: "center", gap: "10px",  justifyContent: "center"}}>
  <img src={logo1} width="60px" alt="logo" className="logo" />
  <h1>Weather Freak</h1>
</div>


<br></br>

    
        <div class="container">
  <div class="row">
    <div class="col-3"><p></p></div>
    <div class="col-1"> </div>
    <div class="col-4">
    <div class="card" style={{backgroundColor:"#6c6c6cff", marginTop:"50px"}}>
  
    <div class="card-body" >

    <center><img src={loginimg} width="60px"></img>  
     <br></br>  <br></br>
     <LoginButton/></center>
    
    </div>
    </div>
    </div>

    <div class="col-1">


    </div>
    <div class="col-3"><p></p></div>
  </div>
</div>


           

 
       
      

<Footer/>
</div>
)
}

export default Login