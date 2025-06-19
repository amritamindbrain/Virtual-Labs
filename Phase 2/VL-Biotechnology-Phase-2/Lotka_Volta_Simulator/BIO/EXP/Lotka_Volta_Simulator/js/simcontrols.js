  /**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 29-05-2015
  */
  
  var ctx_rat;
  var ctx_snake;
  var draw_rat_timer;
  var draw_snake_timer;
  var randx_con_int;
  var randy_con_int;
  var x_con_float,y_con_float;
  var randx_dis_int;
  var randy_dis_int;
  var x_dis_float,y_dis_float;
  var count_rat_int=0;
  var count_snake_int=0;
  var show_graph_int=0;
  var stat_show_int=0;
  var step_count_int=0;
  var run_iteration_timer;
  var select_iteration_int=0;
  var timer_current_count_int=0;
  var worksheet_show_int=0;
  var prev_item_int=0;
  var timevar_dis_int=0.1;
  var timevar_con_int=2;
  var time_diff_dis_float=0;
  var time_diff_con_float=0;
  var num_prev_item_float=0;
  var num_item_rat_int=0;
  var num_item_snake_int=0;
  var stat_rats_int=0;
  var stat_time_int=0;
  var stat_snakes_int=0;
  var time=0;
  var height=10;
  var rat_calc_one=0;
  var snake_calc_one=0;
  var rat_calc_two=0;
  var snake_calc_two=0;
  var rat_calc_three=0;
  var snake_calc_three=0;
  var rat_calc_four=0;
  var snake_calc_four=0;
  var a=0.04; /** %Natural growth rate of Rats in absence of Snakes */
  var b=0.0005; /** %Death rate per encounter of Rats due to predation */ 
  var c=0.2; /** Natural death rate of snakes in the absence of food (Rats) */
  var e=0.1; /** The efficiency of turning predated R into S */
  var step_flag=0;
  var goto_steps_int=0;
  var rand_y_rat_float=0;
  var rand_y_snake_float=0;
  var prev_rat_population_int=0;
  var prev_snake_population_int=0;
  var prev_noof_steps_int=0;
  var prev_step_size_int=0;
  var x_array= [];
  var y_array= [];
  var array_snake_X=[];
  var chart_category_names_array=[];
  var chart_data_provider_array=[];
  var chart_data_provider_array1=[];
  var plot_array=[];
  var plot_array1=[];  
  var img_rat = new Image();
  var img_snake = new Image();
  var snake_array=[];
  var rat_array=[];
  var time_array=[];  
  var dataPlotArray=[];
  var dataPlotArray1=[];
  $(document).ready(function(){
    img_rat.src = simPath+"images/rat.png";    
    img_snake.src = simPath+"images/snake.png";
	ctx_rat = document.getElementById('speciesCanvas').getContext('2d');
	ctx_rat.canvas.width  = $("#canvasBox").width()/1.07;
	ctx_rat.canvas.height = $("#canvasBox").height()/1.2;
	ctx_snake = document.getElementById('speciesCanvas').getContext('2d');
	ctx_snake.canvas.width  = $("#canvasBox").width()/1.07;	
    ctx_snake.canvas.height = $("#canvasBox").height()/1.2;
	$("#statLabel").css("display","none");
	$("#Pause").prop("disabled",true);
    chart_data_provider_array.push($("#contInitialPop").val());
	/** Click function of Statistics */
	$("#Statistics").click(function (){
	  if(stat_show_int==0) {
	    $("#statLabel").css("display","block");
	    $("#Statistics").css("color","#cacaca");
	    stat_show_int=1;
	    statitics_display();
	  } else {
	    $("#statLabel").css("display","none");
	    $("#Statistics").css("color","#6e6e6e");
	    stat_show_int=0;
      }
    });
	/** Click function of Data plots */
	$("#dataPlots").click(function (){	
	  if ( ( select_iteration_int == 1 ) & ( chart_data_provider_array.length > 1 ) ) {
	    if ( show_graph_int == 0 ) {
		  $("#tinyGraphArea").css("display","block");
		  $("#dataPlots").css("color","#cacaca");
		  $("#top").css("display","block");
		  $("#left").css("display","block");
		  $("#bottom").css("display","block");
		  show_graph_int=1;
		  /** Function for the x and y position tooltip inside the graph */				
		  function showTooltip(x, y, contents){		
		    $('<div id="tooltip">' + contents + '</div>').css( {
		    position: 'absolute',
		    display: 'block',
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#fee',
			opacity: 0.80
			}).appendTo("body").fadeIn(200);
		  }
		  var _previous_point;	
		  $("#tinyGraphArea").bind("plothover", function (event, pos, item) {
		    $("#x").text(pos.x.toFixed(2));
		    $("#y").text(pos.y.toFixed(2));			
			if ( _previous_point != item.dataIndex ) {
			  _previous_point = item.dataIndex;
			  $("#tooltip").remove();
			  var x = item.datapoint[0].toFixed(2),
			  y = item.datapoint[1].toFixed(2);	
			  showTooltip(item.pageX, item.pageY," X:" + x + " and Y:" + y);
			} else {
			  $("#tooltip").remove();
			  _previous_point = null;            
			}			
	      });			
		} else {
		  $("#tinyGraphArea").css("display","none");
		  $("#dataPlots").css("color","#6e6e6e");
		  $("#top").css("display","none");
		  $("#left").css("display","none");
		  $("#bottom").css("display","none");
		  show_graph_int=0;
		  $("#tooltip").remove();
		}
	  } else {
	    alert("To plot a graph you need to complete two steps.");
	  }
	});
	/** Click function of Run Iteration */
	$("#runIteration").click(function(){
	  $("#runIteration").prop("disabled",true);
      $("#tinyGraphArea").css("display","none");	
	  $("#stepRun").prop("disabled",true);
	  $("#Pause").prop("disabled",false);
	  select_iteration_int=1;
	  run_iteration_timer = setInterval(runItration, 1000); 
	});  
	/** Click function of Step Run */
	$("#stepRun").click(function(){	
	  $("#tinyGraphArea").css("display","none");
	  timer_current_count_int=0;
	  select_iteration_int=1;
	  getVal();
	  clearCanvas();	  
	  if ( step_count_int <= no_of_steps_int-1 ) {
	    xyPosion();
	    drawItem();
		calculationFn();
        numberOfSpecies();
		/** In case the user changes the previous inputed value, then it will do calculation again */
		if ((prev_rat_population_int!=rat_population_int)||(prev_snake_population_int!=snake_population_int)||(prev_noof_steps_int!=no_of_steps_int)||(prev_step_size_int!=step_size_int)) {			
		  rat_array=[];
		  snake_array=[];
		  step_count_int=0;
		  calculationFn();
		  numberOfSpecies();
		}
		prev_rat_population_int=rat_population_int;
		prev_snake_population_int=snake_population_int;
		prev_noof_steps_int=no_of_steps_int;
		prev_step_size_int=step_size_int;
		/** For showing the statistics */
		if($("#dropdown option:selected").val()=="Rat vs Snake population") {
		  stat_rats_int=chart_category_names_array[chart_category_names_array.length-1];
		  stat_snakes_int=chart_data_provider_array[chart_data_provider_array.length-1];
	    } else if ($("#dropdown option:selected").val()=="Population of Rats vs time") {
		  stat_time_int=chart_category_names_array[chart_category_names_array.length-1];
		  stat_rats_int=chart_data_provider_array[chart_data_provider_array.length-1];
	    } else if ($("#dropdown option:selected").val()=="Population of Snakes vs time") {
		  stat_time_int=chart_category_names_array[chart_category_names_array.length-1];
		  stat_snakes_int=chart_data_provider_array[chart_data_provider_array.length-1];
	    } else if ( $("#dropdown option:selected").val()=="Time domain of rats and snakes" ) {
		  stat_time_int=chart_category_names_array[chart_category_names_array.length-1];
		  stat_snakes_int=chart_data_provider_array[chart_data_provider_array.length-1];
		  stat_rats_int=chart_data_provider_array1[chart_data_provider_array1.length-1];
	    }		
		step_count_int++;		
		statitics_display();		
      } else {
		$("#runIteration").prop("disabled",true);
		$("#Pause").prop("disabled",true);
		$("#ReSet").prop("disabled",false);
	  }
	});		
	/** Clear canvas on dropdown change */
	$("#dropdown").change(function () {
	  clearCanvas();
	  clearAllValues();
	});	
	/** Play pause functions */
	$("#Pause").click(function(){
	  if ( $(this).val() == "Pause" ) {
	    clearInterval(run_iteration_timer);
		$("#Pause").val("Play");
	  } else {
	    $("#Pause").val("Pause");		
		run_iteration_timer = setInterval(runItration, 1000);
	  }
	});	
	/** Go to step button */
	$("#goToStep").click(function(){
	  getVal();
	  if ( $("#goStep").val() != "" ) {
	    if ( $("#goStep").val() >= 10 ) {
		  select_iteration_int=1;
		  goto_steps_int=$("#goStep").val();
     	  step_count_int=goto_steps_int;
		  statitics_display();
	      for(i=0; i<=goto_steps_int; i++) {
            calculationFn();
            numberOfSpecies();
		    draw_rat_timer =setInterval("drawSpeciesRats()",1);	
	        draw_snake_timer =setInterval("drawSpeciesSnakes()",1);
		  }
          /** For display statistic values */
          if($("#dropdown option:selected").val()=="Rat vs Snake population") {
            stat_rats_int=chart_category_names_array[step_count_int];
            stat_snakes_int=chart_data_provider_array[step_count_int];
          } else if ($("#dropdown option:selected").val()=="Population of Rats vs time") {
            stat_time_int=chart_category_names_array[step_count_int];
            stat_rats_int=chart_data_provider_array[step_count_int];
          } else if ($("#dropdown option:selected").val()=="Population of Snakes vs time") {
            stat_time_int=chart_category_names_array[step_count_int];
            stat_snakes_int=chart_data_provider_array[step_count_int];
          } else if ( $("#dropdown option:selected").val()=="Time domain of rats and snakes" ) {
            stat_time_int=chart_category_names_array[step_count_int];
            stat_snakes_int=chart_data_provider_array[step_count_int];
            stat_rats_int=chart_data_provider_array1[step_count_int];
          }		  
		} else {
		  alert("Number of steps should be greater than or equal to 10.");
		}
	  } else {
	    alert("Enter a number");
	  }
	});
	/** Function for restrict alphabets in textbox */
	$(".textField").keypress(function (key){
	  /** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});
	/** Keypress function for go to step input box */
	$("#goStep").keypress(function (key){
	  /** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});	
	/** Reset function */
	$("#ReSet").click(function (){
	  window.location.reload();
	});	
  });  
  /** Statistics label display */
  function statitics_display(){
	if($("#dropdown option:selected").val()=="Rat vs Snake population") {
	  $("#species1").html("Population of rats: "+stat_rats_int);
	  $("#species2").html("Population of snakes: "+stat_snakes_int);
	  $("#species3").html("");
	} else if ($("#dropdown option:selected").val()=="Population of Rats vs time") {
	  $("#species1").html("Population of rats: "+stat_rats_int);
	   $("#species2").html("Time: "+stat_time_int);
	   $("#species3").html("");
	} else if ($("#dropdown option:selected").val()=="Population of Snakes vs time") {
	  $("#species1").html("Population of snakes: "+stat_snakes_int);
	  $("#species2").html("Time: "+stat_time_int);
	  $("#species3").html("");
	} else if ( $("#dropdown option:selected").val()=="Time domain of rats and snakes" ) {
	  $("#species1").html("Population of rats: "+stat_rats_int);
	  $("#species2").html("Population of snakes: "+stat_snakes_int);
	  $("#species3").html("Time: "+stat_time_int);
	} 
  }
  /** Function for drawing Graph */
  function showGraph(arr){
	$.plot($("#tinyGraphArea"), [arr],
	{
	  grid: 
	  {
		hoverable: true, clickable: true
	  },
	  points: 
	  { 
		show: true 
	  },
	  lines: 
	  {
	    show: true 
	  }			
	});
  }  
  /** Function for drawing two line graph */
  function plotTwoGraph(arr1,arr2){
	$.plot($("#tinyGraphArea"), [{data: arr1, color: '#FF3300'}, {data: arr2,color: '#CC66FF'}],
	{
	  grid: 
	  {
		hoverable: true, clickable: true
	  },
	  points: 
	  { 
		show: true 
	  },
	  lines: 
	  {
	    show: true 
	  }			
	});
  }
  /** Function for getting text box values */
  function getVal(){
	rat_population_int=$("#ratPop").val();
	snake_population_int=$("#snakePop").val();
	no_of_steps_int=$("#noOfSteps").val();
	step_size_int=$("#stepSize").val();
	count_rat_int=0;
	count_snake_int=0;
  }
  /** Getting x and y positions for species */
  function xyPosion(){
    for ( w = 0; w <= $("#canvasBox").width(); w += 19 ) {
      x_array.push(w);
    }
    for ( h = 0; h <= $("#canvasBox").height()/1.2; h += 18.5 ) {
    y_array.push(h);
    }
  }
  /** Drawing item using timer */
  function drawItem(){  
	clearInterval(draw_rat_timer);
	clearInterval(draw_snake_timer);
	draw_rat_timer =setInterval("drawSpeciesRats()",1);	
	draw_snake_timer =setInterval("drawSpeciesSnakes()",1);		
  }
  /** Function for getting two unique random numbers */
  function randNumberFn(){
    rand_y_rat_float = Math.floor(Math.random()*y_array.length);
    do {
      rand_y_snake_float = Math.floor(Math.random()*y_array.length);
    }while (rand_y_rat_float != rand_y_snake_float);
  }
  /** Drawing the rat species */
  function drawSpeciesRats(){
    $("#Statistics").prop("disabled",false);
    $("#dataPlots").prop("disabled",false);
    if ( num_item_rat_int > 0 ) { 
      if ( count_rat_int < num_item_rat_int ) {   
        randx_rat_int = Math.random() * (27 - 0); /** Random value for x */
        randy_rat_int=  Math.random() * (24 - 0); /** Random value for y*/
        x_rat_float= Math.round(randx_rat_int,0);
        /** y_rat_float= Math.round(randy_rat_int,0); */  
        randNumberFn();     
        ctx = document.getElementById('speciesCanvas').getContext('2d');
        ctx.drawImage(img_rat,x_array[x_rat_float],y_array[rand_y_rat_float],18,18);  
      } else {
        clearInterval(draw_rat_timer);
      }   
    }
    count_rat_int++;
  }
  /** Drawing the snake species */
  function drawSpeciesSnakes(){
    $("#Statistics").prop("disabled",false);
    $("#dataPlots").prop("disabled",false);
    if( num_item_snake_int > 0 ) {
      if ( count_snake_int < num_item_snake_int ) {
        randx_snake_int = Math.random() * (26 - 0); /** Random value for x */
        randy_snake_int=  Math.random() * (24 - 0); /** Random value for y */
        x_snake_float= Math.round(randx_snake_int,0);
        /** y_snake_float= Math.round(randy_snake_int,0); */  
        randNumberFn();
        ctx = document.getElementById('speciesCanvas').getContext('2d');
        ctx.drawImage(img_snake,x_array[x_snake_float],y_array[rand_y_snake_float],18,18);
      } else {
        clearInterval(draw_snake_timer);
      } 
    }
    count_snake_int++;  
  }
  /** Getting the values for ploting graph */
  function numberOfSpecies(){
    getVal();	
    if ($("#dropdown option:selected").val()=="Rat vs Snake population") {
      clearCanvas();
      /** Rats vs Snakes.. */
      chart_category_names_array.push(rat_array[step_count_int]);
      chart_data_provider_array.push(snake_array[step_count_int]);
      num_item_snake_int=Math.round((snake_array[step_count_int]));
      num_item_rat_int=Math.round((rat_array[step_count_int]));
      /** Plot graph values */
      dataPlotArray=[];
      for ( var i = 0; i < chart_category_names_array.length; i++ ) {
        plot_array=[chart_category_names_array[i],chart_data_provider_array[i]];
        dataPlotArray.push(plot_array);       
        showGraph(dataPlotArray);
      }
      $("#top").html("Rat vs Snake population");
      $("#left").html("Snakes");
      $("#bottom").html("Rats");
    } else if ($("#dropdown option:selected").val()=="Population of Rats vs time") {
      clearCanvas();
      /** Rates vs Time.. */
      chart_category_names_array.push(time_array[step_count_int]);
      chart_data_provider_array.push(rat_array[step_count_int]);
      num_item_snake_int=0;
      num_item_rat_int=Math.round((rat_array[step_count_int]));
      /** Plot graph values */
      dataPlotArray=[];
      for ( var j = 0; j < chart_category_names_array.length; j++ ) {
        plot_array=[chart_category_names_array[j],chart_data_provider_array[j]];
        dataPlotArray.push(plot_array);       
        showGraph(dataPlotArray);
      }
      $("#top").html("Population of Rays vs time");
      $("#left").html("Rats");
      $("#bottom").html("Time");
    } else if ($("#dropdown option:selected").val()=="Population of Snakes vs time") {
      clearCanvas();
      /** Snakes vs Time.. */
      chart_category_names_array.push(time_array[step_count_int]);
      chart_data_provider_array.push(snake_array[step_count_int]);
      num_item_snake_int=Math.round((snake_array[step_count_int]));
      num_item_rat_int=0;
      /** Plot graph values */
      dataPlotArray=[];
      for ( var k = 0; k < chart_category_names_array.length; k++ ) {
        plot_array=[chart_category_names_array[k],chart_data_provider_array[k]];
        dataPlotArray.push(plot_array);       
        showGraph(dataPlotArray);
      }
      $("#top").html("Population of Snakes vs time");
      $("#left").html("Snakes");
      $("#bottom").html("Time");
    } else if ($("#dropdown option:selected").val()=="Time domain of rats and snakes") {
      clearCanvas();
      /** Time domain representation of rats and snakes */
      chart_category_names_array.push(time_array[step_count_int]);
      chart_data_provider_array.push(snake_array[step_count_int]);
      chart_data_provider_array1.push(rat_array[step_count_int]);
      num_item_snake_int=Math.round((snake_array[step_count_int]));
      num_item_rat_int=Math.round((rat_array[step_count_int]));
      /** Plot graph values */
      dataPlotArray=[];
      dataPlotArray1=[];
      for ( var m = 0; m < chart_category_names_array.length; m++ ) {
        plot_array=[chart_category_names_array[m],chart_data_provider_array[m]];
        dataPlotArray.push(plot_array);
        plot_array1=[chart_category_names_array[m],chart_data_provider_array1[m]]
        dataPlotArray1.push(plot_array1);
        plotTwoGraph(dataPlotArray,dataPlotArray1);
      }
      $("#top").html("Time domain of rats and snakes");
      $("#left").html("Population");
      $("#bottom").html("Time");
    }
    timer_current_count_int++;
  }    
  /** Function for total itration run */
  function runItration(){
    getVal();
	xyPosion();
	drawItem();		
	if(step_count_int>0 & chart_category_names_array.length>0) {
	  if($("#dropdown option:selected").val()=="Rat vs Snake population") {
		stat_rats_int=chart_category_names_array[step_count_int-1];
		stat_snakes_int=chart_data_provider_array[step_count_int];
	  } else if ($("#dropdown option:selected").val()=="Population of Rats vs time") {
		stat_time_int=chart_category_names_array[step_count_int-1];
		stat_rats_int=chart_data_provider_array[step_count_int-1];
	  } else if ($("#dropdown option:selected").val()=="Population of Snakes vs time") {
		stat_time_int=chart_category_names_array[step_count_int-1];
		stat_snakes_int=chart_data_provider_array[step_count_int-1];
	  } else if ( $("#dropdown option:selected").val()=="Time domain of rats and snakes" ) {
		stat_time_int=chart_category_names_array[step_count_int-1];
		stat_snakes_int=chart_data_provider_array[step_count_int-1];
		stat_rats_int=chart_data_provider_array1[step_count_int-1];
	  }
    }	
    statitics_display();
	step_count_int++;
	calculationFn();
    numberOfSpecies();
	if ( step_count_int == no_of_steps_int ) {
	  clearInterval(run_iteration_timer);
	}
  }
  /** Calculation of number of items draw and data plot */
  function calculationFn(){    
	for (var j=0; j<no_of_steps_int; j++) {
	  snake_array[j]=0;
	  rat_array[j]=0;
	  time_array[j]=0;
	}
	snake_array[0]=snake_population_int;
	rat_array[0]=rat_population_int;
	time_array[0]=10;	
	for (var i=0; i<no_of_steps_int; i++) {      
	  rat_calc_one=equationOne(time,rat_array[i],snake_array[i]);
	  snake_calc_one=equationTwo(time,snake_array[i],rat_array[i]);
	  rat_calc_two=equationOne(time+parseFloat(0.5*height),parseFloat(rat_array[i])+(0.5*height*rat_calc_one),parseFloat(snake_array[i])+(0.5*height*snake_calc_one));
	  snake_calc_two=equationTwo(time+parseFloat(0.5*height),parseFloat(snake_array[i])+(0.5*height*snake_calc_one),parseFloat(rat_array[i])+(0.5*height*rat_calc_one));
	  rat_calc_three=equationOne(time+parseFloat(0.5*height),parseFloat(rat_array[i])+(0.5*height*rat_calc_two),parseFloat(snake_array[i])+(0.5*height*snake_calc_two));
	  snake_calc_three=equationTwo(time+parseFloat(0.5*height),parseFloat(snake_array[i])+(0.5*height*snake_calc_two),parseFloat(rat_array[i])+(0.5*height*rat_calc_two));
  	  rat_calc_four=equationOne(time+height,parseFloat(rat_array[i])+(height*rat_calc_three),parseFloat(snake_array[i])+(height*snake_calc_three));
	  snake_calc_four=equationTwo(time+height,parseFloat(snake_array[i])+(height*snake_calc_three),parseFloat(rat_array[i])+(height*rat_calc_three));
  	  rat_array[i+1] = parseFloat(rat_array[i])+ parseFloat(height/6)*parseFloat(rat_calc_one + parseFloat(2 * rat_calc_two) + parseFloat(2 * rat_calc_three) + rat_calc_four);
	  snake_array[i+1] = parseFloat(snake_array[i])+ parseFloat(height/6)*parseFloat(snake_calc_one + parseFloat(2 * snake_calc_two) + parseFloat(2 * snake_calc_three) + snake_calc_four);
	  time_array[i]=time;
	}
	time=parseFloat(time+height);
  }
  /** _return_val_eqn_one=(0.04*R)- (0.0005*R*S) */
  function equationOne(t,R,S) {
	var _return_val_eqn_one=parseFloat(a*R)-parseFloat(b*R*S);	
	return _return_val_eqn_one;
  }
  /** _return_val_eqn_two=(0.1*0.0005*R*S)- (0.2*S) */
  function equationTwo(t,S,R) {
	var _return_val_eqn_two=parseFloat(e * b * R * S) - parseFloat(c * S);
	return _return_val_eqn_two;
  }
  /** Function for clear canvas */
  function clearCanvas(){
	ctx_rat.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());
    ctx_snake.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());	
  }
  /** Function for clear all values */  
  function clearAllValues() {
	$("#goStep").val(""); 
    $("#statLabel").css("display","none");
	$("#Statistics").css("color","#6e6e6e");
    $("#tinyGraphArea").css("display","none");
    $("#top").css("display","none");
    $("#left").css("display","none");
    $("#bottom").css("display","none");
    $("#stepRun").prop("disabled",false);
    $("#runIteration").prop("disabled",false);
    $("#Pause").prop("disabled",true);
    $("#ReSet").prop("disabled",false);
    clearInterval(run_iteration_timer);
    clearInterval(draw_rat_timer);
    clearInterval(draw_snake_timer);    
    stat_rats_int=0;
    stat_time_int=0;
    stat_snakes_int=0;
    count_rat_int=0;
    count_snake_int=0;
    show_graph_int=0;
    stat_show_int=0;
    step_count_int=0;
    select_iteration_int=0;
    timer_current_count_int=0;
    worksheet_show_int=0;
    prev_item_int=0;
    timevar_dis_int=0.1;
    timevar_con_int=2;
    time_diff_dis_float=0;
    time_diff_con_float=0;
    num_prev_item_float=0;
    num_item_float=0;
    time=0;
    height=10;
    rat_calc_one=0;
    snake_calc_one=0;
    rat_calc_two=0;
    snake_calc_two=0;
    rat_calc_three=0;
    snake_calc_three=0;
    rat_calc_four=0;
    snake_calc_four=0;
    a=0.04;
    b=0.0005; 
    c=0.2;
    e=0.1;
    goto_steps_int=0;
    step_flag=0;
    rand_y_rat_float=0;
    rand_y_snake_float=0;
	prev_rat_population_int=0;
	prev_snake_population_int=0;
	prev_noof_steps_int=0;
	prev_step_size_int=0;
    x_array= [];
    y_array= [];
    array_snake_X=[];
    chart_category_names_array=[];
    chart_data_provider_array=[];
    chart_data_provider_array1=[];
    plot_array=[];
    plot_array1=[];
    snake_array=[];
    rat_array=[];
    time_array=[];    
    dataPlotArray=[];
    dataPlotArray1=[];	
  }