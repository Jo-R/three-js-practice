import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("practice");
canvas.fillStyle = "orange";
const sizes = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();
scene.background = new THREE.Color("#494747");

const grp = new THREE.Group();
scene.add(grp);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = -2;
grp.add(mesh);

const mesh2 = new THREE.Mesh(
  new THREE.ConeGeometry(),
  new THREE.MeshBasicMaterial({ color: "blue", wireframe: true }),
);
grp.add(mesh2);

const mesh3 = new THREE.Mesh(new THREE.DodecahedronGeometry(), material);
mesh3.position.x = 2;
mesh3.position.y = 1;
scene.add(mesh3);

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000,
);
camera.position.z = 3;
camera.position.x = 3;
camera.position.y = 1;
camera.lookAt(grp.position);
scene.add(camera);

const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

const timer = new THREE.Timer();
timer.connect(document);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const tick = () => {
  timer.update();
  const delta = timer.getDelta();
  control.update(delta);

  const elapsed = timer.getElapsed();
  mesh3.rotation.y = elapsed;
  mesh3.rotation.x = elapsed * 2;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
