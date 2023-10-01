import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/uranus/uranusmap.jpg"),
  bumpMap: new THREE.TextureLoader().load("./src/planets/uranus/uranusmap.jpg"),
  bumpScale: 0.005
});
var uranusMesh = new THREE.Mesh(geometry, material);

export default uranusMesh