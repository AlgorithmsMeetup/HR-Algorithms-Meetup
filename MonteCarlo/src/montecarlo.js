/*
  YOUR TASK:  To fill in the following function.

  --- BASIC REQUIREMENTS ---
    * It should return a number equal to the area of the shape.

  --- EXTRA CREDIT ---
    * Have the algorithm only halt after a certain degree of precision has been reached.
    * Refine your algorithm to choose points in a "smarter" fashion.
    * Dig into base.js and improve performance there.

  --- AVAILABLE METHODS ---

    The following methods are available to you in the global scope:

      evalPoint: function(x, y)
        -- Returns "true" if a point is inside the shape, and false otherwise.

      getGraphDimensions: function()
        -- Returns an objects with the dimensions of the graph.
        -- Has properties x and y, each of which has properties min and max.
           (ex. { x:{min: 3, max: 10}, y:{min:-5, max: 6} })

  --- SOME THINGS TO THINK ABOUT ---
    * Which shapes are easier/harder to integrate?
    * What ratio of window size to shape size maximizes accuracy?
    * 
*/

var integrate = function() {

  var totalPoints = 1001;
  var counter = totalPoints;
  var dimensions = getGraphDimensions();
  var width = dimensions.x.max - dimensions.x.min;
  var height = dimensions.y.max - dimensions.y.min;
  var area = width * height;
  var hits = 0;


  while (counter--) {
    var x = Math.random() * width + dimensions.x.min;
    var y = Math.random() * height + dimensions.y.min;
    var inside = evalPoint(x, y);
    if (inside) {
      hits++;
    }
  }

  var hitsRatio = hits / totalPoints;

  return hitsRatio * area;
};





