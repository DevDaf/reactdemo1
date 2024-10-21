
import {Home} from "./Home"
import { Products } from "./Products"





function Main(props) {
  
    return (
      <>
      { props.activePage == 'Home' && <Home></Home>}
      { props.activePage == 'Services' && <Products></Products>}
    </>
    )
  }
  
  export default Main
  