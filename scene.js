var planet = require('./planet');

module.exports = function(scene, updateDispatcher){
  //Create a single planet(cube) for now;
  scene.add( planet(0, 1, 0, 'white', 1, 1, updateDispatcher));
  scene.add( planet(0, -1, 0, 'white', 3, 3, updateDispatcher));
  scene.add( planet(0, 3, 0, 'white', 5, -5, updateDispatcher));

  var ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( ambientLight );

  var blueLight = new THREE.PointLight(0x0000aa, 1, 100);
  blueLight.position.set(5, 0, 5);

  scene.add(blueLight);

  var greenLight = new THREE.PointLight(0x00aa00, 1, 100);
  greenLight.position.set(-5, 0, 5);

  scene.add(greenLight);

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
