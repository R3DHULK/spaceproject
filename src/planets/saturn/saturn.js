import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/saturn/saturnmap.jpg"),
  bumpMap: new THREE.TextureLoader().load("./src/planets/saturn/saturnmap.jpg"),
  bumpScale: 0.05
});
var saturnMesh = new THREE.Mesh(geometry, material);

export default saturnMesh;