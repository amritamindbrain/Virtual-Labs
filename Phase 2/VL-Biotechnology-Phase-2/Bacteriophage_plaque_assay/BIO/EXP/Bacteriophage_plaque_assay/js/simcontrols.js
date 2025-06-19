/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/
var objDis=10;
var XYPoss=new Array();
var max=0;
var min=0;
var ranCount=0;
var scale=1;
var temp = 0;
var zoomFlag;

$(document).ready(function () {
	
	//Function for restrict alphabets in textbox
	$("#countPlaques").keypress(function (e) {
		//if the letter is not digit then display error and don't type anything
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	
	//Function for calculate Plaque Forming Unit/ml in change of dropdown Volume of the diluted virus:
	$("#dropdownVolDilVir").change(function() {
		$("#plaquesMl").val(Math.round($('#countPlaques').val()/($('#dropdownDilution').val()*$('#dropdownVolDilVir').val()))+".00");	 
	});
	
	//Function for calculate Plaque Forming Unit/ml in keyup of text field No of plaques:
	$("#countPlaques").keyup(function () {
     	$("#plaquesMl").val(Math.round($('#countPlaques').val()/($('#dropdownDilution').val()*$('#dropdownVolDilVir').val()))+".00");
	});
	
	displayPlaques();
	dynamicDiv();
	
	// Zooming in function
	$("#zoomInImg").click(function() {
		zoomFlag=true;	
		if((zoomFlag==true) & (temp<2))
		{
			scale+=0.1;
			
			$('#petridish').css('transform','scale(' + scale + ')');
			$('#petridish').css('-webkit-transform', 'scale(' + scale + ')');/* Safari */
			$('#petridish').css('-ms-transform', 'scale(' + scale + ')');/* IE 9 */
			temp++;
		}
	});
	
	// Zooming out function
	$("#zoomOutImg").click(function () {
		zoomFlag=false;	
		if(zoomFlag==false & (temp>0))
		{
			scale-=0.1;
			$('#petridish').css('transform','scale(' + scale + ')');
			$('#petridish').css('-webkit-transform', 'scale(' + scale + ')');/* Safari */
			$('#petridish').css('-ms-transform', 'scale(' + scale + ')');/* IE 9 */
			temp--;
		}
	});	
	
	//Dynamic divs created on dropdownDilution onchange
	$("#dropdownDilution").change(function () {
		dynamicDiv();
	});
	
	//Create dynamic divs
	function dynamicDiv(){
		fillXYPoss();
		displayPlaques();
		$('#circle').html('');
		for(i = 0; i <ranCount; i++) 
		{
			$("#circle").append('<div id="block'+i+'"></div>');		
			var randomPosR=Math.round(Math.random()*(XYPoss.length-1));
			var divTop=XYPoss[randomPosR]["X"];
			var divLeft=XYPoss[randomPosR]["Y"];
			var size=Math.floor(Math.random()*(10))+8;
			styleDiv('block'+i,divTop,divLeft,size);		
		}	
	}
	
	//Display plaques based on the dilution values
	function displayPlaques() {
	switch ($('#dropdownDilution').val()) {
		case "0.1" :			
			max=500;
			min=400;
			break;
		case "0.01" :		
			max=130;
			min=110;
			break;
		case "0.001" :		
			max=110;
			min=90;
			break;
		case "0.0001" :		
			max=90;
			min=70;
			break;
		case "0.00001" :		
			max=70;
			min=60;
			break;
		case "0.000001" :		
			max=60;
			min=50;
			break;
		case "1e-7" :		
			max=50;
			min=40;
			break;
		case "1e-8" :		
			max=40;
			min=30;
			break;
		case "1e-9" :		
			max=30;
			min=20;
			break;
		case "1e-10" :		    
			max=20;
			min=10;
			break;
		}
		ranCount=Math.floor(Math.random()*(1+max-min))+min;
	}
	
	// Put style on div
	function styleDiv(divId,divTop,divLeft,size)
	{
		$("#"+divId).css({"width":size+"px","height":size+"px","borderRadius":"150px","position":"absolute","top":divTop+"px","left":divLeft+"px","backgroundColor":"#79706b"});
	}
	
	// x and y position of div
	function fillXYPoss() 
	{
		var tt=0;
		for (var d=0; d<35; d++) {
			for (var e=0; e<25; e++) {
				XYPoss[tt]=new Array();
				XYPoss[tt]["X"]=e*(objDis*1.5);
				XYPoss[tt]["Y"]=d*(objDis);
				tt++;
			}
		}
	}
	
});