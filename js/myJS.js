// -created by Henry

// i dont need
var today = new Date();

// variable needed
var totalSecs = 0;
var runIt, timeAni;
var oneClick = 0;



function countTimer(){
	// add one tick/number
	totalSecs++;
	// calculations
	var hr = Math.floor(totalSecs/3600);
	var min = Math.floor((totalSecs - hr * 3600)/60);
	var sec = totalSecs - (hr*3600 + min * 60);

	/* condionatl operator
	 * it assigns a value to the variable
	 * ex: voteable = (age < 18) ? "Too young":"Old enough";
	 * think of it as either this or either that
	 */
	sec = sec < 10 ? '0' + sec : sec;
	min = min < 10 ? '0' + min : min;
	hr = hr < 10 ? '0' + hr : hr;

	// change dWatch text 
	$('#dWatch').text(hr + ":" + min + ":" + sec);// + ":" + milSec);
}

function stopTimer(){
	clearInterval(runIt);
	for(var i=0; i<3; i++) {
    	$('#dWatch').fadeTo('fast', 0.5).fadeTo('slow', 1.0);
  	}
  	oneClick = 0;
}

function resetTimer(){
	clearInterval(runIt);
	totalSecs = 0;
	oneClick = 0;
	$('#dWatch').text("00:00:00");
	$('#dWatch').fadeTo('fast', 0.5).fadeTo('slow', 1.0);
  	
}

function startTimer(){
	oneClick++;	
	if(oneClick > 1){
		// do nothing
	}
	else{
		$('#dWatch').stop();
		runIt = setInterval(countTimer, 1000);
		$('.aniBar').css('opacity', '1');
		$('.aniBar').animate({	width: '200px'	}, 500);
		$('.aniBar').animate({	opacity: '0'	}, 1000, function(){
			$('.aniBar').css('opacity', '0');
			$('.aniBar').css('width', '0px');
		});
	}
}

function idelAni(){
	$('#dWatch').animate({	color: "#f00"	}, 1000);
	$('#dWatch').animate({	color: "#0f0"	}, 1000);
	$('#dWatch').animate({	color: "#00f"	}, 1000, function(){
		$('#dWatch').css('color', '#fff');
	});
	console.log('idel');
}

$(document).ready(function(){
	// Month,Day,Year,Hour,Minute,Second
  	//var upTime('jan,01,2014,00:00:00');
  	$('#dWatch').text("00:00:00");


  	//textAni = setInterval(idelAni, 2000);

});
