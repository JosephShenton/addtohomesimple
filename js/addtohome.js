
// Is app installed?
if ((window.navigator.hasOwnProperty('standalone') && window.navigator.standalone)) {
    /*
		If you are using framework7 you must Initialize your app here so
    	var myApp = new Framework7(); get rid of /* And The Text Inside
    	it except for var myApp = new Framework7(); and also remove this */

    */
}
else {
    document.body.setAttribute('class', 'install');
}


/* 
	Add All Of This To Your JS Files At The Very Top And If You Are
	Using Framework7 
	Get Rid Of This Default Initialization And Add The One Below Which
	I Already Setup For You.
*/


// Framework7 Initialize Code below Get Rid Of The 
// var myApp = new Framework7();
// Already In Your my-app.js file and replace it with this one below

// Initialize your app
if ((window.navigator.hasOwnProperty('standalone') && window.navigator.standalone)) {  
    	var myApp = new Framework7();
}
else {
    document.body.setAttribute('class', 'install');
}