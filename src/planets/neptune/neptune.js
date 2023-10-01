import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/neptune/neptunemap.jpg"),
  bumpMap: new THREE.TextureLoader().load(
    "./src/planets/neptune/neptunemap.jpg"
  ),
  bumpScale: 0.005
});
var neptuneMesh = new THREE.Mesh(geometry, material);

export default neptuneMesh;