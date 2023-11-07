

"use strict";

const STAMP_SIZE = 75;

function RedCrossDemo() {
    new RedCrossSim();
}

class RedCrossSim extends CodeTrace {
    constructor() {
        super("StampSim")
        let gw = this.installGWindow("RedCrossCanvas");
        gw.addEventListener("mousedown", clickAction);
        gw.setInterval(step, 20);
        this._gw = gw;
        this.reset();

        function clickAction (e) {
            e.stopPropagation();
            let mx = e.getX();
            let my = e.getY();
            if (gw._cross.contains(mx, my)) {
                gw._heading = Math.floor(Math.random()*360);
            }
        }

        function step () {
            gw._cross.movePolar(2, gw._heading);
        }
    }

    reset() {
        let gw = this._gw;
        gw.clear();

        let cross = GCompound();
        let hrect = GRect(60, 20);
        hrect.setFilled(true);
        hrect.setColor("red");
        let vrect = GRect(20, 60);
        vrect.setFilled(true);
        vrect.setColor("red");
        cross.add(hrect, -30, -10)
        cross.add(vrect, -10, -30)
        gw.add(cross, gw.getWidth()/2, gw.getHeight()/2)
        
        gw._cross = cross;
        gw._heading = Math.floor(Math.random()*360);
    }
    
}
