//Constantes para crear el escenario
const escena=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);
const renderer=new THREE.WebGLRenderer();

// Variables para crear el cubo
const geometry= new THREE.BoxGeometry();
var colorCubo = 0x595260;
var clic= true;
var material= new THREE.MeshBasicMaterial({color:colorCubo});
var cube = new THREE.Mesh(geometry, material);

escena.background= new THREE.Color(0x2C2E43);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(escena,camera);

escena.add(cube);
camera.position.z=2;

// Control
var mouseTolerance = 0.0005;

document.onmousemove = function (e) {
  var centerX = window.innerWidth * 0.5;
  var centerY = window.innerHeight * 0.5;

  camera.position.x = (e.clientX - centerX) * mouseTolerance;
  camera.position.y = (e.clientY - centerY) * mouseTolerance;
};

    function animate(){
      requestAnimationFrame(animate);

      cube.rotation.x+=0.01;
      cube.rotation.y+=0.01;

      renderer.render(escena,camera);
    }
  
    animate();