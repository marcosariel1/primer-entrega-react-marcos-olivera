import CartWidget from "./CartWidget";
import"./NavBar.css"

export default function NavBar() {
  return <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-vector-hand-drawn-cartoon-cake-png-image_4574930.jpg" className="sizeLogo" alt="logo" />
      <div class="container-fluid">

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            <a class="nav-link" href="#">Nuestras delicias</a>
            <a class="nav-link" href="#">Contacto</a>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>


  </>;


}