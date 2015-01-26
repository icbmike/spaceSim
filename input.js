
module.exports = function(camera, scene){

  var moveX = 0;
  var moveY = 0;

  return function(moveEvent){

    //Can only move the camera += 10 on either axis;
    camera.position.x = (moveEvent.clientX / window.innerWidth * 20) - 10;
    camera.position.z = -1 * ((moveEvent.clientY / window.innerHeight * 20) - 10);

    camera.lookAt(scene.position);
  };
}
