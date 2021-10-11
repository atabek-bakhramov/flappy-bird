const Phaser = window.Phaser;

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
  },
  scene: {
    preload,
    create,
  },
};

function preload() {
  // 'this' context - scene
  debugger;
}

function create() {
  debugger;
}

new Phaser.Game(config);
