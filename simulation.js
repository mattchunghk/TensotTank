var canvas = document.getElementById("battlefield");
var renderer = JsBattle.createRenderer("debug");
renderer.init(canvas);
//renderer.initBatlefield(battlefield);
var startTime;

var simulation = JsBattle.createSimulation(renderer);

simulation.init(900, 600);
for (var i = 0; i < 3; i++) {
  let ai = JsBattle.createAiDefinition();
  let ai2 = JsBattle.createAiDefinition();

  ai.fromFile("team1");
  ai2.fromFile("team2");
  //ai.fromCode("test", code);
  // ai.disableSandbox();
  //ai.executionLimit = 1000;
  //ai2.executionLimit = 1000;
  ai.assignToTeam("team1");
  ai2.assignToTeam("team2");

  simulation.addTank(ai);
  simulation.addTank(ai2);
  console.log(simulation);
}

simulation.setSpeed(1);

simulation.onStart(() => {
  startTime = new Date().getTime();
});

simulation.onStep(async () => {
  console.log(simulation);
  // const simulationRes = await fetch("/", {
  //   method: "POST",
  //   body: JSON.stringify(simulation.tankList), //記得JSON出寫返headers
  //   headers: { "Content-Type": "application/json" },
  // });
});

simulation.onFinish(() => {
  // console.log(simulation);
  // for (let tankList of simulation.tankList) {
  //   console.log(tankList._score);
  // }

  var stopTime = new Date().getTime();
  var duration = stopTime - startTime;
  console.log("Battle duration: " + duration + "ms");
  //startBattle();
});
simulation.start();
