import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/jupiter/jupitermap.jpg"),
  bumpMap: new THREE.TextureLoader().load(
    "./src/planets/jupiter/jupitermap.jpg"
  ),
  bumpScale: 0.005
});
var jupiterMesh = new THREE.Mesh(geometry, material);

export default jupiterMesh;