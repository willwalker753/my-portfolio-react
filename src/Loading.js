import React, { Component } from 'react'
import './Loading.css';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loadingText: 'Loading'
        };
    }

    addDot = () => {
        let currentText = this.state.loadingText;
        currentText = currentText + '.';
        setTimeout(() => {
            this.setState({
                loadingText: currentText
            });
            this.addDot2();
        }, 400);  
    };
    addDot2 = () => {
        let currentText = this.state.loadingText;
        currentText = currentText + '.';
        setTimeout(() => {
            this.setState({
                loadingText: currentText
            });
            this.addDot();
        }, 400);  
    };
    componentDidMount() {
        this.addDot();
        setTimeout(() => { 
            let element = document.getElementById("loadingBox");
            element.classList.add("hidden");
        }, 2900);     
    }
    render() {
        return (
            <div>
                <div id="loadingBox">
                    <div id="loadingSpinner" />
                    <p id="loadingText">{this.state.loadingText}</p>
                </div>
            </div>
        )
    }
}
