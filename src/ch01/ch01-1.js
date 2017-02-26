
var THREE = require('three');

function init() {
    //scene  场景 camera 相机 renderer 渲染器

    //创建场景
    var scene = new THREE.Scene();

    //相机
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    //渲染器
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEBB));
    renderer.setSize(window.innerWidth,window.innerHeight);

    //创建坐标轴 并添加到scene
    var axes = new THREE.AxisHelper(20);
    scene.add(axes); 

    //建立一个平面 并指定颜色 材质
    var planeGeometry = new THREE.PlaneGeometry(60,20);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);

    //设置平面的位置
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    //增加平面到场景
    scene.add(plane);


    //相机
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);


    //创建方块
    var cubeGeometry = new THREE.BoxGeometry(4,4,4);
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true});   //将线框设置为true
    var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);

    //方块位置
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    scene.add(cube);

    //创建球体
    var sphereGeometry = new THREE.SphereGeometry(4.20,20);
    var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.position.x = 20;
    sphere.position.y= 4;
    sphere.position.z = 2;
    scene.add(sphere);


    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);


}

window.onload = init;