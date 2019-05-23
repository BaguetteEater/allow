let camera;
let scene;
let renderer;

let init = () => {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0);

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.insertBefore(renderer.domElement, document.getElementsByTagName("footer").item(0));

};


let spawnFigure = () => {

    console.log("clicked");
    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    renderer.render( scene, camera );

};

let animate = () => {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

};

init();