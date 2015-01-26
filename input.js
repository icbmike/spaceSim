
module.exports = function(camera, scene){

  var moveX = 0;
  var moveY = 0;

  return function(moveEvent){

    moveX = moveEvent.clientX * 0.005;
    moveY = moveEvent.clientY * 0.005;

    camera.position.x += (moveX - camera.position.x) * 0.5;
    camera.position.y += (moveY - camera.position.y) * 0.5;
    camera.lookAt(scene.position);

    console.log(camera.position);
  };
}
