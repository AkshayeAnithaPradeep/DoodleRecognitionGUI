import React, { Component } from 'react';
import './App.css';

class Paint extends Component {

    componentDidMount() {
        // set canvas id to variable
        let canvas= document.getElementById("draw");
        let ctx = canvas.getContext("2d");

        // get canvas 2D context and set it to the correct size
        resize();

        // resize canvas when window is resized
        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", draw);
        document.addEventListener("mousedown", setPosition);
        document.addEventListener("mouseenter", setPosition);
        function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight-70;
        }
        // last known position
        var pos = { x: 0, y: 0 };

        // new position from mouse events
        function setPosition(e) {
            pos.x = e.clientX;
            pos.y = e.clientY;
        }
        function draw(e) {
            if (e.buttons !== 1) return; // if mouse is pressed.....

            let color = '#111111';

            ctx.beginPath(); // begin the drawing path

            ctx.lineWidth = 10; // width of line
            ctx.lineCap = "round"; // rounded end cap
            ctx.strokeStyle = color; // hex color of line

            ctx.moveTo(pos.x, pos.y); // from position
            setPosition(e);
            ctx.lineTo(pos.x, pos.y); // to position

            ctx.stroke(); // draw it!
        }
    }

    render() {
        return (
            <canvas id="draw" style={{top: 70}}/>
        );
    }
}

export default Paint;