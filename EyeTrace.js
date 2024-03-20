

"use strict";

let EYE_RAD=150;
let PUPIL_RAD=75;

function EyeDemo() {
    new EyeSim();
}

class EyeSim extends CodeTrace {
    constructor() {
        super("EyeSim")
        let gw = this.installGWindow("EyeCanvas");
        gw.addEventListener("mousemove", moveAction);
        this._gw = gw;
        this.reset();

        function moveAction (e) {
            e.stopPropagation();
            let midx = gw.getWidth() / 2;
            let midy = gw.getHeight() / 2;
            let lcentx = midx - 2 * EYE_RAD;
            let rcentx = midx + 2 * EYE_RAD;
            let mx = e.getX();
            let my = e.getY();
            let ldist = ((mx - lcentx)**2 + (my - midy)**2)**(1/2);
            let rdist = ((mx - rcentx)**2 + (my - midy)**2)**(1/2);

            let ldx = PUPIL_RAD * (mx - lcentx) / ldist;
            let ldy = PUPIL_RAD * (my - midy) / ldist;

            let rdx = PUPIL_RAD * (mx - rcentx) / rdist;
            let rdy = PUPIL_RAD * (my - midy) / rdist;

            gw._lpup.setLocation(lcentx - PUPIL_RAD + ldx, midy - PUPIL_RAD + ldy);
            gw._rpup.setLocation(rcentx - PUPIL_RAD + rdx, midy - PUPIL_RAD + rdy);

        }

    }

    reset() {
        let gw = this._gw;
        gw.clear();

        let mx = gw.getWidth() / 2;
        let my = gw.getHeight() / 2;

        let leye = GOval(mx - 3 * EYE_RAD, my - EYE_RAD, 2 * EYE_RAD, 2*EYE_RAD)
        leye.setLineWidth(3);
        gw.add(leye)
        let reye = GOval(mx + 1 * EYE_RAD, my - EYE_RAD, 2 * EYE_RAD, 2*EYE_RAD)
        reye.setLineWidth(3);
        gw.add(reye)
        let lpup = GOval(mx - 2 * EYE_RAD - PUPIL_RAD, my - PUPIL_RAD, 2 * PUPIL_RAD, 2*PUPIL_RAD)
        lpup.setFilled(true)
        gw.add(lpup)
        let rpup = GOval(mx + 2 * EYE_RAD - PUPIL_RAD, my - PUPIL_RAD, 2 * PUPIL_RAD, 2*PUPIL_RAD)
        rpup.setFilled(true)
        gw.add(rpup)

        gw._rpup = rpup
        gw._lpup = lpup
    }
    
}
