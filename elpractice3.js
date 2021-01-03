// EventTarget "creates a new EventTarget object instance."

// How would this function be used?  Once created, what does the object instance do?...create the event listener?
// Is the EventTarget function automatically called when an event listener is assigned to an object?
// ex: btn.addEventListener(): does this line of code automatically called so that btn becomes the EventTarget via addEventListener?

// In other words, I'm trying to understand the EventTarget function's relationship to addEventListener

var EventTarget = function() {
  this.listeners = {};
};
// An empty listeners object is created and assigned to the variable EventTarget (capitalized because this is a constructor function)

EventTarget.prototype.listeners = null;
/* Puzzled by this line. If EventTarget = a function that creates and empty listeners object, this line of code assigns a null value to its prototype type.  Note: If prototype is an object, I assume it can be assigned a null value
*/

EventTarget.prototype.addEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

// How is the function(type, callback) get called, and where?

// Type: one of 6 primitive types (string, number, booean, symbol, null, and compound). 

// In this scenario, the listeners type of prototype object was set to a null value in line 8.  

// Line 11 sets an event listener equal to a function.  The function's first parameter is a type, the second is a callback.  I not clear on what is the callback.

// Line 12 asks if the listeners "type" is null. If it is NOT set (or null), line 13 sets the listeners type to an empty array.

// Line 15 "pushes" the value of the callback into the type array.

// BIG question - what is the callback?
// ===================================================================================


EventTarget.prototype.removeEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback){
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  var stack = this.listeners[event.type].slice();

  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};