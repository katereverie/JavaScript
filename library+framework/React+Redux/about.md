# A Few Words

This file is supposed to summarize the working patterns of programs using React and Redux.
The syntax of React and Redux is important as such, but useless if their use cases are unclear.
Therefore, I consider it more important to clarify first what the programs are trying to achieve.

1. You need to connect React to Redux so that Redux can access the internal states of a React app. For this, you need `react-redux` package. The general takeaway is that if your app needs a *separate* state management system, this step is unavoidable. If, however, your app doesn't need a separate State Management System, you must think about how you need to manage the internal states because internal states are where the user inputs and rendering of web page happens. Your app must know when to render what on the web page. For example, if your website only consists of static pages demonstrating information, there is no need for a state management system, there is no need to even make your website interactive. So, what your app is used for becomes a very cruical question.
