'use strict';

var THREE = require('three');

module.exports = function star(x, y, z, updateDispatcher){
  var geometry = new THREE.SphereGeometry( 5 , 50, 50);

  // Use phong uniforms
  var uniforms = THREE.ShaderLib.phong.uniforms;

  // Add time
  uniforms.time = { type: "f", value: 0.0 };

  var material = new THREE.ShaderMaterial({
    uniforms : uniforms,
    vertexShader: require('./star-vertex-shader.txt'),
    fragmentShader: THREE.ShaderLib.phong.fragmentShader,
    lights:true
  });

  var star = new THREE.Mesh( geometry, material );

  star.position.x = x;
  star.position.y = y;
  star.position.z = z;

  updateDispatcher.addEventListener('update', function(){
    uniforms.time.value += 0.01;

    if(uniforms.time.value >= 500 ){
      uniforms.time.value = 0;
    }
  });

  return star;
};
