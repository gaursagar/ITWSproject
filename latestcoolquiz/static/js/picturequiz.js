console.log("here")
document.addEventListener("load", readTextFile("http://127.0.0.1:8000/coolquiz/static/js/data/picturequiz.csv"))

var correct = 0
var incorrect = 0
var attempted = 0
var totalhints = 0
var score = 0

var pixelations1 = 
{
      '1' : [
          { shape: 'diamond', resolution: 98, size: 200, offset: 0, alpha: 0.991 },
          { shape: 'circle', resolution: 20, size: 19, offset: 0, alpha: 0.991 }
      ],
      '2' : [
          { shape : 'square', resolution : 48 },
          { shape : 'diamond', resolution : 12, size: 8 },
          { shape : 'diamond', resolution : 12, size: 8, offset : 6 },
      ],
      '3' : [
        { resolution: 96 },
        { shape : 'circle', resolution : 32, offset: 15 },
        { shape : 'circle', resolution : 32, size: 26, offset: 13 },
        { shape : 'circle', resolution : 32, size: 18, offset: 10 },
        { shape : 'circle', resolution : 32, size: 12, offset: 2500 }
      ],
      '4' : [
        { shape: 'diamond', resolution: 14, size: 27, offset: 15, alpha: 0.991 },
        { shape: 'circle', resolution: 50, size: 48, offset: 0, alpha: 0.651 },
        { shape: 'circle', resolution: 50, size: 23, offset: 8, alpha: 0.501 },
        { shape: 'circle', resolution: 50, size: 11, offset: 8, alpha: 0.441 }
      ],
      '5' : [
        { shape: 'square', resolution: 32, size: 30, offset: 0, alpha: 0.561 },
        { shape: 'diamond', resolution: 32, size: 20, offset: 5, alpha: 0.501 }],
      '6' : [
        { shape: 'diamond', resolution: 24, size: 25 },
        { shape: 'diamond', resolution: 24, offset: 12 },
        { resolution: 24, alpha: 0.5 }
      ],
      '7' : [
        { shape: 'square', resolution: 32 },
        { shape: 'circle', resolution: 32, offset: 16 },
        { shape: 'circle', resolution: 32, offset: 0, alpha: 0.5 },
        { shape: 'circle', resolution: 16, size: 9, offset: 0, alpha: 0.5 }
      ],
      '8' : [        
        { shape: 'circle', resolution: 32, size: 180, offset: 0, alpha: 0.241 },
        { shape: 'diamond', resolution: 8, size: 10, offset: 0, alpha: 0.391 },
        { shape: 'circle', resolution: 52, size: 30, offset: 0, alpha: 0.261 },
        { shape: 'circle', resolution: 40, size: 15, offset: 0, alpha: 0.471 }
      ],
      '9' : [
        { shape : 'square', resolution : 48, offset: 24 },
        { shape : 'circle', resolution : 48, offset : 0 },
        { shape : 'diamond', resolution : 16, size: 15, offset : 0, alpha : 0.6 },
        { shape : 'diamond', resolution : 16, size: 15, offset : 8, alpha : 0.6 }
      ],
      '10' : [
        { shape : 'square', resolution : 48 },
        { shape : 'diamond', resolution : 12, size: 8 },
        { shape : 'diamond', resolution : 12, size: 8, offset : 6 },
      ]
}

