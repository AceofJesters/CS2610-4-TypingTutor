import './App.css';

function App({ typed, next }) {
  return (
    <div id="root">
      <main className="content">
        <div className="prompt">
          <span className="typed-phrase">{typed}</span>
          <span className="phrase">{next}</span>
        </div>
        <div className="keyboard">
          <div className="keyboard-row">
            <div className="keyboard-key" id="`">`</div>
            <div className="keyboard-key" id="1">1</div>
            <div className="keyboard-key" id="2">2</div>
            <div className="keyboard-key" id="3">3</div>
            <div className="keyboard-key" id="4">4</div>
            <div className="keyboard-key" id="5">5</div>
            <div className="keyboard-key" id="6">6</div>
            <div className="keyboard-key" id="7">7</div>
            <div className="keyboard-key" id="8">8</div>
            <div className="keyboard-key" id="9">9</div>
            <div className="keyboard-key" id="0">0</div>
            <div className="keyboard-key" id="-">-</div>
            <div className="keyboard-key" id="=">=</div>
          </div>
          <div className="keyboard-row">
            <div className="keyboard-key" id="q">q</div>
            <div className="keyboard-key" id="w">w</div>
            <div className="keyboard-key" id="e">e</div>
            <div className="keyboard-key" id="r">r</div>
            <div className="keyboard-key" id="t">t</div>
            <div className="keyboard-key" id="y">y</div>
            <div className="keyboard-key" id="u">u</div>
            <div className="keyboard-key" id="i">i</div>
            <div className="keyboard-key" id="o">o</div>
            <div className="keyboard-key" id="p">p</div>
            <div className="keyboard-key" id="[">[</div>
            <div className="keyboard-key" id="]">]</div>
            <div className="keyboard-key" id="\\">\\</div>
          </div>
          <div className="keyboard-row">
            <div className="keyboard-key" id="a">a</div>
            <div className="keyboard-key" id="s">s</div>
            <div className="keyboard-key" id="d">d</div>
            <div className="keyboard-key" id="f">f</div>
            <div className="keyboard-key" id="g">g</div>
            <div className="keyboard-key" id="h">h</div>
            <div className="keyboard-key" id="j">j</div>
            <div className="keyboard-key" id="k">k</div>
            <div className="keyboard-key" id="l">l</div>
            <div className="keyboard-key" id=";">;</div>
            <div className="keyboard-key" id="'">'</div>
          </div>
          <div className="keyboard-row">
            <div className="keyboard-key" id="shift-left">Shift</div>
            <div className="keyboard-key" id="z">z</div>
            <div className="keyboard-key" id="x">x</div>
            <div className="keyboard-key" id="c">c</div>
            <div className="keyboard-key" id="v">v</div>
            <div className="keyboard-key" id="b">b</div>
            <div className="keyboard-key" id="n">n</div>
            <div className="keyboard-key" id="m">m</div>
            <div className="keyboard-key" id=",">,</div>
            <div className="keyboard-key" id=".">.</div>
            <div className="keyboard-key" id="/">/</div>
            <div className="keyboard-key" id="shift-right">Shift</div>
          </div>
          <div className="keyboard-key space-bar" id=" "> </div>
        </div>
      </main>
    </div>
  );
}

export default App;
