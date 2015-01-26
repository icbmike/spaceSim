var THREE = require('three');

var input = require('./input');
var planet = require('./planet');
var camera = require('./camera');

//Create the initial stuff
var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

//Setup the DOM
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );
//document.addEventListener('mousemove', input(camera, scene));

//Create a single planet(cube) for now;
scene.add( planet(1, 1, 0));
scene.add( planet(-1, -1, 0, 'blue'));
scene.add( planet(3, 3, 0, 'red'));

//Kick off the render loop
function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();
