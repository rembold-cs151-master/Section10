

"use strict";

const SNAKE_SIZE = 25;

function SnakeDemo() {
    new SnakeSim();
}

class SnakeSim extends CodeTrace {
    constructor() {
        super("SnakeSim")
        let gw = this.installGWindow("SnakeCanvas");
        gw.addEventListener("mousedown", clickAction);
        gw.setInterval(step, 150);
        this._gw = gw;
        this.reset();

        function clickAction (e) {
            e.stopPropagation();
            let mx = e.getX();
            let my = e.getY();
            if (gw._heading == "W" | gw._heading == "E") {
                if (my < gw._sy) {
                    gw._heading = "N";
                } else {
                    gw._heading = "S";
                }
            } else {
                if (mx < gw._sx) {
                    gw._heading = "W";
                } else {
                    gw._heading = "E";
                }
            }
        }

        function step () {
            let rect = GRect(SNAKE_SIZE, SNAKE_SIZE);
            rect.setFilled(true);
            rect.setFillColor("gray");
            gw.add(rect, gw._sx - SNAKE_SIZE / 2, gw._sy - SNAKE_SIZE / 2)
            if (gw._heading == "E") {
                gw._sx += SNAKE_SIZE;
            } else if (gw._heading == "W") {
                gw._sx -= SNAKE_SIZE;
            } else if (gw._heading == "N") {
                gw._sy -= SNAKE_SIZE;
            } else if (gw._heading == "S") {
                gw._sy += SNAKE_SIZE;
            }


        }
    }

    reset() {
        let gw = this._gw;
        gw.clear();

        let x = gw.getWidth() / 2;
        let y = gw.getHeight() / 2;
        let heading = "E";
        gw._sx = x;
        gw._sy = y;
        gw._heading = heading;
    }
    
}
