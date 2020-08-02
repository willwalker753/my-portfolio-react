import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
export default class App extends Component { 
    componentDidMount() {
        setTimeout(() => { 
            let element = document.getElementById("appHideBox");
            element.classList.remove("hidden");
        }, 2000);   
    }
    render() {
        return (
            <div>
                <Loading />
                <div id='appHideBox' className='hidden'>
                <nav>
                    <ul>
                        <li><div id="aboutMe"><a className="link" href="#aboutMeText">About me</a></div></li>
                        <li><div id="contactMe"><a className="link" href="#contactMeText">Contact me</a></div></li>
                    </ul>
                </nav>
                <header>
                    <div id="headerContainer">
                        <div id="headerText"><h1>Hi, I'm Will</h1><h2>and fullstack<br/>development<br/>is my thing</h2></div>
                    
                        <img src="https://github.com/willwalker753/portfolio2/blob/master/myPicture.png?raw=true" alt="Will"/>
                    </div>
                </header>
                <section id="icons">
                    <div id="github">
                        <a href="https://github.com/willwalker753" className="link" target="_blank" samesite="none" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                    </div>
                    <div id="email">
                        <a href="mailto:willwalker@email.com" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square"></i></a>
                    </div>
                    <div id="linkedin">
                        <a href="https://www.linkedin.com/in/willdev/" className="link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </section>
                <section id="projects">
                    <div id="project1">
                        <a href="https://allrecipes-git-master.willwalker753.vercel.app/" className="boxLink" target="_blank" rel="noopener noreferrer">
                            <div id="projectText1">
                                <h3>allRecipes</h3>
                                <p>This site enables the user to search from hundreds of thousands of recipes 
                                    and save their favorites to their account to view later.</p>
                                <a href="https://github.com/willwalker753/allrecipes" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://allrecipes-git-master.willwalker753.vercel.app/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                            <div id="projectImg1">
                                <img src="https://i.gyazo.com/5b6fc214c1154b9044de5c4da27a4254.jpg" alt="allRecipes site"/>
                            </div>
                        </a>
                    </div>
                    <div id="project2">
                        <a href="https://willwalker753.github.io/allweather.com/" className="boxLink" target="_blank" rel="noopener noreferrer">
                            <div id="projectText2">
                                <h3>allWeather</h3>
                                <p>This site uses multiple APIs to generate weather data for the user. It will
                                    guess the user's location by default but location can also be manually entered.</p>     
                                <a href="https://github.com/willwalker753/allweather.com" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://willwalker753.github.io/allweather.com/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>      
                            </div>
                            <div id="projectImg2">
                                <img src="https://i.gyazo.com/26ac4f32b315476ebb233fe12043c8d6.png" alt="allWeather site"/>
                            </div>
                        </a>
                    </div>
                    <div id="project3">
                        <a href="https://willwalker753.github.io/allweather.com/" className="boxLink" target="_blank" rel="noopener noreferrer">
                            <div id="projectText3">
                                <h3>Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                <a href="https://github.com/willwalker753/quiz-app" className="link" target="_blank" samesite="none" rel="noopener noreferrer">Github Repo</a>
                                <a href="https://willwalker753.github.io/quiz-app/" className="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                            <div id="projectImg3">
                                <img src="https://github.com/willwalker753/portfolio2/blob/master/placeholder.jpg?raw=true" alt="Placeholder"/>
                            </div>
                        </a>
                    </div>
                </section>
                <section id="aboutMeText">
                    <h3>About Me</h3>
                    <p>
                        From a young age I’ve learned about computers. I enjoy anything related to 
                        them from hardware to programming. When I discovered programming in high school it 
                        became my passion. I'm excited to work on a team of great programmers
                        to continue learning with. I recently graduated from Thinkful’s Full Stack Web Development 
                        course. Outside of computers you can find me playing disc golf, building backyard experiments, 
                        or learning about new technologies.  
                    </p>
                </section>
                <section id="contactMeText">
                    <h3>Contact Me</h3>
                    <p>
                        Email: <a href="mailto:willwalker@email.com" className="link">willwalker@email.com</a>
                        <br/>Phone: <a href="tel:2542165445" className="link">254-216-5445</a>
                        <br/><a href="https://github.com/willwalker753" className="link" target="_blank" rel="noopener noreferrer">Github</a>
                        <br/><a href="https://www.linkedin.com/in/william-walker-8b33441a0/" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </section>
                <div id="bottomFade"><img src="https://github.com/willwalker753/organizing-your-react-code/blob/master/bottom-fade.png?raw=true" alt="styling fade at bottom"/></div>
                </div>
                
            </div>
        );
    }
}
  

