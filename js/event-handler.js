function inputRadioSquareEventListener(evt){
  
  if(document.getElementById('animation').checked){
    //ANIMATION
    controls.enabled = true;
    document.getElementById("transform").style.display = "none";
    animationMode = true;
  }else{
    //EDITION
    controls.enabled = false;
    document.getElementById("transform").style.display = "block";
    animationMode = false;
  }
  
}

function toolsEvent(evt) 
{
	// MODEL
    // GEOMETRY

    if (animationMode) {
      return;
    }

    if (evt == 1) {

      // CUBE
      var geometry = new THREE.BoxGeometry();   

      // MESH (GEOMETRY + MATERIAL)
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = objId;
      scene.add(mesh);
      sceneReady = true;
      
    } 
    
    else if (evt == 3) {

      // PLANE
      var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
      var plane = new THREE.Mesh(planeGeometry, material);
      mesh.name = objId;
      plane.rotation.x = -1.3;// * Math.PI;

      scene.add(plane);
      sceneReady = true;
    } 

    else if (evt == 4) {

      Swal.fire({
        title: 'Select a material',
        imageUrl: './imgs/materials.png',
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
       
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = objId;

      scene.add(mesh); 
      sceneReady = true;


    }
    
    else if (evt == 7) {

      // CYLINDER
      var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1,32);
      //var material = material;

      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "cilindro";

      scene.add(mesh);
      sceneReady = true;
    }

    else if (evt == 9) {

      //SPHERE
      var geometry = new THREE.SphereGeometry(0.5, 50, 50);

      mesh = new THREE.Mesh(geometry, material);
      mesh.name = objId;
      scene.add(mesh); 
      sceneReady = true;
    }

    else if (evt == 11) {

      // PYRAMID
      var geometry = new THREE.ConeGeometry(1.5, 2, 3);     

      mesh = new THREE.Mesh(geometry, material);
      mesh.name = objId;

      scene.add(mesh); 
      sceneReady = true;
    }

    var animate = document.getElementById("animated").checked;
    if (animate) {
      animationObjects.push(mesh);
    }

    objId++;
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
    selectedObj = intersects[0].object;
    
  }

}

function translateObject(event) {
  if (selectedObj != null) {
    var x = document.getElementById("tx").value;
    var y = document.getElementById("ty").value;
    var z = document.getElementById("tz").value;

    selectedObj.position.set(x, y , z);
  }
}

function scaleObject(event) {
  if (selectedObj != null) {
    var x = document.getElementById("sx").value;
    var y = document.getElementById("sy").value;
    var z = document.getElementById("sz").value;

    selectedObj.scale.set(x, y, z);
  }
}

function updateLabel(event) {
  document.getElementById("ldeg").innerHTML = document.getElementById("degrees").value;
}

function rotateObject(event) {
  if (selectedObj != null) {
    var deg = document.getElementById("degrees").value
    selectedObj.rotation.set(0., 0., Math.PI*deg);
  }
}


function initEventHandler(evt)
{
  document.getElementById("animation").addEventListener("input", inputRadioSquareEventListener, false);
  document.getElementById("edition").addEventListener("input", inputRadioSquareEventListener, false);
  document.getElementById("tbutton").addEventListener("click", translateObject);
  document.getElementById("sbutton").addEventListener("click", scaleObject);
  document.getElementById("rbutton").addEventListener("click", rotateObject);
  document.getElementById("degrees").addEventListener("input", updateLabel, false);
  document.addEventListener('click', onMouseMove, false);
}

function ChangeMaterial(value)
{
  if (value == 0){
    material = new THREE.MeshBasicMaterial({color: color, wireframe: true});
  } else if (value == 1){
    material = new THREE.MeshNormalMaterial(); 
  } else if (value == 2){
    material = new THREE.MeshLambertMaterial({color: color}); 
  } else if (value == 3){
    material = new THREE.MeshPhongMaterial({color: color, shininess: 100}); 
  }
  materialNum = value;
}

function colorPaletteEvent() {
  color = document.getElementById("vertexColour").colorValue.value;
  ChangeMaterial(materialNum);
}
