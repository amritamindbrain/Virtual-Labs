  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 19-05-2015
  -->


  <ul>
  <li><h1>Variables<span></span></h1>
  <div class="varBox">
    <div id="tabContainer">
	  <select class="dropBox" id="dropdownDisable" disabled style="opacity:0.6">
	    <option value="Continuous Time model">Rats vs Snakes</option>
	  </select>
	  <select class="dropBox" id="dropdown">
		<option value="Rat vs Snake population">Rat vs Snake population</option>
		<option value="Population of Rats vs time">Population of Rats vs time</option>
		<option value="Population of Snakes vs time">Population of Snakes vs time</option>
		<option value="Time domain of rats and snakes">Time domain of rats and snakes</option>
	  </select>
      <p class="varTitle title" id="hptext1">Initial rats population: </p>
	  <p><input class="textField" type="text" id="ratPop" value="4095"></p>
      <p class="varTitle title" id="hptext2">Initial snakes population: </p>
	  <p><input class="textField" type="text" id="snakePop" value="347"></p>
      <p class="varTitle title" id="eptext1">Number of steps: </p>
	  <p><input class="textField" type="text" id="noOfSteps" value="500"></p>
      <p class="varTitle title" id="eptext2">Step size: </p>
	  <p><input class="textField" type="text" id="stepSize" value="10"></p>
	</div>
  </div>
  </li>
  <li><h1>Simulation Control</h1>
    <div class="varBox box">
      <div><input class="submitBtns" type="button" value="Go to step" id="goToStep"><input id="goStep"></div>
      <div><input class="submitBtns" type="button" value="Step run" id="stepRun"></div>
      <div><input class="submitBtns" type="button" value="Run iteration" id="runIteration"></div>
      <div><input class="submitBtns" type="button" value="Pause" id="Pause"></div>
      <div><input class="submitBtns" type="button" value="Reset" id="ReSet"></div>
    </div>
  </li>
  </ul>
