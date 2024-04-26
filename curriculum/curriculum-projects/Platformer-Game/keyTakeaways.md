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
12. Declare a const array var named platformDetectionRules, which should boolean expressions that check 
  - whether player's x position is greater than or equal to (platform's x position - half of player's width)
  - whether player's x position is less than or equal to (platform's x position + platform's width - 1/3 of player's width) ??? Visualize to see
  - whether player's y position + player's height is greater than or equal to platform's y position.
  - whether player's y position is less than or equal to platform's y position + platform's height
13. You need to check if every platform detection rule is true. Add an if statement to check that using `every()`. If every rule is true, meaning that player collides with the platform, add platform's y position + player's height to player's y position. This will determine the player's position on the y axis. Since the player is practically on the platform now, make sure that the gravity rule still applies to the player's velocity at the y axis by assigning gravity's value to player's y velocity. 

## What if the player reaches/collides with the checkpoint(s)? 
1. To start with, you must set checkpoints in the game. So, start by creating a CheckPoint class to create checkpoint instances.
2. What properties should each checkpoint instance have? First coming to mind: 
  I. position (x, y) on the screen; 
  II. width and height so that we can draw the checkpoint to make it visible to the eyes - or else checkpoints would reduce to a point on the screen. Also make sure that its width and height are proportional to the screen size. 
  III. a boolean value to confirm whether player/checkpoint collision takes place or not
3. Now we want to checkpoint instances appear on the screen, if there is nothing else to add to the constructor. 
  3.1. (Method name is up to you) Add, for example, `draw() {}` method to the class. Inside the curly brackets, remember to give each checkpoint instance a style by assigning a color scheme value to `canvasVariable.fillStyle`. 
  3.2. Besides style, each checkpoint instance also needs a shape. So, pass in each property of a checkpoint instance to `canvasVariable.fillRect()`. Remember: You are passing the properties of each unique instance. So, it's crucial to use `this` keyword. 
4. Now we want to collided checkpoint instance to disappear from the screen. A method should cover this functionality. 
  4.1. (the method name is up to you) Add, for example, `claim () {}` method to the class. Inside the body, make sure that the collided checkpoint is gone by assigning `0` to its width and height property, `Infinity` to its position on the y axis, and also `true` to the boolean property of the instance because collision happened. 

5. Now that we've finished `CheckPoint` class, we need to instantiate class objects. 
  5.1. You must determine where you want the checkpoint(s) to be. Assume we have in mind where the checkpoints should be. That means, we also have concrete coordinates of the checkpoints on the screen: position on the x axis, and on the y axis, the corresponding index of the checkpoint
  5.2. Assuming we've determined where the checkpoints should be. We can store their coordinates as objects (with 3 key/value pairs - x, y, z) in an array variable. 
6. Now that the coordinates array and `CheckPoint` class are ready, we are also ready to generate checkpoint objects. 
  6.1. Instantiate checkpoint objects by mapping every element (coordinate object) of the checkpointPositions array to a new array that stores each instantiated checkpoint object. The callback passed into `.map()` should take checkpoint parameter and return a checkpoint object with properties from the checkpoint parameter, by passing the properties of the checkpoint paramter into the `CheckPoint` class.
7. Now that we have an array consisting of checkpoint *class objects*, we can animate them on the screen by calling the *draw()* method on each *class object*, inside the `animate` function. 
