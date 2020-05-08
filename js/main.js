"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light, directLight;
var mesh;
var sceneReady = false;
var material, materialNum;
var controls;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var selectedObj;
var color;
var animationObjects;
var animationMode = false;
var start = false;
var objId;

function main()
{
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");
    
    animationObjects = [];
    objId = 0;

    // LIGHTS
    light = new THREE.AmbientLight();    
    directLight = new THREE.DirectionalLight( 0xffffff );
    directLight.position.set( 0, 1, 1 ).normalize();

    // CAMERAS
    //camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    //camera.position.set(0., 0., 5.);   
    camera.position.set(3., 1., 5.);        
     
  
    THREE.Axes
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    // SCENE
    scene = new THREE.Scene();                                 
    scene.add(camera);
    scene.add(light);
    scene.add(directLight);

    material = new THREE.MeshNormalMaterial(); 
    materialNum = 1;
    color = 0x6134eb;

    // EVENTS
    initEventHandler();

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP

    // if(multiViewport)
	// {
	// 	// Viewport 1
	// 	// Perspective View
	// 	// Update camera transformation
	// 	gl.viewport(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2);
	// 	var eye = [xEye, yEye, zEye];
	// 	var target = [xTarget, yTarget, zTarget];
	// 	var up = [xUp, yUp, zUp];

	// 	var cameraMatrix = glMatrix.mat4.create();	// M-camera = I
	// 	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	// 	glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotX, [1., 0., 0.]);
	// 	glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotY, [0., 1., 0.]);
	// 	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	// 	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);

	// 	// uProjMatrix
	// 	// Perspective projection
	// 	var fovy = 60. * Math.PI / 180.;
	// 	var aspect = canvas.width / canvas.height;
	// 	var near = 0.01;
	// 	var far = 10000.;
	// 	var projMatrix = glMatrix.mat4.create();
	// 	glMatrix.mat4.perspective(projMatrix, fovy, aspect, near, far);
	// 	var uProjMatrixLocation = gl.getUniformLocation(shaderProgram, "uProjMatrix");
	// 	gl.uniformMatrix4fv(uProjMatrixLocation, false, projMatrix);
	// 	draw();

	// 	// Viewport 2
	// 	// Top View
	// 	// Orthographic Projection
	// 	gl.viewport(0, canvas.height/2, canvas.width/2, canvas.height/2);
	// 	//var eye = [xEye, yEye, zEye];
	// 	var eye = [xTarget, yMax*2., zTarget];
	// 	var target = [xTarget, yTarget, zTarget];
	// 	var up = [0., 0., 1.];

	// 	var cameraMatrix = glMatrix.mat4.create();	// M-camera = I
	// 	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	// 	//glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotX, [1., 0., 0.]);
	// 	//glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotY, [0., 1., 0.]);
	// 	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	// 	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);

	// 	// uProjMatrix
	// 	// Perspective projection
	// 	var max = Math.abs(xMax - xMin);
	// 	if(Math.abs(zMax-zMin) > max)
	// 	{
	// 		max = Math.abs(zMax-zMin);
	// 	}
	// 	var left = -max/2;
	// 	var right = max/2;
	// 	var bottom = -max/2;
	// 	var top =  max/2;
	// 	var near = 0.01;
	// 	var far = 10000.;
	// 	var projMatrix = glMatrix.mat4.create();
	// 	//glMatrix.mat4.perspective(projMatrix, fovy, aspect, near, far);
	// 	glMatrix.mat4.ortho(projMatrix, left, right, bottom, top, near, far)
	// 	var uProjMatrixLocation = gl.getUniformLocation(shaderProgram, "uProjMatrix");
	// 	gl.uniformMatrix4fv(uProjMatrixLocation, false, projMatrix);
	// 	draw();

	// 	// Viewport 3
	// 	// Front View
	// 	// Orthographic Projection
	// 	gl.viewport(0, 0, canvas.width/2, canvas.height/2);
	// 	//var eye = [xEye, yEye, zMax];
	// 	var eye = [xTarget, yTarget, zMax*2];
	// 	var target = [xTarget, yTarget, zTarget];
	// 	var up = [0., 1., 0.];

	// 	var cameraMatrix = glMatrix.mat4.create();	// M-camera = I
	// 	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	// 	//glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotX, [1., 0., 0.]);
	// 	//glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotY, [0., 1., 0.]);
	// 	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	// 	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);

	// 	// uProjMatrix
	// 	// Perspective projection
	// 	var max = Math.abs(xMax - xMin);
	// 	if(Math.abs(yMax-yMin) > max)
	// 	{
	// 		max = Math.abs(yMax-yMin);
	// 	}
	// 	var left = -max/2;
	// 	var right = max/2;
	// 	var bottom = -max/2;
	// 	var top =  max/2;
	// 	var near = 0.01;
	// 	var far = 10000.;
	// 	var projMatrix = glMatrix.mat4.create();
	// 	//glMatrix.mat4.perspective(projMatrix, fovy, aspect, near, far);
	// 	glMatrix.mat4.ortho(projMatrix, left, right, bottom, top, near, far)
	// 	var uProjMatrixLocation = gl.getUniformLocation(shaderProgram, "uProjMatrix");
	// 	gl.uniformMatrix4fv(uProjMatrixLocation, false, projMatrix);
	// 	draw();

	// 	// Viewport 4
	// 	// Side View
	// 	// Orthographic Projection
	// 	gl.viewport(canvas.width/2, 0, canvas.width/2, canvas.height/2);
	// 	//var eye = [xEye, yEye, zEye];
	// 	var eye = [xMax*2, yTarget, zTarget];
	// 	var target = [xTarget, yTarget, zTarget];
	// 	var up = [0., 1., 0.];

	// 	var cameraMatrix = glMatrix.mat4.create();	// M-camera = I
	// 	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	// 	//glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotX, [1., 0., 0.]);
	// 	//glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotY, [0., 1., 0.]);
	// 	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	// 	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);

	// 	// uProjMatrix
	// 	// Perspective projection
	// 	var max = Math.abs(yMax - yMin);
	// 	if(Math.abs(zMax-zMin) > max)
	// 	{
	// 		max = Math.abs(zMax-zMin);
	// 	}
	// 	var left = -max/2;
	// 	var right = max/2;
	// 	var bottom = -max/2;
	// 	var top =  max/2;
	// 	var near = 0.01;
	// 	var far = 10000.;
	// 	var projMatrix = glMatrix.mat4.create();
	// 	//glMatrix.mat4.perspective(projMatrix, fovy, aspect, near, far);
	// 	glMatrix.mat4.ortho(projMatrix, left, right, bottom, top, near, far)
	// 	var uProjMatrixLocation = gl.getUniformLocation(shaderProgram, "uProjMatrix");
	// 	gl.uniformMatrix4fv(uProjMatrixLocation, false, projMatrix);
	// 	draw();
    // }
    
}
       
function renderLoop() {
    if(sceneReady)
    {
         renderer.render(scene, camera);
         if (mesh!=null && animationMode && start){
             for(var i=0;i<animationObjects.length;i++){
                 animationObjects[i].rotation.x = animationObjects[i].rotation.x + 0.01;
                 animationObjects[i].rotation.y = animationObjects[i].rotation.y + 0.01;
             }
            //mesh.rotation.x = mesh.rotation.x + 0.01;
            //mesh.rotation.y = mesh.rotation.y + 0.01;
         }
    }
    requestAnimationFrame(renderLoop);
}