import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function SolarSystem() {
  useEffect(() => {
    const clock = new THREE.Clock();
    const loader = new THREE.TextureLoader();
    const solarDiv = document.getElementById('solarDiv');

    // Scene setup
    const scene = new THREE.Scene();
    
    // Load textures
    const textures = {
      sun: loader.load('2k_sun.jpg'),
      mercury: loader.load('2k_mercury.jpg'),
      venus: loader.load('2k_venus_surface.jpg'),
      earth: loader.load('2k_earth_daymap.jpg'),
      mars: loader.load('2k_mars.jpg'),
      stars: loader.load('8k_stars_milky_way.jpg')
    };

    // Set background
    scene.background = textures.stars;

    // Planet sizes (relative)
    const sizes = {
      sun: 5,
      mercury: 0.4,
      venus: 0.9,
      earth: 1,
      mars: 0.5
    };

    // Create planet materials
    const createMaterial = (texture) => new THREE.MeshPhongMaterial({ map: texture });
    const ambientLight= new THREE.AmbientLight("0x404040")
    scene.add(ambientLight)

    // Create celestial bodies
    const planets = {};
    for (const [name, size] of Object.entries(sizes)) {
      planets[name] = new THREE.Mesh(
        new THREE.SphereGeometry(size, 32, 32),
        createMaterial(textures[name])
      );
      scene.add(planets[name]);
    }

    // Position planets (scaled distances)
    const distances = {
      mercury: 7,
      venus: 10,
      earth: 14,
      mars: 18
    };

    for (const [name, distance] of Object.entries(distances)) {
      planets[name].position.x = distance;
    }



    // Lighting
    const sunLight = new THREE.PointLight(0xffffff, 2, 100);
    scene.add(sunLight);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 10, 50);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    solarDiv.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Planet rotation
      Object.values(planets).forEach(planet => planet.rotation.y += 0.01);

      // Orbital motion
      planets.mercury.position.set(
        distances.mercury * Math.cos(time * 1.2),
        0,
        distances.mercury * Math.sin(time * 1.2)
      );
      planets.venus.position.set(
        distances.venus * Math.cos(time * 0.9),
        0,
        distances.venus * Math.sin(time * 0.9)
      );
      planets.earth.position.set(
        distances.earth * Math.cos(time * 0.7),
        0,
        distances.earth * Math.sin(time * 0.7)
      );
      planets.mars.position.set(
        distances.mars * Math.cos(time * 0.5),
        0,
        distances.mars * Math.sin(time * 0.5)
      );
      
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      solarDiv.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div id="solarDiv" style={{ width: '100%', height: '100vh' }} />;
}

export default SolarSystem;
