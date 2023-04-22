import React, { Component } from 'react';


class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.data = this.props.data;

        this.playSound = this.playSound.bind(this);
    }
    playSound(event){
        // play the sound
        console.log(this.data.sound);
        console.log(require(this.data.sound))
    }
    render() { 
        console.log(this.data)
        return ( 
            <>
                <button onClick={this.playSound} id={this.data.id} class="drum-pad">
                    <audio src={this.data.sound} class="clip" id="Q"/>
                    {this.data.id}
                </button>
            </>
         );
    }
}
 
export default DrumPad;