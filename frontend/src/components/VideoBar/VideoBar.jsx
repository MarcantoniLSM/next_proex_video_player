import './VideoBar.css'

export default function VideoBar(props){
    return(
        <nav className="videoBar navbar navbar-expand-lg ">
            <span className="material-symbols-outlined">album</span>
            <span>Música Tocando</span>
            <button className='btn'><span className="material-symbols-outlined">play_arrow</span></button>
            <button className='btn'><span className="material-symbols-outlined">volume_down</span></button>
            <button className='btn'><span className='material-symbols-outlined'>volume_up</span></button>
        </nav>
    )
}