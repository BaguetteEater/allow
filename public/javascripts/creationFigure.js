let camera;
let scene;
let renderer;
let controls;
let loadedFont;
let loader = new THREE.FontLoader();

let isGlowingEnabled = false;
let glowingColor;

let isNameHere = false;
let name;
let mvt = 0.017;
let direction = "xy";

let listFigure = [];

let init = () => {
    ////////////////////////
    //  Scene & Renderer  //
    ////////////////////////
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({alpha: true});

    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;

    document.body.insertBefore(renderer.domElement, document.getElementsByTagName("footer").item(0));

    /////////////////
    //   Lumiere   //
    /////////////////
    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.castShadow = true;
    light.position.set(0, 3, 2);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;

    light.shadow.camera.near = 2;
    light.shadow.camera.far = 5;
    light.shadow.camera.left = -0.5;
    light.shadow.camera.right = 0.5;
    light.shadow.camera.top = 0.5;
    light.shadow.camera.bottom = -0.5;
    scene.add(light);

    let lightAmbiant = new THREE.AmbientLight(0x222222);
    scene.add(lightAmbiant);

    /////////////////
    //  Controles  //
    /////////////////
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = -50;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;

    renderer.render(scene, camera);
};

let generateFigures = (figureData) => {

    renderer.clear(true, true, true);

    for(let j = 0; j < figureData.graphics.length; j++) {
        if(figureData.graphics[j].type === 'glow') {
            isGlowingEnabled = true;
            glowingColor = figureData.graphics[j].properties.glowingColor;
        }
    }

    let isWordGenerated = false;

    for(let i = 0; i < figureData.graphics.length; i++) {

        let type = figureData.graphics[i].type;
        let color = figureData.graphics[i].properties.color;
        let coordonnees = figureData.graphics[i].coordinates;
        let geometry;

        switch (type) {
            case 'word' :
                geometry = buildWord(figureData.graphics[i].properties.word, figureData.graphics[i].scale);
                isNameHere = true;
                isWordGenerated = true;
                break;

            case 'polygon' :
                geometry = buildPolygon(figureData.graphics[i].properties.shape, figureData.graphics[i].scale);
                break;

            case 'picture' :
                //NINON
                break;
        }

        let figure;
        let material = new THREE.MeshLambertMaterial({color: color});

        figure = new THREE.Mesh(geometry, material);
        figure.castShadow = true;
        figure.receiveShadow = true;

        if(isWordGenerated)
            name = figure;

        if(isGlowingEnabled)
            buildGlowing(figure);

        listFigure.push(figure);
        scene.add(figure);

        figure.position.set(coordonnees.x, coordonnees.y, coordonnees.z);
        camera.position.z = 5;
        isWordGenerated = false;
    }
        renderer.render(scene, camera);

};

let buildPolygon = (shape, scale) => {
    if(shape === "cube")
        return new THREE.BoxGeometry(scale/150, scale/150, scale/150, 2, 2, 2);
};

let buildGlowing = (mesh) => {

    // SUPER SIMPLE GLOW EFFECT
    // use sprite because it appears the same from all angles
    let loader = new THREE.TextureLoader();

    loader.load( 'images/glow.png', (texture) => {

        let spriteMaterial = new THREE.SpriteMaterial(
            {
                map: texture,
                color: "#0000ff",
                transparent: false,
                blending: THREE.AdditiveBlending
            });

        let sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(200, 200, 1.0);
        mesh.add(sprite);

    });
};

let buildWord = (word, scale) => {
    return new THREE.TextGeometry(word, {
        font: loadedFont,
        size: scale/150,
        height: scale/200
    })
};

let animate = () => {

    requestAnimationFrame(animate);
    controls.update();

    if(isNameHere && name) {

        switch (direction){
            case "xy":
                name.position.set(name.position.x + mvt, name.position.y + mvt, name.position.z);
                break;
            case "xz":
                name.position.set(name.position.x + mvt, name.position.y, name.position.z + mvt);
                break;
            case "yz" :
                name.position.set(name.position.x, name.position.y+mvt, name.position.z + mvt);
                break;
        }

        if (name.position.x > 2 || name.position.y > 2 || name.position.z > 2) {
            mvt = -0.017;
            changeDirection();
        }

        if (name.position.x < -2 || name.position.y < -2 || name.position.z < -2){
            mvt = 0.017;
            changeDirection();
        }
    }

    renderer.render(scene, camera);

};

let changeDirection = () => {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0)
        direction = "xz";
    else if (rand === 1)
        direction = "xy";
    else
        direction = "yz";
};

animate();