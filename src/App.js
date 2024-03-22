import logo from './test.jpg';
import './App.scss';

function App() {
  return (
    <>
      <body>
        <div id="card">
          <center><h1>💓  🌹   💓</h1></center>
          <div class="heart" id="heart1">
            <div id="half1">
              <div id="circle"></div>
              <div id="rec"></div>
            </div>
            <div id="half2">
              <div id="circle"></div>
              <div id="rec"></div>
            </div>
          </div>
          <div id="message">
            <img src={logo} />
          </div>
          <div class="heart" id="heart2">
            <div id="half1">
              <div id="circle"></div>
              <div id="rec"></div>
            </div>
            <div id="half2">
              <div id="circle"></div>
              <div id="rec"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
