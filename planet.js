module.exports = function(x, y, z, color){
  var geometry = new THREE.SphereGeometry( 1 , 32, 32);
  var material = new THREE.MeshPhongMaterial({color: color || 0x0000ff} );
  var cube = new THREE.Mesh( geometry, material );

  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;

  return cube;
}
