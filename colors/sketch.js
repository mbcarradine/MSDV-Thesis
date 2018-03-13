
function setup() {
    createCanvas(500  , 500);
    // background(200);
    noStroke()

    // we'll be drawing three columns, each a third of the canvas wide
    var col = width/3

    // on the left, draw a gradient with 9 shades drawn from the red sequential palette
    var seq = Brewer.sequential('Reds', 9, 0, 1000) // (paletteName, numColors, minValue, maxValue)
    console.log('sequential palette:', seq.colors)
    for (var i=0; i<1000; i++){
        fill(seq.colorForValue(i))
        rect(0,i, col,i+1)
    }

    // in the middle, draw a gradient with 'infinite' (i.e., interpolated) shades drawn from
    // the red-yellow-green divergent palette
    var divg = Brewer.divergent('RdYlGn', Infinity, 0, 500, 1000) // (paletteName, numColors, minValue, midpoint, maxValue)
    console.log('divergent palette:', divg.colors)
    for (var i=0; i<1000; i++){
        fill(divg.colorForValue(i))
        rect(col,i, col,i+1)
    }

    // define the full set of categories in a list then make another list that's 1000 items long
    // where each element is a random selection from the `cats` list
    var cats = ['water', 'air', 'fire', 'earth']
    var vals = []
    while(vals.length<1000){
        vals.push(cats[floor(random(cats.length))])
    }


    // on the right, draw the items from the randomly assembled list as horizontal bars using the
    // shades from the 'paried' qualitative palette (note the light & dark shades of green & blue)
    var qual = Brewer.qualitative('Paired', cats)
    console.log('qualitative palette:', divg.colors)
    console.log('qualitative data:', vals)
    for (var i=0; i<1000; i++){
        fill(qual.colorForValue(vals[i]))
        rect(2*col,i, col,i+1)
    }
}

