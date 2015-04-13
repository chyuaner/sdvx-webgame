function BackGround(){
  this.bg_geometry = new THREE.CylinderGeometry(3, 3, 100);
  this.bg_texture = THREE.ImageUtils.loadTexture('/bg/default/track.jpg');
  this.bg_texture.rotation = THREE.Math.degToRad(90);
  this.bg_material = new THREE.MeshBasicMaterial({ map: this.bg_texture });
  this.bg_material.side = THREE.DoubleSide;
  this.bg_cube = new THREE.Mesh(this.bg_geometry, this.bg_material);
  this.bg_cube.rotation.x = THREE.Math.degToRad(90);

  this.getMesh = function() {
    return this.bg_cube;
  }

  this.aniNext = function() {
    this.bg_texture.offset.y = -((s * 0.02) % 1);
  }
}
