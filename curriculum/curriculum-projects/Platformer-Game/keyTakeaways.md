## document.getElementById() vs. document.querySelector()
As the method names suggest, the former targets HTML elements by its id while the latter targets a selector.
But what is a selector? For now, just remember that you can use `.querySelector` to target classes. 
Since class names start with `.` in CSS, you must not forget to add `.` to the class name defined in HTML. 

```
<!-- compare: -->
const startBtn = document.getElementById("start-btn");
const startScreen = document.querySelector(".start-screen");
```