import * as THREE from "three";

const canvas = document.getElementById("practice");
const sizes = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();

const grp = new THREE.Group();
scene.add(grp);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  //   wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = -2;
grp.add(mesh);

const mesh2 = new THREE.Mesh(
  new THREE.ConeGeometry(),
  new THREE.MeshBasicMaterial({ color: "blue" }),
);
grp.add(mesh2);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
