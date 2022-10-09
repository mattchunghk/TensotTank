importScripts("lib/tank.js");

tank.init(function (settings, info) {
  settings.SKIN = "forest";
});

tank.loop(function (state, control) {
  control.SHOOT = 0.1;
});
