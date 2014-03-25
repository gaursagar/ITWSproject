document.addEventListener("load", readTextFile("file:///ug/ug2k13/cnd/sagar.gaur/scratchpad/realthing/file.csv"))

function resetPage(dataArray)
{
    document.getElementById("counter").innerHTML = "0"
    clearInterval(window.timerID)
    clearInterval(window.flashfunction)
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
            //writeText(dataArray[Math.random() * dataArray.length])
            writeText(dataArray)
        }
    })
}

function shuffle(o)
{
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o
}

function writeText(allText)
{
    //console.log(allText)
    $(document.body).off('click')
    correctText = allText[Math.floor(Math.random() * dataArray.length + 0)]
    shuffledText = correctText.slice(0)
    shuffledText = shuffle(shuffledText)
    console.log(shuffledText)
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
            $('#timer').text(((new Date - start) / 1000).toFixed(2));
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

            document.getElementById("counter").innerHTML =timesClicked
            
            if(timesClicked == 9)
            {
                console.log(clickOrder.join(" "))
                console.log(correctText.join(" "))
                if (clickOrder.join(" ") == correctText.join(" "))
                    alert("launde!!")
                else
                    alert("dont make the same mistake your father has made")
                $(document.body).off('click');
                resetPage(allText)
           }
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

function readBeta(allText)
{
    //console.log("here")
    dataArray = $.csv.toArrays(data)
    resetPage(dataArray)
    //console.log(window.data)
}