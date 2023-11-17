import "bootstrap/dist/css/bootstrap.min.css"
import './Navbar.css'

export default function Navbar(props){

    //Função get do banco de dados a partir de um id passado como props ou o login passado como props

    return(
        <nav className="navbar-main navbar navbar-expand-lg ">
            <span class="material-symbols-outlined">music_note</span>
            <span>Olá, Marcantoni</span>
        </nav>
    )
}