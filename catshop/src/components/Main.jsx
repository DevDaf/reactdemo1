
import {Home} from "./Home"
import {Products} from "./Products"
import {Services} from "./Services"
import {About} from "./About"
import {Contact} from "./Contact"



function Main(props) {
  
    return (
      <>
      { props.activePage == 'Home' && <Home></Home>}
      { props.activePage == 'Services' && <Services></Services>}
      { props.activePage == 'Products' && <Products></Products>}
      { props.activePage == 'About' && <Contact></Contact>}
      { props.activePage == 'Contact' && <About></About>}
    </>
    )
  }
  
  export default Main
  