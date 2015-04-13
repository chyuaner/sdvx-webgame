var offset = window.innerHeight*0.6; // 調整軌道高度

// 建立場景
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight + offset), 0.1, 1000);

// 建立畫布
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight + offset);
renderer.setViewport (0, offset, window.innerWidth, window.innerHeight + offset);
document.body.appendChild(renderer.domElement);

// 建立背景
var bg = new BackGround();

// 建立軌道
var track_geometry = new THREE.BoxGeometry(1, 0, 20);
var track_material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../imgs/track.jpg') });
var track = new THREE.Mesh(track_geometry, track_material);
scene.add(track);
// 軌道位置
track.position.y = -1;

// 建立其中白音符
var bt_geometry = new THREE.BoxGeometry(0.15, 0.05, 0.01);
var bt_material = new THREE.MeshBasicMaterial({ color: 0xffffff });
var bt1_cube = new THREE.Mesh(bt_geometry, bt_material);
var bt2_cube = new THREE.Mesh(bt_geometry, bt_material);
var bt3_cube = new THREE.Mesh(bt_geometry, bt_material);
var bt4_cube = new THREE.Mesh(bt_geometry, bt_material);
scene.add(bt1_cube);
scene.add(bt2_cube);
scene.add(bt3_cube);
scene.add(bt4_cube);

bt1_cube.position.y = -0.9999;
bt2_cube.position.y = -0.9999;
bt3_cube.position.y = -0.9999;
bt4_cube.position.y = -0.9999;
bt1_cube.position.x = -0.25;
bt2_cube.position.x = -0.086;
bt3_cube.position.x =  0.078;
bt4_cube.position.x =  0.242;

// 白鍵軌道位置
bt1_cube.position.z = -10;  // 起始
bt2_cube.position.z = 3;
bt3_cube.position.z = 4.73; // 平面軌道結束
bt4_cube.position.z = 5.16; // 傾斜軌道結束

// 建立背景
scene.add(bg.getMesh());

// 視角傾斜度(正為左傾斜)
camera.rotation.z = THREE.Math.degToRad(0);
// 視角垂直傾斜度(以負為主)
camera.rotation.x = THREE.Math.degToRad(0);
// 視角上下遠近(數字越大越遠)
camera.position.y = 0
// 視角遠近
camera.position.z = 6;

var s = 0;
var render = function () {
    requestAnimationFrame(render);

    bg.aniNext();

    s += 0.2;

    // camera.rotation.z = Math.cos(s * 0.1) * 0.8

    // bt2_cube.position.z =  Math.cos(s * 0.05) * 4.5;

    renderer.render(scene, camera);
};

render();

