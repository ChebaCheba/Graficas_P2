function toolsEvent(evt) 
{
	// MODEL
    // GEOMETRY

    if (evt == 1) {

      // CUBE
      var geometry = new THREE.BoxGeometry();   

      // MATERIAL
      //var material = material;  

      // MESH (GEOMETRY + MATERIAL)
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      sceneReady = true;
    } 
    
    else if (evt == 3) {

      // PLANE
      var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
      //var planeMaterial = material;
      var plane = new THREE.Mesh(planeGeometry, material);
      plane.rotation.x = -1.3;

      scene.add(plane);
      sceneReady = true;
    } 

    else if (evt == 4) {

      Swal.fire({
        title: 'Select a material',
        imageUrl: '../imgs/materials.png',
        imageHeight: 123,
        imageWidth: 600,
        html:
          '<input type="radio" id="wireframe" name="material" value="wireframe" onclick="ChangeMaterial(0)"><label for="male">Wireframe</label>' +
          '<input type="radio" id="basic" name="material" value="basic"s onclick="ChangeMaterial(1)"><label for="male">Basic</label>' +
          '<input type="radio" id="lambert" name="material" value="lambert" onclick="ChangeMaterial(2)"><label for="female">Lambert</label>' +
          '<input type="radio" id="phong" name="material" value="phong" onclick="ChangeMaterial(3)"><label for="other">Phong</label>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Done',
      });

    } 

    else if (evt == 5) {

      // CONE
      var geometry = new THREE.ConeGeometry(1, 2, 50);

      // MATERIAL
      //var material = material; 
       
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh); 
      sceneReady = true;
    }
    
    else if (evt == 7) {

      // CYLINDER
      var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1,32);
      //var material = material;

      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);
      sceneReady = true;
    }

    else if (evt == 9) {

      //SPHERE
      var geometry = new THREE.SphereGeometry(0.5, 50, 50);

      // MATERIAL
      //var material = material; 
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh); 
      sceneReady = true;
    }

    else if (evt == 11) {

      // PYRAMID
      var geometry = new THREE.ConeGeometry(1.5, 2, 3);     

      // MATERIAL
      //var material = material; 
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh); 
      sceneReady = true;
    }
}


function initEventHandler(evt)
{
	
}

function ChangeMaterial(value)
{
  if (value == 0){
    material = new THREE.MeshBasicMaterial({color: "grey", wireframe: true});
  } else if (value == 1){
    material = new THREE.MeshNormalMaterial(); 
  } else if (value == 2){
    material = new THREE.MeshLambertMaterial({color: "green"}); 
  } else if (value == 3){
    material = new THREE.MeshPhongMaterial({color: "red", shininess: 100}); 
  }
}
