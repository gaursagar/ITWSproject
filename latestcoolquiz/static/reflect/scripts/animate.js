	var ww;
	var wh; 
	var n;
	var turns;
	var turns1;
	var blueCircleAnimation;
	var flag;
	var flag1;
	var flag2;
	var count=0;
	var moveHorizontalDiv1;
	var moveHorizontalDiv2;
	var moveVerticalDiv1;
	var moveVerticalDiv2;
	var flagPause;
	var mult=2;
	var flag3=0;
	var high=0;

function init() {
	ww = 750;
	wh = 400; 
	n = Math.floor((Math.random()*10)+1);
	n=n%5;
	n=n+4;
	turns = ww/n
	turns1 = wh/75
	blueCircleAnimation = null
	n = Math.floor((Math.random()*10)+1);
	n=n%2
	flag=n;
	flag1=0;
	flag2=0;
	flag3=0;
	moveHorizontalDiv1 = document.getElementById("movingHorizontalDiv1");
	moveHorizontalDiv2 = document.getElementById("movingHorizontalDiv2");
	moveVerticalDiv1 = document.getElementById("movingVerticalDiv1");
	moveVerticalDiv2 = document.getElementById("movingVerticalDiv2");
	flagPause=0;
}

function check() {
	flag3=1;
    var div = document.getElementById("level0");
    div.innerHTML += "Score :<br>" + count + "<br><div id = 'xyz' onclick='window.location.reload();'>Play Again</div><br><div id = 'xyz1' onclick=\"document.forms['scoreform'].submit()\">Submit Score</div>";
    document.getElementById("level0").style.display = 'block';
    document.getElementById("start").style.display = 'none';
    document.getElementById("pause-resume").style.display = 'none';
    if(high<count) high=count;
    console.log(high);
}

