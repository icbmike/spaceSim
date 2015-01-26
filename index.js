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

setupScene(scene);

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
pointLight.position.set( 0, 0, 30 );
scene.add( pointLight );

var pointLightHeight = 0;

//Kick off the render loop
function render(timeStamp) {
    pointLightHeight += 0.01;
    if(pointLightHeight === Math.PI * 2)
      pointLightHeight = 0;

    pointLight.position.set( 0, 0, 30 * Math.cos(pointLightHeight));

    renderer.render( scene, camera );
    requestAnimationFrame( render );
}
render();
