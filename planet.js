module.exports = function(x, y, z, color, radius, orbitSpeed, updateDispatcher){
  var geometry = new THREE.SphereGeometry( 1 , 32, 32);
  var material = new THREE.MeshPhongMaterial({
    color: color || 0x0000ff,
    specular: 0xa0a0a0 }
  );
  var cube = new THREE.Mesh( geometry, material );

  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;

  var t = 0;

  updateDispatcher.addEventListener('update', function(){
    cube.position.x = radius * Math.sin(t);
    cube.position.y = radius * Math.cos(t);

    t += 0.01 * orbitSpeed;

    t = t > 2 * Math.PI ? 0 : t;
  });

  return cube;
}
