import React from 'react';

const audioTypes = ["audio/wav", "audio/mpeg", "audio/ogg"];

class DrumElement extends React.Component {
    constructor(props) {
      super(props);      
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleKeyUp = this.handleKeyUp.bind(this);
      this.play = this.play.bind(this);
    }
    
    play() {
      const element = document.getElementById(this.props.keyName);
      element.currentTime = 0;
      element.play();
      
      this.props.getSoundName(this.props.name);
    }  
  
    handleKeyDown(e) {
      let key = e.key.toUpperCase();
      if(key === this.props.keyName) {
        this.play();
        
        var element = document.getElementById(this.props.id);
        element.classList.add("drum-active");
      }
    }
    
    handleKeyUp(e) { 
        var element = document.getElementById(this.props.id);
        element.classList.remove("drum-active");
    }
    
    componentDidMount() {    
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
    }
    
    render() {      
      return (
        <button className="drum-pad" id={this.props.id} onClick={this.play}>
          {this.props.keyName}     
          <img className="img" src={this.props.imageUrl} alt={this.props.imageUrl} />
          <audio className="clip" id={this.props.keyName} preload="auto">
            {audioTypes.map((type, index) => (
              <source src={this.props.url[index]} type={type} />
            ))}
          </audio>      
        </button>
      )};
  }

  export default DrumElement;