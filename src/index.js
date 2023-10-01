import * as THREE from "three";
import mercuryMesh from "./planets/mercury/mercury.js";
import venusMesh from "./planets/venus/venus.js";
import earthMesh from "./planets/earth/earth.js";
import marsMesh from "./planets/mars/mars.js";
import jupiterMesh from "./planets/jupiter/jupiter.js";
import saturnMesh from "./planets/saturn/saturn.js";
import uranusMesh from "./planets/uranus/uranus.js";
import neptuneMesh from "./planets/neptune/neptune.js";

/* Set the scene up */
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true // Turn on shadows in the renderer

var background = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.z = 1;

/* The Starfield: it's simply a three.js sphere */
var geometry = new THREE.SphereGeometry(40, 32, 32);
var material = new THREE.MeshBasicMaterial();
material.map = new THREE.TextureLoader().load("./starfield.png");
material.side = THREE.BackSide;
var mesh = new THREE.Mesh(geometry, material);
background.add(mesh);

/* MeshPhongMaterial won't work if you don't have a light source */
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 1, 1).normalize();
background.add(light);

/* Conditionally render the planet */
var currentMesh = new THREE.Sphere();
var geometry = new THREE.SphereGeometry(0.51, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("./src/planets/earth/earthcloudmap.jpg"),
  side: THREE.DoubleSide,
  opacity: 0.4,
  transparent: true,
  depthWrite: false
});
var cloudMesh = new THREE.Mesh(geometry, material);

currentMesh = earthMesh;
currentMesh.add(cloudMesh);
background.add(currentMesh);
const switchValue = (type) => {
  currentMesh && background.remove(currentMesh);
  if (type === "Mercury") {
    var mesh = mercuryMesh;
  } else if (type === "Venus") {
    var mesh = venusMesh;
  } else if (type === "Earth") {
    var mesh = earthMesh;
    mesh.add(cloudMesh);
  } else if (type === "Mars") {
    var mesh = marsMesh;
  } else if (type === "Jupiter") {
    var mesh = jupiterMesh;
  } else if (type === "Saturn") {
    var mesh = saturnMesh;
  } else if (type === "Uranus") {
    var mesh = uranusMesh;
  } else if (type === "Neptune") {
    var mesh = neptuneMesh;
  } else if (type === "Pluto") {
    var mesh = plutoMesh;
  }
  currentMesh = mesh;
  background.add(mesh);
}

document.querySelectorAll('button').forEach((domEl) => {
  domEl.addEventListener('click', () => switchValue(domEl.innerHTML));
});


// Camera controls
var cameraPositions = [];
var mouse = { x: 0, y: 0 }
document.addEventListener('mousemove', function (event) {
  mouse.x = (event.clientX / window.innerWidth) - 0.5
  mouse.y = (event.clientY / window.innerHeight) - 0.5
}, false) // The boolean means that the listener should NOT be invoked at most once

cameraPositions.push(function (delta, now) {
  camera.position.x += (mouse.x * 5 - camera.position.x) * (delta * 3)
  camera.position.y += (mouse.y * 5 - camera.position.y) * (delta * 3)
  camera.lookAt(background.position) // Three.js
})

// Renders any camera movements
cameraPositions.push(function () {
  renderer.render(background, camera);
})

/* Animation loop */
var lastTimeMsec = null;
requestAnimationFrame(function animate(nowMillisec) {
  requestAnimationFrame(animate);
  lastTimeMsec = lastTimeMsec || nowMillisec - 1000 / 60;
  var deltaMillisec = Math.min(200, nowMillisec - lastTimeMsec);
  lastTimeMsec = nowMillisec;
  cameraPositions.forEach(function (updateFn) {
    updateFn(deltaMillisec / 1000, nowMillisec / 1000)
  });
  currentMesh.rotation.y += 0.005;
  if (!!cloudMesh) {cloudMesh.rotation.y += 0.001};
});