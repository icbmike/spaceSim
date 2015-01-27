var THREE = require('three');

var input = require('./input');
var camera = require('./camera');
var setupScene = require('./scene');

//Create the initial stuff
var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

//Setup the DOM
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );
document.addEventListener('mousemove', input(camera, scene));

var updateDispatcher = new THREE.EventDispatcher();

setupScene(scene, updateDispatcher);

//Kick off the render loop
function render(timeStamp) {
    updateDispatcher.dispatchEvent({type:'update'});

    renderer.render( scene, camera );
    requestAnimationFrame( render );
}
render();
