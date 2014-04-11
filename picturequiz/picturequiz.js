document.addEventListener("load", readTextFile("file:///ug/ug2k13/cnd/sagar.gaur/scratchpad/picturequiz/data.csv"))

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var pixelations = 
{
      '1' : [
       // { shape : 'diamond', resolution : 48, size: 50 },
        //{ shape : 'diamond', resolution : 48, offset : 24 },
        
        { shape : 'diamond', resolution : 12, size: 8 },
        { shape : 'diamond', resolution : 12, size: 8, offset : 6 },
        { shape : 'circle', resolution : 10, size: 10 }
      ],
      '2' : [
       // { shape : 'diamond', resolution : 48, size: 50 },
        //{ shape : 'diamond', resolution : 48, offset : 24 },
        { shape : 'circle', resolution : 8, size: 6 }
      ],
      '3' : [
        { resolution: 96 },
        { shape : 'circle', resolution : 32, offset: 15 },
        { shape : 'circle', resolution : 32, size: 26, offset: 13 },
        { shape : 'circle', resolution : 32, size: 18, offset: 10 },
        { shape : 'circle', resolution : 32, size: 12, offset: 2500 }
      ],
      '4' : [
        { resolution: 48 },
        { shape: 'diamond', resolution: 48, offset: 12, alpha: 0.5  },
        { shape: 'diamond', resolution: 48, offset: 36, alpha: 0.5  },
        { shape: 'diamond', resolution: 16, size: 8, offset: 4, alpha: 0.5 }
      ],
      '5' : [
        { shape: 'circle', resolution: 32, size: 6, offset: 8 },
        { shape: 'circle', resolution: 32, size: 9, offset: 16 },
        { shape: 'circle', resolution: 32, size: 12, offset: 24 },
        { shape: 'circle', resolution: 32, size: 9, offset: 0 }
      ],
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
        { shape : 'circle', resolution : 24 },
        { shape : 'circle', resolution : 24, size: 9, offset: 12 }
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
      ],
      '11' : [
        { shape : 'square', resolution : 48 },
        { shape : 'diamond', resolution : 12, size: 8 },
        { shape : 'diamond', resolution : 12, size: 8, offset : 6 },
      ]
}
function resetPage(dataArray)
{
  var imageNumber = Math.floor((Math.random()*11)+1) + ''
  console.log(imageNumber)
  document.getElementById('questionImage').innerHTML = '<img id="image" src="img/'+imageNumber+'.jpg" />'
  document.getElementById('options').innerHTML = '<div id = option1>'+dataArray[imageNumber-1][1]+'</div><div id = option1>'+dataArray[imageNumber][2]+'</div><div id = option1>'+dataArray[imageNumber][3]+'</div><div id = option1>'+dataArray[imageNumber][4]+'</div>'
  //while(document.readyState != 'complete')
    //console.log('123')
  var image = new Image()
  image.src = 'img/'+imageNumber+'.jpg'
  image.onload = function() {console.log("loaded");pixelate()}
}

function pixelate() 
{
  //if (document.readyState === "complete")
  //{
 //   console.log('loaded');
 //   pixelate()
  //}
 // else
  //  pixelate()
  var img = document.getElementById('image')
  key = Math.floor((Math.random()*11)+1) + ''
  options = pixelations[key]
  console.log(key)
  if ( img ) 
  { 
    console.log('pixelate')
    img.closePixelate( options )
  }
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
    //console.log("here")
    dataArray = $.csv.toArrays(data)
    resetPage(dataArray)
    //console.log(window.data)
}