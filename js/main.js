"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light, directLight;
var mesh;
var sceneReady = false;
var material;
var controls;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function main()
{
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");                    

    // LIGHTS
    light = new THREE.AmbientLight();    
    directLight = new THREE.DirectionalLight( 0xffffff );
    directLight.position.set( 0, 1, 1 ).normalize();

    // CAMERAS
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(0., 0., 5.);        
  
    THREE.Axes
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    // SCENE
    scene = new THREE.Scene();                                 
    scene.add(camera);
    scene.add(light);
    scene.add(directLight);

    material = new THREE.MeshNormalMaterial(); 

    // EVENTS
    initEventHandler();

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP
}
       
function renderLoop() {
    if(sceneReady)
    {
         renderer.render(scene, camera);
         if (mesh!=null){
            mesh.rotation.x = mesh.rotation.x + 0.01;
            mesh.rotation.y = mesh.rotation.y + 0.01;
         }
    }
    requestAnimationFrame(renderLoop);
}