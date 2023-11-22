import "./Spotify.css"

export default function Spotify(props){
   const playlistId = '0gVDfr3hb4XNY8R7eAV7R7'
    return(
        <div className="spotify">
            <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/0gVDfr3hb4XNY8R7eAV7R7?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: '360px' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            />
        </div>
    )
}