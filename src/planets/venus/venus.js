import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/venus/venusmap.jpg"),
  bumpMap: new THREE.TextureLoader().load("./src/planets/venus/venusbump.jpg"),
  bumpScale: 0.05
});
var venusMesh = new THREE.Mesh(geometry, material);

export default venusMesh;