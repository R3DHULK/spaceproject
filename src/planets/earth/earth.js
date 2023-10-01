import * as THREE from "three";

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial();
material.map = new THREE.TextureLoader().load("./src/planets/earth/earthmap1k.jpg"); // Applies world map to Earth
material.bumpMap = new THREE.TextureLoader().load("./src/planets/earth/earthbump1k.jpg"); // Applies the topographical map
material.bumpScale = 0.05;
material.specularMap = new THREE.TextureLoader().load("./src/planets/earth/earthspec1k.jpg");
material.specular = new THREE.Color("grey");
var earthMesh = new THREE.Mesh(geometry, material);

// var geometry = new THREE.SphereGeometry(0.51, 32, 32);
// var material = new THREE.MeshPhongMaterial({
//   map: new THREE.TextureLoader().load("../src/planets/earth/earthcloudmap.jpg"),
//   side: THREE.DoubleSide,
//   opacity: 0.8,
//   transparent: true,
//   depthWrite: false
// });
// var cloudMesh = new THREE.Mesh(geometry, material);
// earthMesh.add(cloudMesh);


export default earthMesh;