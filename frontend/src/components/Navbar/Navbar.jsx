import "bootstrap/dist/css/bootstrap.min.css"
import './Navbar.css'

export default function Navbar(props){

    const reproduct = (file) => {
        
    }

    //Função get do banco de dados a partir de um id passado como props ou o login passado como props
        const handleFileChange = (event) => {
            const selectedFile = event.target.files[0];
    
            // Faça algo com o arquivo selecionado, por exemplo, imprima o nome do arquivo
            if (selectedFile) {
                reproduct(selectedFile)
            }
        }

    return(
        <nav className="navbar-main navbar navbar-expand-lg ">
            <span className="material-symbols-outlined">music_note</span>
            <span>Olá, Marcantoni</span>
            <input type="file" id="fileInput" onChange={handleFileChange} />
            <button className="btn" onClick={() => document.getElementById('fileInput').click()}><span className="material-symbols-outlined">
upload
</span></button>
        </nav>
    )
}