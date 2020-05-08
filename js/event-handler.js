function inputRadioSquareEventListener(evt){
  
  if(document.getElementById('animation').checked){
    //ANIMATION
    controls.enabled = true;
    document.getElementById("transform").style.display = "none";
  }else{
    //EDITION
    controls.enabled = false;
    document.getElementById("transform").style.display = "block";
  }
  
}

function toolsEvent(evt) 
{
	// MODEL
    // GEOMETRY

    if (evt == 1) {

      // CUBE
      var geometry = new THREE.BoxGeometry();   

      // MATERIAL
      var material = new THREE.MeshNormalMaterial();  

      // MESH (GEOMETRY + MATERIAL)
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "cubo";
      scene.add(mesh);
      sceneReady = true;
    } 
    
    else if (evt == 3) {

      // PLANE
      var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
      var planeMaterial = new THREE.MeshBasicMaterial({color: "grey", wireframe: true});
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.name = "piso";
      plane.rotation.x = -1.3;// * Math.PI;

      scene.add(plane);
      sceneReady = true;
    } 

    else if (evt == 5) {

      // CONE
      var geometry = new THREE.ConeGeometry(1, 2, 50);

      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "cono";

      scene.add(mesh); 
      sceneReady = true;
    }
    
    else if (evt == 7) {

      // CYLINDER
      var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1,32);
      var material = new THREE.MeshNormalMaterial();

      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "cilindro";

      scene.add(mesh);
      sceneReady = true;
    }

    else if (evt == 9) {

      //SPHERE
      var geometry = new THREE.SphereGeometry(0.5, 50, 50);

      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "sphere";
      scene.add(mesh); 
      sceneReady = true;
    }

    else if (evt == 11) {

      // PYRAMID
      var geometry = new THREE.ConeGeometry(1.5, 2, 3);     

      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "pyramide";

      scene.add(mesh); 
      sceneReady = true;
    }
}

function onMouseMove( event ) {

	//mouse.x = ( event.clientX / canvas.width ) * 2 - 1;
  //mouse.y = - ( event.clientY / canvas.height ) * 2 + 1;
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
  raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( scene.children );

  if (intersects.length > 0 && intersects[0].object.name != "piso") {
    
    console.log(intersects[0].object.name);
    
  }

}


function initEventHandler(evt)
{
  document.getElementById("animation").addEventListener("input", inputRadioSquareEventListener, false);
  document.getElementById("edition").addEventListener("input", inputRadioSquareEventListener, false);
  document.getElementById("translation").addEventListener("input", translateObject, false);
  document.getElementById("scalation").addEventListener("input", scalateObject, false);
  document.getElementById("rotation").addEventListener("input", rotateObject, false);
  document.addEventListener('click', onMouseMove, false);
}