function animateBlueCircle() 
{
	var div = document.getElementById("score");
    div.innerHTML = "Score : " + count;
    var div = document.getElementById("level");
    div.innerHTML = "Level : " + Math.floor(count/10+1);
    var circle = document.getElementById("circle-blue")
    var pos = turns * mult  
    var cw = circle.scrollWidth
    circle.style.left = pos + "px"
    var pos1 = turns1 * mult
    circle.style.top = pos1 + "px"
    
    if (flag==0 && flag1==0) // Right-Down
    {
    	if(pos1 + cw + 6 < wh && pos + cw + 6 < ww) 
    	{
        	if(flag2==0) blueCircleAnimation = requestAnimationFrame(animateBlueCircle)
    	}
    	else if(pos + cw + 6 >= ww)
    	{
    		if(((parseInt(moveVerticalDiv2.style.top, 10)<=pos1) && (parseInt(moveVerticalDiv2.style.top, 10)+150>=pos1)))
        	{
        		flag=1; flag1=0; count++; 
        		if(count!=0 && count%10==0) 
        		{
        			document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);	        		
        		} 
        	if(flag2==0) animateBlueCircle();
        	}
        	else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
	    else
	    {
	    	if(((parseInt(moveHorizontalDiv2.style.left, 10)<=pos) && (parseInt(moveHorizontalDiv2.style.left, 10)+150>=pos)))
	    	{	
	    		flag=0; flag1=1; count++; 
	    		if(count!=0 && count%10==0) 
	    		{
	    			document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	    		} 
	    	if(flag2==0) animateBlueCircle();
	    	}
	    	else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
    } 
    else if(flag==1 && flag1==0) // Left-Down
    {
	    if(pos > 6 && pos1 + cw + 6 < wh)
	    {   
	        if(flag2==0) blueCircleAnimation = requestAnimationFrame(animateBlueCircle)
	    }
	    else if(pos1 + cw + 6 >= wh)
	    {
	    	if(((parseInt(moveHorizontalDiv2.style.left, 10)<=pos) && (parseInt(moveHorizontalDiv2.style.left, 10)+150>=pos)))
	        {
	        	flag=1; flag1=1; count++; 
	        	if(count!=0 && count%10==0) 
	        	{
	        		document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	        	} 
	        if(flag2==0) animateBlueCircle();
	        }
	        else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
	    else
	    {
	    	if(((parseInt(moveVerticalDiv1.style.top, 10)<=pos1) && (parseInt(moveVerticalDiv1.style.top, 10)+150>=pos1)))
	    	{
	    		flag=0; flag1=0; count++; 
	    		if(count!=0 && count%10==0) 
	    		{
	    			document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	    		} 
	    		if(flag2==0) animateBlueCircle();
	    		}
	    	else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
    }
    else if(flag==1 && flag1==1) // Left-Up
    {
	    if(pos1 > 6 && pos > 6)
	    {   
	        if(flag2==0) blueCircleAnimation = requestAnimationFrame(animateBlueCircle)
	    }
	    else if(pos <= 6)
	    {
	    	if(((parseInt(moveVerticalDiv1.style.top, 10)<=pos1) && (parseInt(moveVerticalDiv1.style.top, 10)+150>=pos1)))
	        {
	        	flag=0; flag1=1; count++; 
	        	if(count!=0 && count%10==0) 
	        	{
	        		document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	        	} 
	        	if(flag2==0) animateBlueCircle();
	        	}
	        else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
	    else
	    {
	    	if(((parseInt(moveHorizontalDiv1.style.left, 10)<=pos) && (parseInt(moveHorizontalDiv1.style.left, 10)+150>=pos)))
	    	{
	    		flag=1; flag1=0; count++; 
	    		if(count!=0 && count%10==0) 
	    		{
	    			document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	    		} 
	    		if(flag2==0) animateBlueCircle();
	    		}
	    	else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
    }
    else if(flag==0 && flag1==1)
    {
	    if(pos1 > 6 && pos + cw + 6 < ww)
	    {   
	        if(flag2==0) blueCircleAnimation = requestAnimationFrame(animateBlueCircle)
	    }
	    else if(pos1 <= 6)
	    {
	    	if(((parseInt(moveHorizontalDiv1.style.left, 10)<=pos) && (parseInt(moveHorizontalDiv1.style.left, 10)+150>=pos)))
	        {	
	        	flag=0; flag1=0; count++; 
	        	if(count!=0 && count%10==0) 
	        	{
	        		document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	        	} 
	        	if(flag2==0) animateBlueCircle();
	        	}
	        else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
	    else
	    {
	    	if(((parseInt(moveVerticalDiv2.style.top, 10)<=pos1) && (parseInt(moveVerticalDiv2.style.top, 10)+150>=pos1)))
	    	{
	    		flag=1; flag1=1; count++; 
	    		if(count!=0 && count%10==0) 
	    		{
	    			document.getElementById("circle-blue").style.display = 'none';
	        		document.getElementById("levelup").style.display = 'block';
	        		setTimeout(function(){document.getElementById("levelup").style.fontSize = '25px';setTimeout(function(){document.getElementById("levelup").style.fontSize = '30px';setTimeout(function(){document.getElementById("levelup").style.display = 'none';document.getElementById("levelup").style.fontSize = '20px';init();mult+=0.4;document.getElementById("circle-blue").style.display = 'block';},333);},333);},333);
	    		} 
	    		if(flag2==0) animateBlueCircle();
	    		}
	    	else
	    	{document.getElementById("circle-blue").style.display = 'none'; check();}
	    }
    } 
    
    if(flag==0 && flag1==0) {++turns; ++turns1;}
    if(flag==1 && flag1==0) {--turns; ++turns1;}
    if(flag==1 && flag1==1) {--turns; --turns1;}
    if(flag==0 && flag1==1) {++turns; --turns1;}
}

function animate() {
    animateBlueCircle()
}

function main() {
	init();
	document.getElementById("start").style.display = 'none';
	document.getElementById("pause-resume").style.display = 'block';
	document.getElementById("circle-blue").style.display = 'block';
    if (window.requestAnimationFrame) requestAnimationFrame(animate)
}
flag4 = 0
function changecolor() {
	if (flag4%2)
	{
		document.getElementById("pause-resume").style.background = "#01A9DB";
		document.getElementById("pause-resume").style.borderColor = "#A9E2F3";
	}
	else
	{	
		document.getElementById("pause-resume").style.background = "#A9E2F3";
		document.getElementById("pause-resume").style.borderColor = "#01A9DB";	
	}
	flag4++
}

var myVar;

function stopFunction() {
	clearInterval(myVar);
}

function toggle() {
	if(flag2==0) 
	{	
		document.getElementById("pause-resume").style.background = "#01A9DB";
		document.getElementById("pause-resume").style.borderColor = "#A9E2F3";
		myVar=setInterval(function(){changecolor();},1000);
		document.getElementById("pause-resume").value='Resume'; 
		document.getElementById("pause-resume").style.padding = "33px 10px 33px 10px";
		flag2=1;
	} 
	else 
	{	
		flag4=0;
		stopFunction();
		document.getElementById("pause-resume").style.background = "#A9E2F3";
		document.getElementById("pause-resume").style.borderColor = "#01A9DB";
		document.getElementById("pause-resume").value='Pause'; 
		document.getElementById("pause-resume").style.padding = "33px 25px 33px 25px";
		flag2=0; 
		animateBlueCircle();
	}
}		

window.onload = function () {
			
			window.onkeydown = function(e) {
		
				e.preventDefault();
				if (!e)
				{
					e = window.event;
				}
				var keyCode;
				// pixel wise speed variable
				var speed = 30;       
				if(e.which) {
					keyCode = e.which;
				} else {
					keyCode = e.keyCode;
				}
			if(keyCode === 13) {if(flag3==0) main(); else animateBlueCircle();}
			if(keyCode === 16) toggle(); // Right-shift to pause-resume
			if(flag2==0)
			{
		//increment/decrement the top or left of the div based on the arrow key movements
				if(keyCode === 37 && (parseInt(moveHorizontalDiv1.style.left, 10) - speed + 10)>0) {
					moveHorizontalDiv1.style.left = (parseInt(moveHorizontalDiv1.style.left, 10) - speed) + 'px';
					moveHorizontalDiv2.style.left = (parseInt(moveHorizontalDiv2.style.left, 10) - speed) + 'px';
				} else if (keyCode === 38 && (parseInt(moveVerticalDiv1.style.top, 10) - speed + 4)>0) {
					moveVerticalDiv1.style.top = (parseInt(moveVerticalDiv1.style.top, 10) - speed - 1) + 'px';
					moveVerticalDiv2.style.top = (parseInt(moveVerticalDiv2.style.top, 10) - speed - 1) + 'px';
				} else if (keyCode === 39 && (parseInt(moveHorizontalDiv1.style.left, 10) + speed - 10)+150<750) {
					moveHorizontalDiv1.style.left = (parseInt(moveHorizontalDiv1.style.left, 10) + speed) + 'px';
					moveHorizontalDiv2.style.left = (parseInt(moveHorizontalDiv2.style.left, 10) + speed) + 'px';
				} else if (keyCode === 40 && (parseInt(moveVerticalDiv1.style.top, 10) + speed - 6)+150<400) {
					moveVerticalDiv1.style.top = (parseInt(moveVerticalDiv1.style.top, 10) + speed + 1) + 'px';
					moveVerticalDiv2.style.top = (parseInt(moveVerticalDiv2.style.top, 10) + speed + 1) + 'px';
				}
			}
			};
		};
