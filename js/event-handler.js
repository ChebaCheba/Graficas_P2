function toolsEvent(evt) 
{
	// MODEL
    // GEOMETRY

    if (evt == 1) {
      var geometry = new THREE.BoxGeometry();        
      // MATERIAL
      var material = new THREE.MeshNormalMaterial();  
      // MESH (GEOMETRY + MATERIAL)
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      sceneReady = true;
    } 
    
    else if (evt == 3) {

      console.log("Plane")

      // PLANE
      var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
      var planeMaterial = new THREE.MeshBasicMaterial({color: "grey", wireframe: true});
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -0.5 * Math.PI;
      //plane.rotation.y = -0.3 * Math.PI;

      scene.add(plane);

      // var geometry = new THREE.SphereGeometry(0.5, 50, 50);        
      // // MATERIAL
      // var material = new THREE.MeshNormalMaterial(); 
      // mesh = new THREE.Mesh(geometry, material);
      // scene.add(mesh); 
       sceneReady = true;
    } 
    
    else if (evt == 9) {
      var geometry = new THREE.SphereGeometry(0.5, 50, 50);        
      // MATERIAL
      var material = new THREE.MeshNormalMaterial(); 
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh); 
      sceneReady = true;
    }
}


function initEventHandler(evt)
{
	
}
