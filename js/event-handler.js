function inputRadioSquareEventListener(evt){
  if(document.getElementById('animation').checked){
    controls.enabled = true;
  }else{
    controls.enabled = false;
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
      scene.add(mesh);
      sceneReady = true;
    } 
    
    else if (evt == 3) {

      // PLANE
      var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
      var planeMaterial = new THREE.MeshBasicMaterial({color: "grey", wireframe: true});
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -1.3;// * Math.PI;
      //plane.rotation.y = -0.3 * Math.PI;

      scene.add(plane);
      sceneReady = true;
    } 

    else if (evt == 5) {

      // CONE
      var geometry = new THREE.ConeGeometry(1, 2, 50);

      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh); 
      sceneReady = true;
    }
    
    else if (evt == 7) {

      // CYLINDER
      var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1,32);
      var material = new THREE.MeshNormalMaterial();

      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);
      sceneReady = true;
    }

    else if (evt == 9) {

      //SPHERE
      var geometry = new THREE.SphereGeometry(0.5, 50, 50);

      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh); 
      sceneReady = true;
    }

    else if (evt == 11) {

      // PYRAMID
      var geometry = new THREE.ConeGeometry(1.5, 2, 3);     

      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh); 
      sceneReady = true;
    }
}


function initEventHandler(evt)
{
  document.getElementById("animation").addEventListener("input", inputRadioSquareEventListener, false);
  document.getElementById("edition").addEventListener("input", inputRadioSquareEventListener, false);
}
