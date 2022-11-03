import videoHomePage from '../../asset/video-dog.mp4';

const Homepage = (props) => {
    return (
        <div>
           <video autoPlay muted loop  >
                <source src = {videoHomePage} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Homepage;