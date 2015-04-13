var scene2 = new THREE.Scene();
var camera2 = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 0.1, 1000);

var renderer2 = new THREE.WebGLRenderer({ alpha:true });
renderer2.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer2.domElement);


var geometry3 = new THREE.BoxGeometry(200, 50, 0);
var material3 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var cube3 = new THREE.Mesh(geometry3, material3);
scene2.add(cube3);
            camera2.position.z = 0.1;
cube3.position.y = -1;

var render = function () {
    requestAnimationFrame(render);
    renderer2.render(scene2, camera2);
};
