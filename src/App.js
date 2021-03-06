import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading';
import isProd from './isProd';

export default class App extends Component { 
    componentDidMount() {
        setTimeout(() => { 
            let element = document.getElementById("appHideBox");
            element.classList.remove("hidden");
        }, 1800);
        if(isProd() === true) {
            axios.post("https://view-notify.herokuapp.com/email", { name: "Portfolio" });
        }
    }
    boxEnter = e => {
        try {
            // let target = e.target.id;
            // let id = target.substring(target.length-1, target.length);
            // id = `boxLink${id}`;
            // document.getElementById(id).className='boxLink aniOn';  
        }
        catch {return;}
    }
    boxLeave = e => {
        try{
            // let target = e.target.id;
            // let id = target.substring(target.length-1, target.length);
            // id = `boxLink${id}`;
            // document.getElementById(id).className='boxLink aniOff';  
        }
        catch{return;}
    }
    render() {
        return (
            <div>
                <Loading />
                <div id='appHideBox' className='hidden'>
                <nav>
                    <div>
                        <img src='https://github.com/willwalker753/my-portfolio-react/blob/master/src/woven-circle-thick.png?raw=true' alt='logo'></img>
                        <p>Will Walker</p>
                    </div>
                    
                    <ul>
                        <li><div id="aboutMe"><a className="link" href="#aboutMeText">About me</a></div></li>
                        <li><div id="contactMe"><a className="link" href="#contactMeText">Contact me</a></div></li>
                    </ul>
                </nav>
                <header>
                    <div id="headerContainer">
                        <div id="headerText">
                            <h1><span className="htmlTag">&lt;h1&gt;</span>Hi, I'm Will<span className="htmlTag">&lt;/h1&gt;</span></h1>
                            <h2><span className="htmlTag">&lt;h2&gt;</span>and web development<br/>is my thing<span className="htmlTag">&lt;/h2&gt;</span></h2>
                        </div>
                    
                        <img src="https://github.com/willwalker753/portfolio2/blob/master/myPicture.png?raw=true" alt="Will"/>
                    </div>
                </header>
                <section id="icons">
                    <div id="github">
                        <a href="https://github.com/willwalker753" className="link" target="_blank" samesite="none" rel="noopener noreferrer"><i title="my github" className="fab fa-github-square"></i></a>
                    </div>
                    <div id="email">
                        <a href="mailto:willwalkerdev@gmail.com" className="link" target="_blank" rel="noopener noreferrer"><i title="my email" className="fas fa-envelope-square"></i></a>
                    </div>
                    <div id="phone">
                        <a href="tel:2542165445" className="link" rel="noopener noreferrer"><i title="my phone" className="fas fa-phone-square-alt"></i></a>
                    </div>
                    
                    <div id="linkedin">
                        <a href="https://www.linkedin.com/in/willdev/" className="link" target="_blank" rel="noopener noreferrer"><i title="my linkedin"className="fab fa-linkedin"></i></a>
                    </div>
                </section>
                <section id="projects">
                    <div id="project1">
                        <a href="https://teratext.vercel.app/" className="boxLink" id="boxLink1" target="_blank" rel="noopener noreferrer" onMouseEnter={this.boxEnter} onMouseLeave={this.boxLeave}>
                            <div id="projectText1">
                                <h3>Teratext</h3>
                                <p>
                                    Teratext is a secure chat app that enables users to connect by messaging 
                                    with texts and pictures. It has features such as a realtime texting, a profile 
                                    picture, and automatic login. Built with HTML5, CSS3, JavaScript ES6, React.js, 
                                    Node.js, Express.js, and PostgreSQL.
                                </p>
                                <a href="https://github.com/willwalker753/teratext" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://teratext.vercel.app/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                            <div id="projectImg1">
                                <img src="https://github.com/willwalker753/teratext/blob/master/public/teratext-meta.jpg?raw=true" alt="Teratext"/>
                                {/* alt image https://github.com/willwalker753/organizing-your-react-code/blob/master/portfolio-teratext.png?raw=true" alt="Teratext */}
                            </div>
                        </a>
                    </div>
                    <div id="project4">
                        <a href="https://amazon-copy-cat.vercel.app/" className="boxLink" id="boxLink4" target="_blank" rel="noopener noreferrer" onMouseEnter={this.boxEnter} onMouseLeave={this.boxLeave}>
                            <div id="projectText4">
                                <h3>Amazon Look-Alike</h3>
                                <p>
                                    This is a built from scratch look-alike of Amazon.com. It is designed to display 
                                    the desktop home page on a standard 1080p monitor. Only built using HTML5 and vanilla CSS3.
                                </p>
                                <a href="https://github.com/willwalker753/amazon-look-alike" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://amazon-copy-cat.vercel.app/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                            <div id="projectImg4">
                                <img src="https://github.com/willwalker753/amazon-look-alike/raw/master/pictures/amazon-logo-meta.jpg?raw=true" alt="amazon look-alike"/>
                            </div>
                        </a>
                    </div>
                    <div id="project2">
                        <a href="https://allrecipes-git-master.willwalker753.vercel.app/" className="boxLink" id="boxLink2" target="_blank" rel="noopener noreferrer" onMouseEnter={this.boxEnter} onMouseLeave={this.boxLeave}>
                            <div id="projectText2">
                                <h3>allRecipes</h3>
                                <p>
                                    This site enables the user to search from hundreds of thousands of recipes 
                                    and save their favorites to their account to view later. Made using HTML5, CSS3, JavaScript ES6, React.js, Node.js, Express.js, MongoDB, and is hosted on Heroku and Vercel.
                                </p>
                                <a href="https://github.com/willwalker753/allrecipes" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://allrecipes-git-master.willwalker753.vercel.app/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                            <div id="projectImg2">
                                <img src="https://github.com/willwalker753/organizing-your-react-code/blob/master/portfolio-allrecipes.jpg?raw=true" alt="allRecipes"/>
                            </div>
                        </a>
                    </div>
                    <div id="project5">
                        <a href="https://searchlin.vercel.app/" className="boxLink" id="boxLink5" target="_blank" rel="noopener noreferrer" onMouseEnter={this.boxEnter} onMouseLeave={this.boxLeave}>
                            <div id="projectText5">
                                <h3>Searchlin</h3>
                                <p>
                                    Searchlin is an advanced Google search modifier creator. It has many modifiers to choose from which help you narrow down your search. 
                                    This site was built using React.js and vanilla CSS3.
                                </p>
                                <a href="https://github.com/willwalker753/searchlin" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://searchlin.vercel.app/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                            <div id="projectImg5">
                                <img src="https://github.com/willwalker753/organizing-your-react-code/blob/master/portfolio-searchlin.jpg?raw=true" alt="searchlin"/>
                            </div>
                        </a>
                    </div>
                    <div id="project3">
                        <a href="https://willwalker753.github.io/allweather.com/" className="boxLink" id="boxLink3" target="_blank" rel="noopener noreferrer" onMouseEnter={this.boxEnter} onMouseLeave={this.boxLeave}>
                            <div id="projectText3">
                                <h3>allWeather</h3>
                                <p>
                                    This site uses multiple APIs to generate weather data for the user. It will
                                    guess the user's location by default but location can also be manually entered. Built with HTML5, CSS3, JavaScript ES6, jQuery, and is being hosted on Github Pages.
                                </p>     
                                <a href="https://github.com/willwalker753/allweather.com" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://willwalker753.github.io/allweather.com/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>      
                            </div>
                            <div id="projectImg3">
                                <img src="https://github.com/willwalker753/organizing-your-react-code/blob/master/portfolio-allweather.png?raw=true" alt="allWeather"/>
                            </div>
                        </a>
                    </div>
                    
                </section>
                <section id="aboutMeText">
                    <h3>About Me</h3>
                    <p>
                        From a young age I’ve learned about computers. I enjoy anything related to 
                        them from hardware to programming. My current job at iCompaas has given me lots of hands on experience. 
                        I've been able to further develop my hard and soft skills with a great team of developers.
                        I graduated from Thinkful’s Full Stack Web Development course. The course covered front and 
                        back end web development and provided mentorship from senior level developers.
                        Outside of computers you can find me playing pool or disc golfing.
                          
                    </p>
                </section>
                <section id="contactMeText">
                    <h3>Contact Me</h3>
                    <p>
                        Email: <a href="mailto:willwalkerdev@gmail.com" className="link">willwalkerdev@gmail.com</a>
                        <br/>Phone: <a href="tel:2542165445" className="link">254-216-5445</a>
                        <br/>Github: <a href="https://github.com/willwalker753" className="link" target="_blank" rel="noopener noreferrer">@willwalker753</a>
                        <br/>LinkedIn: <a href="https://www.linkedin.com/in/willdev/" className="link" target="_blank" rel="noopener noreferrer">@willdev</a>
                    </p>
                </section>
                <div id="bottomFade"></div>
                </div>
            </div>
        );
    }
}

