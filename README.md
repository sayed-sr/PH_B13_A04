 ## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Answer: 
1st , getElementById selects a single element by using unique ID.
2nd, getElementsByClassName select all the elements with an specific class name

3rd, querySelector select the first element that matches  the CSS selector

4th, querySelectorAll selects all the elements that message the CSS selector

### 2. How do you create and insert a new element into the DOM?

answer: 
1st , document.createElement('tagname') 
2nd , element.innerText = "Hello"
3rd , document.body.appendChild(element)



### 3. What is Event Bubbling? And how does it work?
answer: How events move through DOM. When the event happens to an element it triggers on that element . Then it works with the parent and then with the grandparent.


### 4. What is Event Delegation in JavaScript? Why is it useful?

answer: It is a technique where we can attach a single event listener to a parent element.
It saves work automatically for new child elements


### 5. What is the difference between preventDefault() and stopPropagation() methods?
answer: 
preventDefault() > Stop default browser behavior
stopPropagation()> Stop event bubbling