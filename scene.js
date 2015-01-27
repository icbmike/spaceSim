var planet = require('./planet');

module.exports = function(scene, updateDispatcher){
  //Create a single planet(cube) for now;
  scene.add( planet(0, 1, 0, 'red'));
  scene.add( planet(0, -1, 0, 'red'));
  scene.add( planet(0, 3, 0, 'red'));

  var ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( Light );

  var pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
  pointLight.position.set( 0, 0, 30 );
  scene.add( pointLight );

  var pointLightHeight = 0;



  updateDispatcher.addEventListener('update', function(event){
    pointLightHeight += 0.01;
    if(pointLightHeight === Math.PI * 2)
      pointLightHeight = 0;

    pointLight.position.set( 0, 0, 30 * Math.cos(pointLightHeight));
  });
}
