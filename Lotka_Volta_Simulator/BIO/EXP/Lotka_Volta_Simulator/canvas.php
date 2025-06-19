  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 19-05-2015
  -->

  <script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
  </script>
  <script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

  <div id="statLabel">
  <p class="Label" id="species1"></p>
  <p class="Label" id="species2"></p>
  <p class="Label" id="species3"></p>
  </div>

  <canvas id="speciesCanvas"></canvas>
  
  <!--label text display in the top-->
  <p id="top"></p>

  <!--label text display in the left-->
  <p id="left"></p>

  <!--graph content displaying div-->
  <div id="tinyGraphArea"></div>

  <!--label text display in the bottom-->
  <p id="bottom"></p>
  
  <div id="triButton" >
  <button id="Statistics">Statistics</button>
  <button id="dataPlots">Data plots</button>
  <button id="workSheets" disabled>Work sheet</button>
  </div>