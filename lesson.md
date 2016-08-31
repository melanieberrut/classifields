# classifields
Angular Application


#Single Page Application
Improve UX but with plain JS are hard.
 > AngularJS 


#What a JS framework should provide
HTTP Communication with XHR (without page refresh)
DOM Manipulation (using jQlite)
Manage States and Routing

Same could be done with jQuery, but the amount of code is more important than AngularJS



#The Good and The Bad

##Goods
Two way data-binding
Large community (people and tutorials)
Big on the Open Source
Tested and Proven
Enable productivity once proefficient 

##Bads
Steep learning curve
New terms and concepts
Many ways to do things
Bad for SEO (problem with SAP more than just AngularJS only - third party library available)
Poor performance (limited to benchmark test)


#Dependencies
http-server
angular
angular-material
mdi


#MVC
Separation of concerns
smaller units easier to reason
helpful for working in teams
DRY code
Saves time, on the long run



#Standard MVC
Model: Backend communication
View: What the user sees (content retrieve from DB)
Controller: communicate between the model and the view
V > C > M
V < C < M
MVC Alternatives: 
Model - View - Presenter
Model - View - View - Model
Angular is MV*



#What is $scope
 > Way to enable the com between the controller and the view
 Data model is an object, that has good properties and values which represent some data. 
 $scope object is what allowed the data model to be shared between the view and the controller



#Two way data binding
> using ng-model



#templating
> used to show data on the screen
> every properties inside {{}} will be displaying the value of that property


#Dependency injection
how function get create and get hold of other piece of code created


#Remote Data
Application needs to retrieve and send data
> none SAP
	- Resources returned for individual pages
	- data returned with request
> SAP
	- All pages resources on intial page load
	- data is send and receive with a data API
	- backend is self contained
	- front end is self contained	

#HTTP
HTTP service returns promises - helps with asynch of JS
once promises is resolved, use .then to handle as a resource
store the data in scope


#Services
More reusable components for the rest of the app - might be needed severals places - avoid code repetition
> Use a factory
Factory needs to return an object

#UI Route controllers
```javascript
//app.js
.state("one", {
	url: "/stateone",
	template: "<h1>State 1 - {{ stateone.message }}</h1>",
	controller: "stateOneCtrl as stateone"
})

//controller
.controller("stateOneCtrl", function($scope){
	// capture variable, vm = view model
	var vm = this;
	vm.message = "Hey from state one";
});
```
Changing in the controller from
```javascript
$scope.openSidebar = function() {
	//code
}
```
to
```javascript
var vm = this;
vm.openSidebar = openSidebar;

function openSidebar (){
	//code
}
```
Then in the view, replace all $scope.something, into the vm.something.

Good practise: on the controller, all the new : vm.something at the top of the code, should be alphabetically ordered.

#watch
watchers, is a special feature that comes with $, watches some values and we can define custom behavior to respond on when this value changes

#$scope features to communicate data between controllers
$scope.on to be used in conjuction with $scope.$broadcast and $scope.$emit
$scope.$broadcast & $scope.$emit :used to send messages between scopes
$scope.$broadcast: send messages/data down to child scope
$scope.$emit: emit the message/data up the scope

Example:
```javascript
// in child controller:
vm.sendMessage = function (){
	$scope.$emit("myMessage", "hey how are you?");	
}

// parent controller
$scope.$on('myMessage', function(event, message){
	console.log(message);
});

```

# Usual Backend
```javascript
// url is called the endpoint - where the data is fetched

// Get data
$http.get("https://api.github.com/users").then(function(response){
	console.log(response);
});

// Save data
$http.post("https://api.github.com/users").then(function(response){
	console.log(response);
});

// Update data
$http.put("https://api.github.com/users").then(function(response){
	console.log(response);
});

// Delete
$http.delete("https://api.github.com/users").then(function(response){
	console.log(response);
});
```

# Firebase
Real time data store

# Directive example
```html
<hello-message message="myMessage"></hello-message>
<hello-message message="myOtherMessage"></hello-message>
```
```javascript
app.controller("myController", function(){
	$scope.myMessage = "My message";
	$scope.myOtherMessage = "My other message";
})
.directive("helloMessage", function(){
	return {
		scope: {
			// parsing data through attribute, could be also '=message'
			message: '='
		},
		template: '<h1>{{message}}</h1>'
	}
});
```

# AngularJS 

### AngularJS 1.X
	 - Performance issue with large datasets
	 - Difficult to manage state and data on large application
	 - two way data binding on large application
	 - not supporting for new web standards (ex: web components)

### AngularJS 2.X
	 - Components based
	 - TypeScript - JS with type annotation
	 - Fewer concepts, simplified (4 ways to make services in 1.x)



#Glossary
XHR: XML Http Request
IIFE: Immediately invoke function Expression