var pixelations2 = 
{
      '1' : [
          { shape: 'diamond', resolution: 16, size: 200, offset: 0, alpha: 0.991 },
          { shape: 'circle', resolution: 16, size: 19, offset: 0, alpha: 0.991 }
      ],
      '2' : [
          { shape : 'square', resolution : 24 },
          { shape : 'diamond', resolution : 12, size: 8 },
      ],
      '3' : [
          { shape : 'circle', resolution : 20, offset: 4 },
          { shape : 'circle', resolution : 32, size: 26, offset: 13 },
      ],
      '4' : [
          { shape: 'diamond', resolution: 14, size: 27, offset: 15, alpha: 0.991 },
          { shape: 'circle', resolution: 20, size: 48, offset: 0, alpha: 0.651 },
      ],
      '5' : [
        { shape: 'square', resolution: 24, size: 30, offset: 0, alpha: 1 },
        { shape: 'diamond', resolution: 24, size: 20, offset: 5, alpha: 1 }
      ],
      '6' : [
          { shape: 'diamond', resolution: 16, size: 0 },
          { shape: 'diamond', resolution: 20, offset: 5 },
      ],
      '7' : [
          { shape: 'square', resolution: 4 },
          { shape: 'circle', resolution: 24, offset: 16 },
          { shape: 'circle', resolution: 24, offset: 0, alpha: 0.5 },
      ],
      '8' : [        
          { shape: 'circle', resolution: 32, size: 180, offset: 0, alpha: 0.241 },
          { shape: 'diamond', resolution: 8, size: 10, offset: 0, alpha: 0.391 },
      ],
      '9' : [
        { shape : 'square', resolution : 20, offset: 24 },
        { shape : 'circle', resolution : 20, offset : 0 },
      ],
      '10' : [
        { shape : 'square', resolution : 24 },
        { shape : 'diamond', resolution : 12, size: 8 },
      ]
}

function resetPage(dataArray)
{
  var imageNumber = Math.floor((Math.random()*15)+1) + ''
  document.getElementById('attempted').innerHTML = attempted
  document.getElementById('correct').innerHTML = correct
  var score = (correct * 25) - (5 * totalhints)
  document.getElementById('score').innerHTML = score
  document.getElementById('questionspace').innerHTML = dataArray[imageNumber-1][0]
  document.getElementById('imagespace').innerHTML = IMG(_src='http://127.0.0.1:8000/coolquiz/static/picturequizImages/'+imageNumber+'.jpg')
  //console.log(imageNumber)
  document.getElementById('options').innerHTML = '<div id = option1>'+dataArray[imageNumber-1][1]+'</div><div id = option2>'+dataArray[imageNumber-1][2]+'</div><div id = option3>'+dataArray[imageNumber-1][3]+'</div><div id = option4>'+dataArray[imageNumber-1][4]+'</div>'
  var image = new Image()
  image.src = IMG(_src='http://127.0.0.1:8000/coolquiz/static/picturequizImages/'+imageNumber+'.jpg')
  key = Math.floor((Math.random()*10)+1) + ''
  image.onload = function(){pixelate(pixelations1,key)}
  attempted ++
  checkcorrect(dataArray,imageNumber,key)
}

function pixelate(pixelations,key)
{
  var img = document.getElementById('questionimage')
  options = pixelations[key]
  //console.log(key)  
  if ( img ) 
  { 
    img.closePixelate(options)
  }
}

function checkcorrect(dataArray,imageNumber)
{
  var hints = 0
$(document.body).click(function(evt){
        var clicked = evt.target
        console.log(evt.target.id)
        console.log(dataArray[imageNumber-1][5])
        var currentID = clicked.id
        if(currentID[0] == "o")
        {
           if(currentID == dataArray[imageNumber-1][5])
           {
              console.log("correct")
              correct++
            }
            else
            {
              incorrect++
              console.log("incorrect")
            }
            $(document.body).off('click');
            totalhints = totalhints + hints
            resetPage(dataArray)
        }
        if((currentID == "clear")&&(hints == 0))
        {
          hints++
          document.getElementById('imagespace').innerHTML = IMG(_src='http://127.0.0.1:8000/coolquiz/static/picturequizImages/'+imageNumber+'.jpg')
          var image = new Image()
          image.src = IMG(_src='http://127.0.0.1:8000/coolquiz/static/picturequizImages/'+imageNumber+'.jpg')
          image.onload = function(){pixelate(pixelations2,key)}
          currentID = ""
        }

        if((currentID == "clear")&&(hints == 1))
        {
          hints = hints + 2
          document.getElementById('imagespace').innerHTML = IMG(_src='http://127.0.0.1:8000/coolquiz/static/picturequizImages/'+imageNumber+'.jpg')
          currentID = ""
        }
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
    dataArray = $.csv.toArrays(data)
    resetPage(dataArray)
}
