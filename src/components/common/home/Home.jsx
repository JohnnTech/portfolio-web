// import './Home.css';
// import img from '../../../assets/props/img2.jpg';
import {BsMouse} from 'react-icons/bs';

function Home(){
    return (
        <div id='home' className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>                    
                </div>
                {/* <img src='{img}' alt='' /> */}
            </div>
            <a href="#footer" className='scroll-down'>
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a>
            <h2><span>Sobre Min</span></h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid nostrum doloribus veniam minus ex nemo, eos libero commodi, earum assumenda nulla! Quasi placeat amet dolorem tempore architecto blanditiis mollitia.
            </p>
        </div>
    );
}

const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
})

export default Home;