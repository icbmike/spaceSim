
var THREE = require('three');

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(0,-10, 5); // Camera sits on the y axis and up a bit.
camera.up = new THREE.Vector3(0,0,1); // z is up
camera.lookAt(new THREE.Vector3(0,0,0)); // look at origin

module.exports = camera;
