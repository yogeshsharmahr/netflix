import './register.scss'
import NetflixLogo from '../../images/netflixlogo.png'
import NetflixFirst from '../../images/tv.png'
import MobileImage from '../../images/netflixcover2.jpg'
import MacFrom from '../../images/netflixFram.png'
import Kids from '../../images/netflixcover1.png'
import Footer from '../../components/footer/Footer'
import Accordions from './Accordion'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom'






const Register = () => {
   
    return (
        <div class="mainPage">
            <div className="register">
                <div className="top">
                    <div className="wrapper">


                        <img src={NetflixLogo} alt="logo" className="logo" />
                       
                        <button className="loginButton">Sign In</button>
                    </div>
                </div>
                <div className="container">
                    <h1>Unlimited movies,Tv Shows, and more</h1>
                    <h2>Watch anywhere. Cancel anytime. </h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className="input">
                        <input type="email" placeholder="email Address" />
                        <button className="registerButton"> Get Started <ArrowForwardIosIcon className="buttonIcon"/></button>
                    </div>
                </div>

            </div>
            <div class="moduleOne">
                <div className="textContent">
                    <h1 className="headingOne">Enjoy on your TV.</h1>
                    <h2 className="headingTwo">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <div className="imgSection">

                    <video class="our-story-card-video" autoplay="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" muted="" loop="" />
                    <img src={NetflixFirst} alt="tv" className="firstImage" />
                </div>
            </div>

            <div className="modelTwo">
                <div className="moduleTwoFirstImage">
                    <img src={MobileImage} alt="" className="image12" />
                    <div class="our-story-card-animation-image">
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                        <div className="textWrapper">
                            <span className="modelTwoFirstText">Stranger Things</span>
                            <span className="modelTwoSecondText">Downloading...</span>
                        </div>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                    </div>
                </div>
                <div className="textSecondWrapper">
                    <h1 >Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>


            <div class="moduleOne">
                <div className="textContent">
                    <h1 className="headingOne">Watch everywhere.</h1>
                    <h2 className="headingTwo">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div className="imgSection">

                    <video class="our-mac-story-card-video" autoplay="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" muted="" loop="" />
                    <img src={MacFrom} alt="tv" className="secontImage" />
                </div>
            </div>

            <div className="modelTwo">
                <div className="moduleTwoFirstImage">
                    <img src={Kids} alt="" className="image12" />
                  
                </div>
                <div className="textSecondWrapper">
                    <h1 >Create profiles for children.</h1>
                    <h2>Send children on adventures with their 
                        favourite characters in a space made just
                         for them—free with your membership.</h2>
                </div>
            </div>
            <div className="askedQuestion">
              <h1>Frequently Asked Questions</h1>

                 <Accordions/>
                 <div className="scribleSection">
                     <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                     <div className="input">
                        <input type="email" placeholder="email Address" />
                        <button className="registerButtonBottom"> Get Started <ArrowForwardIosIcon className="buttonIcon"/></button>
                        

                    </div>
                 </div>
                      </div>
            <Footer/>

        </div>
    )
}

export default Register
