document.addEventListener("load", readTextFile("file:///ug/ug2k13/cnd/sagar.gaur/scratchpad/realthing/file.txt"))


function shuffle(o)
{
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o
}

function writeText(allText)
{
    shuffledText = shuffle(allText.split(" "))
    console.log(shuffledText)
    document.getElementById("b1").innerHTML =shuffledText[0]
    document.getElementById("b2").innerHTML =shuffledText[1]
    document.getElementById("b3").innerHTML =shuffledText[2]
    document.getElementById("b4").innerHTML =shuffledText[3]
    document.getElementById("b5").innerHTML =shuffledText[4]
    document.getElementById("b6").innerHTML =shuffledText[5]
    document.getElementById("b7").innerHTML =shuffledText[6]
    document.getElementById("b8").innerHTML =shuffledText[7]
    document.getElementById("b9").innerHTML =shuffledText[8]

    timesClicked = 0
    var clickOrder = new Array()

    $(document.body).click(function(evt){
        var clicked = evt.target
        //console.log(evt.target.id)
        var currentID = clicked.id
        timesClicked++
        clickOrder.push(document.getElementById(currentID).innerHTML)              
        if(timesClicked == 9)
        {
            if (clickOrder.join(" ") == allText)
                alert("launde!!")
            else
                alert("dont make the same mistake your father has made")
            timesClicked = 0
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
                allText = rawFile.responseText;
                console.log("Successfully Read")
                writeText(allText)
            }
        }
    }
    rawFile.send(null);
}