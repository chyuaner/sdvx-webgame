var offset = window.innerHeight*0.7; // 調整軌道高度

// 建立場景
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight + offset), 0.1, 1000);

// 建立畫布
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setViewport (0, 0, window.innerWidth, window.innerHeight + offset);
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

// 判定線
var judge_line_geometry = new THREE.CylinderGeometry(0.015, 0.015, 1.1);
var judge_line_material = new THREE.MeshBasicMaterial({ color: 0xFF00A6 });
var judge_line = new THREE.Mesh(judge_line_geometry, judge_line_material);
judge_line.rotation.z = THREE.Math.degToRad(90);
judge_line.position.y = -0.9;
judge_line.position.z = 4.16;
scene.add(judge_line);
// 判定線左右偏移(+-0.07)
judge_line.position.x = 0;

// 建立其中bt白音符
var bt_geometry = new THREE.BoxGeometry(0.15, 0.01, 0.09);
var bt_material = new THREE.MeshBasicMaterial({ color: 0xffffff });
bt_material.transparent = true;
bt_material.opacity = 0.8;
var bt1_cube = new THREE.Mesh(bt_geometry, bt_material);
var bt2_cube = new THREE.Mesh(bt_geometry, bt_material);
var bt3_cube = new THREE.Mesh(bt_geometry, bt_material);
var bt4_cube = new THREE.Mesh(bt_geometry, bt_material);
bt1_cube.position.y = -0.98;
bt2_cube.position.y = -0.98;
bt3_cube.position.y = -0.98;
bt4_cube.position.y = -0.98;
bt1_cube.position.x = -0.25;
bt2_cube.position.x = -0.086;
bt3_cube.position.x =  0.078;
bt4_cube.position.x =  0.242;
scene.add(bt1_cube);
scene.add(bt2_cube);
scene.add(bt3_cube);
scene.add(bt4_cube);


// 建立其中fx黃音符
var fx_geometry = new THREE.BoxGeometry(0.313, 0.01, 0.09);
var fx_material = new THREE.MeshBasicMaterial({ color: 0xff8e00 });
fx_material.transparent = true;
fx_material.opacity = 0.8;
var fx1_cube = new THREE.Mesh(fx_geometry, fx_material);
var fx2_cube = new THREE.Mesh(fx_geometry, fx_material);
fx1_cube.position.y = -0.9999;
fx2_cube.position.y = -0.9999;
fx1_cube.position.x = -0.169;
fx2_cube.position.x =  0.16;
scene.add(fx1_cube);
scene.add(fx2_cube);

// 軌道位置
// -10, 4, 4.73, 5.16
bt1_cube.position.z = -2;  // 起始
bt2_cube.position.z = 2.8;
bt3_cube.position.z = 3.8; // 平面軌道結束
bt4_cube.position.z = 5.16; // 傾斜軌道結束
fx1_cube.position.z = 2;
fx2_cube.position.z = 1.4;

// 建立背景
scene.add(bg.getMesh());

// 視角傾斜度(正為左傾斜，SDVXII最高傾斜度20)
camera.rotation.z = THREE.Math.degToRad(0);
// 視角垂直傾斜度(以負為主)
camera.rotation.x = THREE.Math.degToRad(0);
// 視角上下遠近(數字越大越遠)
camera.position.y = 0;
// 視角遠近
camera.position.z = 6;

var s = 0;
var render = function () {
    requestAnimationFrame(render);

    bg.aniNext();

    s += 0.2;

    camera.rotation.z = Math.cos(s * 0.1) * THREE.Math.degToRad(20);
    judge_line.position.x = Math.cos(s * 0.5) * 0.07;
    // bt2_cube.position.z =  Math.cos(s * 0.05) * 4.5;

    renderer.render(scene, camera);
};

render();

