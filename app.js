//WHAT IS INTERSECTION OBSERVER?
//basically it watches to see if an element is on the page or not.

const terms = document.querySelector(".terms-and-conditions"); //target Ts and Cs element in html
const button = document.querySelector(".accept"); //target 'accept' button
const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1,
}); //create new instance of intersection observer - takes in a callback function - in this case, our observerCallback function
//also takes in an object, in which we can create some options if you want. check mdn for details.

//NOW LET'S ACTUALLY WRITE THE LOGIC

function observerCallback(payload) {
  //write a function to pass to our IO instance
  console.log(payload); //log IO status of 'terms' element
  console.log(payload[0].isIntersecting); //check is intersecting status of payload element
  if (payload[0].isIntersecting) {
    button.disabled = false; //if it's intersecting, set button's disabled attribute to false (we set it to true by default in HTML)
    observer.unobserve(terms); //Finally, tell IO to stop observing.
  }
}
observer.observe(terms.lastElementChild); //use our IO instance to call observe method on our "terms" element
//NOW WATCH THE CONSOLE, WHEN YOU SCROLL 'terms' IN AND OUT OF VIEW, IT'LL CHANGE - specifically, when it hits the last part of the actual element (lastElementChild)

console.log(terms);
