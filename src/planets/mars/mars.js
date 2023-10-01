import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/mars/marsmap1k.jpg"),
  bumpMap: new THREE.TextureLoader().load("./src/planets/mars/marsbump1k.jpg"),
  bumpScale: 0.05
});
var marsMesh = new THREE.Mesh(geometry, material);

export default marsMesh;