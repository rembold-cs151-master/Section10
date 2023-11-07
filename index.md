---
title: "Exam 2 Prep and Dictionaries"
author: Jed Rembold and Eric Roberts
date: "Week of November 6th"
slideNumber: true
theme: monokai
highlightjs-theme: monokai
width: 1920
height: 1080
transition: fade
css:
  - css/codetrace.css
  - css/roberts.css
  - PracExam2a1Trace.css
tracejs:
  - RedCross
extrajs:
  - js/pgl.js
---


## Practice Exam 2a: Prob 1
You are tasked with identifying what is returned for every function call from the below code:
```{.mypython style="max-height:850px; font-size:.8em"}
def mystery(x):

    def puzzle(x, y=5):
        return x * y

    def enigma(y):
        return y ** x

    return enigma(puzzle(x=2)) + enigma(puzzle(3, x))

if __name__ == '__main__':
    print(mystery(3))
```

## 2a1: Trace {data-state="PracExam2a1Trace"}

<table id="PracExam2a1TraceTable">
<tbody>
<tr><td><div id="PracExam2a1Trace"></div></td></tr>
<tr>
<td style="text-align:center;">
<table class="CTControlStrip">
<tbody>
<tr>
<td>
<img id=PracExam2a1TraceStepInButton
     class="CTButton"
     src="images/StepInControl.png"
     alt="StepInButton" />
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

## Practice Exam 2a: Prob 2 {data-state="RedCrossTrace"}
::::::cols
::::col
Here you are tasked with:

- Creating a red cross GCompound of specified dimensions and crossing at the center
- Adding the cross to the middle of the window
- Having it move at a constant speed in a constant heading every 20 ms
- Implementing a listener to cause the constant heading to change when you click inside the cross
::::

::::col
<div id="RedCrossCanvas" class="CTCanvas"
     style="border:none; background-color:white; width:800px; height:800px;"></div>
::::
::::::

## 2a2: Possible Solution
```{.mypython style='max-height:850px; font-size:.7em;'}
from pgl import GWindow, GCompound, GRect
from random import uniform

WIDTH = 600
HEIGHT = 600

def create_cross():
    """ Creates the cross GCompound """
    c = GCompound()
    hrect = GRect(60, 20)
    hrect.set_filled(True)
    hrect.set_color("red")
    vrect = GRect(20, 60)
    vrect.set_filled(True)
    vrect.set_color("red")

    c.add(hrect, -30, -10)
    c.add(vrect, -10, -30)
    return c

def step():
    """ Animates the cross movement """
    cross.move_polar(2, gw.heading)

def click_action(event):
    """ Changes the heading if clicked within the cross """
    mx, my = event.get_x(), event.get_y()
    if cross.contains(mx, my):
        gw.heading = uniform(0, 360)


gw = GWindow(WIDTH, HEIGHT)
cross = create_cross()
gw.add(cross, WIDTH/2, HEIGHT/2)
gw.heading = uniform(0, 360)

gw.set_interval(step, 20)
gw.add_event_listener("mousedown", click_action) #click would be fine too
```
