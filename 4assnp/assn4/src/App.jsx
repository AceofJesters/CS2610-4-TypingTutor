import { useState } from 'react'
import './App.css'

function App() {

  return (
    <body>
      <div id="root">
        <main class="content">
          <div class="phrase">
            <span class="typed"></span>
            <span class="next"></span>
          </div>
          <div class="keyboard">
            <div class="keyboard-row">
              <div class="keyboard-key" id="`">`</div>
              <div class="keyboard-key" id="1">1</div>
              <div class="keyboard-key" id="2">2</div>
              <div class="keyboard-key" id="3">3</div>
              <div class="keyboard-key" id="4">4</div>
              <div class="keyboard-key" id="5">5</div>
              <div class="keyboard-key" id="6">6</div>
              <div class="keyboard-key" id="7">7</div>
              <div class="keyboard-key" id="8">8</div>
              <div class="keyboard-key" id="9">9</div>
              <div class="keyboard-key" id="0">0</div>
              <div class="keyboard-key" id="-">-</div>
              <div class="keyboard-key" id="=">=</div>
            </div>
            <div class="keyboard-row">
              <div class="keyboard-key" id="q">q</div>
              <div class="keyboard-key" id="w">w</div>
              <div class="keyboard-key" id="e">e</div>
              <div class="keyboard-key" id="r">r</div>
              <div class="keyboard-key" id="t">t</div>
              <div class="keyboard-key" id="y">y</div>
              <div class="keyboard-key" id="u">u</div>
              <div class="keyboard-key" id="i">i</div>
              <div class="keyboard-key" id="o">o</div>
              <div class="keyboard-key" id="p">p</div>
              <div class="keyboard-key" id="[">[</div>
              <div class="keyboard-key" id="]">]</div>
              <div class="keyboard-key" id="\">\</div>
            </div>
            <div class="keyboard-row">
              <div class="keyboard-key" id="a">a</div>
              <div class="keyboard-key" id="s">s</div>
              <div class="keyboard-key" id="d">d</div>
              <div class="keyboard-key" id="f">f</div>
              <div class="keyboard-key" id="g">g</div>
              <div class="keyboard-key" id="h">h</div>
              <div class="keyboard-key" id="j">j</div>
              <div class="keyboard-key" id="k">k</div>
              <div class="keyboard-key" id="l">l</div>
              <div class="keyboard-key" id=";">;</div>
              <div class="keyboard-key" id="'">'</div>
            </div>
            <div class="keyboard-row">
              <div class="keyboard-key" id="shift-left">Shift</div>
              <div class="keyboard-key" id="z">z</div>
              <div class="keyboard-key" id="x">x</div>
              <div class="keyboard-key" id="c">c</div>
              <div class="keyboard-key" id="v">v</div>
              <div class="keyboard-key" id="b">b</div>
              <div class="keyboard-key" id="n">n</div>
              <div class="keyboard-key" id="m">m</div>
              <div class="keyboard-key" id=",">,</div>
              <div class="keyboard-key" id=".">.</div>
              <div class="keyboard-key" id="/">/</div>
              <div class="keyboard-key" id="shift-right">Shift</div>
            </div>
            <div class="keyboard-key space-bar" id=" "> </div>
          </div>
        </main>
      </div>
    </body>
  )
}

export default App
