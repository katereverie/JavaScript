## document.getElementById() vs. document.querySelector()
As the method names suggest, the former targets HTML elements by its id while the latter targets a selector.
But what is a selector? For now, just remember that you can use `.querySelector` to target classes. 
Since class names start with `.` in CSS, you must not forget to add `.` to the class name defined in HTML. 

```
<!-- compare: -->
const startBtn = document.getElementById("start-btn");
const startScreen = document.querySelector(".start-screen");
const checkpointMessage = document.querySelector(".checkpointMessage > p")
<!-- The last one targets the p element as a child of the parent element with the class name "checkpointMessage" -->
```

## working with objects
- If the property/key name and its value are the same, you can use a shorthand syntax to avoid explicity assigning the value.
```
obj = {
  a, b, c
}
```
The following code is the same as:
```
obj = {
  a: a,
  b: b,
  c: c
}
```

## the *Canvas API*
Can be used to create graphics in games using JS and the HTML `canvas` element.
Also, you'll need to use the `getContext` method to provide the context for where the graphics will be rendered.
Syntax: 
```
canvas.getContext("2D");
``` 

### canvas.width
is a positive number that represents the width of the canvas.
### innerWidth
the `innerWidth` property is a number that represents the interior width of the *broswer window*!
### innerHeight
similar to `innerWidth`.
### canvasVariable.fillStyle = ...
### canvasVariable.fillRect(x, y, width, height)

## `requestAnimationFrame()` web API
takes a callback and is used to update the animation on screen.
This is how players' positions are updated in real time. 
## `clearRect(x, y, width, height)` web API
takes four arguments as shown above. 
You can call this method on a canvas object to update players' motion attributes.

## How to represent gravity in platformers?

## How to design a platformer in which the size of the elements in the game are *responsive* and *adapt* to different *screen sizes*?

## How to manage players' movement?
1. monitor when the left and right keys are pressed
2. how to monitor keys? Create a keys object to track whether it is true that the left or the right key is pressed. 
3. Use switch cases to manage each key relevant for movement changes.

## How to create platform and platform logic?
1. create a Platform class
2. create a constructor with x, y as parameters. 
3. Inside the constructor, create a position, width, height variable, and assign a position object with x, y as two key/value pairs to the position var, 200 (in this case) to width var, and proportionalSize(40) to height var.
4. Below the constructor method, create a draw method. Inside the draw method, create style and a rectangle using `.fillStyle` and `.fillRect`. The latter should take x, y, width, height as arguments. 
5. Outside the Platform class, create a list of positions for the platforms, with a list of objects that contain x, y positions. 
6. Pass in each object's property value (x and y) in the platform position list to Platform class using `.map()`, and store them in a const var called platforms array since `.map()` returns an array. Note that each element of the array is an instance object of the Platform class. 
7. Animate the instance objects by calling `.draw()` on each one of them using `.forEach()`, since each instance object is stored in an array. 
8. Since the player may move to the right/left edge of the screen, you need to check whether that is the case. So, add a if statement to check that, and update platform positions accordingly.
9. Players need to land *on* the platform. Add collision detection logic to the game. How?
10. Call `forEach` on the platforms array inside the animate function. 
11. Declare a const array var named collisionDetectionRules to store different rules (boolean expressions) to account for different situation of interactions between the player and the platform.

