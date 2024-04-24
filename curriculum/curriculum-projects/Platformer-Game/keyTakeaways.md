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

## the *Canvas API*
Can be used to create graphics in games using JS and the HTML `canvas` element.
Also, you'll need to use the `getContext` method to provide the context for where the graphics will be rendered.
Syntax: 
```
canvas.getContext("2D");
``` 