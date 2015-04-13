function BackGround(){
  this.bg_geometry = new THREE.BoxGeometry(1, 10, 20);
  this.bg_texture = THREE.ImageUtils.loadTexture('/bg/default/track.jpg');
  this.bg_material = new THREE.MeshBasicMaterial({ map: this.bg_texture });
  this.bg_material.side = THREE.DoubleSide;
  this.bg_cube = new THREE.Mesh(this.bg_geometry, this.bg_material);

  this.getMesh = function() {
    return this.bg_cube;
  }

  this.aniNext = function() {
    this.bg_texture.offset.set((s * 0.01) % 1);
  }
}
