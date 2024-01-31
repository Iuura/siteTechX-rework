import * as THREE from 'path/to/three.module.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Load and display STL file
const loader = new THREE.STLLoader();
loader.load('modele 3d/Breloctx.stl', (geometry) => {
    const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, specular: 0x111111, shininess: 200 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
});

// Set camera position
camera.position.z = 5;

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the model if desired
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
