import {useAuthStore} from "../store/useAuthStore.js"
import "../styles/Navbar.css"

const Navbar = () => {
  const {logout, authUser} = useAuthStore();

  return (
    <header className="header backdrop-blur-lg bg-base-100/80">
      <div className="headerController">
        aa
      </div>
    </header>
  )
}

export default Navbar