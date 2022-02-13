import React from 'react';
import DrumElement from './components/DrumElement';
import Display from './components/Display';
import sounds from './components/Sounds';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      soundName: ''
    };
    this.updateSoundName = this.updateSoundName.bind(this);
  }
  
  updateSoundName(name) {
    this.setState({soundName: name});
  }
  
  render() {
    return (
      <div className="container">
        <div id="drum-machine">          
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <div className="drums">
                { sounds.map((sound) => (
                  <DrumElement 
                    keyName={sound.key}
                    url={sound.url}
                    name={sound.name}
                    id={sound.id}
                    imageUrl={sound.img}
                    getSoundName={this.updateSoundName}
                    />
                ))}
              </div>
            </div>    
          <div className="row">                
            <Display name={this.state.soundName} />
          </div>
        </div>
          <div className="row">  
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
