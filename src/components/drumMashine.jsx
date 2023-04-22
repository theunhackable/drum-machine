import React, { Component } from 'react';
import DrumPad from './drumPad';


class DrumMachine extends Component {
    constructor(props) {
        super(props);

        this.details = 
            [
                {
                    id: "Q",
                    sound: "../sounds/Heater-1.mp3",
                    text: "Heater 1"
                },
                {
                    id: "W",
                    sound: "../sounds/Heater-2.mp3",
                    text: "Heater 2"
                },
                {
                    id: "E",
                    sound: "../sounds/Heater-3.mp3",
                    text: "Heater 3"
                },
                {
                    id: "A",
                    sound: "../sounds/Heater-4_1.mp3",
                    text: "Heater 4"
                },
                {
                    id: "S",
                    sound: "../sounds/Heater-6.mp3",
                    text: "Heater 6"
                },

                {
                    id: "D",
                    sound: "../sounds/Dsc_Oh.mp3",
                    text: "Disc Oh"
                },
                {
                    id: "Z",
                    sound: "../sounds/RP4_KICK_1.mp3",
                    text: "RP4 Kick"
                },
                {
                    id: "X",
                    sound: "../sounds/Kick_n_Hat.mp3",
                    text: "Kick N Hat"
                },
                {
                    id: "C",
                    sound: "../sounds/Cev_H2.mp3",
                    text: "CEV H2"
                },
            ]

        this.state = {
            displayText: ''
         }
    }



    render() { 
        return ( 
            <div id="drum-machine">
                <div id="display">
                    {
                        this.details.map(
                            (val) => {
                                return <DrumPad data = {val}/>
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}
 
export default DrumMachine;