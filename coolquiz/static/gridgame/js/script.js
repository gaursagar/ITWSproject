document.addEventListener("load", readTextFile("data/data.csv"))

var score = 0
var correct = 0
var incorrect = 0
var time = 0
var totaltime = 0
var asked = new Array()

function scoreflash()
{
  alert("finished")
  console.log(correct)
  console.log(incorrect)
  console.log(totaltime)
  score = (20*correct - Math.floor(parseInt(totaltime))- 5*incorrect)
  document.scoreform.score.value = score;
  var div = document.getElementById('form')
  div.innerHTML = div.innerHTML + '<input id="bigbutton" type="submit" value="Submit Score" />YOU LOSE' 
}

function resetPage(dataArray)
{

    document.getElementById("counter").innerHTML = "0"
    clearInterval(window.timerID)
    clearInterval(window.flashfunction)
    if ((incorrect == 3) || (asked.length == dataArray.length))
        scoreflash()
    document.getElementById('incorrect').innerHTML = incorrect
    document.getElementById('correct').innerHTML = correct
    document.getElementById('totaltime').innerHTML = totaltime
    document.getElementById("x1").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x2").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x3").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x4").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x5").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x6").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x7").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x8").style.background = "rgba(102, 153, 147, 0.5)"
    document.getElementById("x9").style.background = "rgba(102, 153, 147, 0.5)"
    
    document.getElementById("timer").innerHTML ="Start"
    document.getElementById("question").innerHTML = ""
    document.getElementById("x1").innerHTML =""
    document.getElementById("x2").innerHTML =""
    document.getElementById("x3").innerHTML =""
    document.getElementById("x4").innerHTML =""
    document.getElementById("x5").innerHTML =""
    document.getElementById("x6").innerHTML =""
    document.getElementById("x7").innerHTML =""
    document.getElementById("x8").innerHTML =""
    document.getElementById("x9").innerHTML =""
    
    $(document.body).click(function(evt)
    {
        if(evt.target.id == "timer")
        {
            writeText(dataArray)
        }
    })
}

function shuffle(o)
{
    for(var j, x, i = o.length-1; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o
}

function randomindex(dataArray)
{

    randomno = Math.floor(Math.random() * dataArray.length + 0)
    while (asked.indexOf (randomno) != -1)
    {
        console.log("randomgen")
        if (asked.indexOf (randomno) == -1)
        {
            break
        }
        else
            randomno = Math.floor(Math.random() * dataArray.length + 0)
    }
    asked.push(randomno)
    return randomno
}

function writeText(dataArray)
{
    //console.log(dataArray)
    $(document.body).off('click')
    //correctText = dataArray[Math.floor(Math.random() * dataArray.length + 0)]
    correctText = dataArray[randomindex(dataArray)]
    shuffledText = correctText.slice(0)
    shuffledText = shuffle(shuffledText)
    console.log(shuffledText)
    document.getElementById('attempted').innerHTML = asked.length
    document.getElementById("question").innerHTML =shuffledText[9]
    document.getElementById("x1").innerHTML =shuffledText[0]
    document.getElementById("x2").innerHTML =shuffledText[1]
    document.getElementById("x3").innerHTML =shuffledText[2]
    document.getElementById("x4").innerHTML =shuffledText[3]
    document.getElementById("x5").innerHTML =shuffledText[4]
    document.getElementById("x6").innerHTML =shuffledText[5]
    document.getElementById("x7").innerHTML =shuffledText[6]
    document.getElementById("x8").innerHTML =shuffledText[7]
    document.getElementById("x9").innerHTML =shuffledText[8]

    timesClicked = 0
    if(timesClicked == 0)
    {
        var start = new Date;
        window.timerID = setInterval(function()
        {   
            time = ((new Date - start) / 1000).toFixed(2)
            $('#time').text(time);
        }, 50);
    }

    var clickOrder = new Array()

    $(document.body).click(function(evt){
        var clicked = evt.target
        console.log(evt.target.id)
        var currentID = clicked.id
        if(currentID[0] == "x")
        {
            timesClicked++

            clickOrder.push(document.getElementById(currentID).innerHTML)
            document.getElementById(currentID).style.background = "rgba(102, 153, 147, 1)"
            
            window.flashfunction = setTimeout(function()
            {            
                document.getElementById(currentID).style.background = "rgba(212, 63, 87, 0.5)"
            },100)

            document.getElementById("counter").innerHTML = timesClicked
            
            if(timesClicked == 9)
            {
                console.log(clickOrder.join(" ")+" "+shuffledText[9])
                console.log(correctText.join(" "))
                if ((clickOrder.join(" ")+" "+shuffledText[9]) == correctText.join(" "))
                {  console.log("correct");  ++correct}
                else
                    {console.log("incorrect");++incorrect}
                totaltime = parseInt(totaltime) + time
                console.log(totaltime)
                time = 0
                $(document.body).off('click');
                resetPage(dataArray)
           }
    }
    else if(currentID == "pass")
    {
        time = 0
        $(document.body).off('click');
                resetPage(dataArray)
    }
        //alert(document.getElementById(currentID).innerHTML)
    })
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                data = rawFile.responseText;
                console.log("Successfully Read")
                readBeta(data)
            }
        }
    }
    rawFile.send(null);
}

function readBeta(data)
{
    console.log("here")
    dataArray = $.csv.toArrays(data)
    resetPage(dataArray)
    //console.log(window.data)
}
