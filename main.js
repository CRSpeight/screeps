var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var numberOfBuilders = 5;
var numberOfUpgraders = 3;
var numberofHarvester = 5;


module.exports.loop = function() {
    for (r in Game.rooms){Game.rooms[r].controller.activateSafeMode();}
    for (c in Game.structures)
    {
        console.log(Game.structures[c] + " Capacity: " + Game.structures[c].energy + ", Max: " + Game.structures[c].energyCapacity);

    }
    var activeHarvesters = 0;
    var activeUpgraders = 0;
    var activeBuilders = 0;
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    for (var i in Game.creeps){
        if (Game.creeps[i].memory.role == 'upgrader'){activeUpgraders++;}
        if (Game.creeps[i].memory.role == 'harvester'){activeHarvesters++;}
        if (Game.creeps[i].memory.role == 'builder'){activeBuilders++;}
        var creep = Game.creeps[i];
        if (creep.memory.role == 'upgrader'){

            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
    }

    if (activeHarvesters < numberofHarvester){
        Game.spawns['Spawn1'].createCreep([WORK,MOVE,MOVE,CARRY], null, {role: 'harvester'});
    }

    if (activeUpgraders < numberOfUpgraders){
        Game.spawns['Spawn1'].createCreep([WORK,MOVE,MOVE,CARRY], null, {role: 'upgrader'});
    }
    if (activeBuilders < numberOfBuilders){
        Game.spawns['Spawn1'].createCreep([WORK,MOVE,MOVE,CARRY], null, {role: 'builder'});
    }

};