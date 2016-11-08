var roleUpgrader = {
    run: function(creep){
        //var sources = creep.room.find(FIND_SOURCES);
        var sources = creep.pos.findClosestByPath(FIND_SOURCES);

        if (creep.memory.energy == 'full') {
            creep.moveTo(creep.room.controller);
            creep.upgradeController(creep.room.controller);
        }
        if (creep.carry.energy == 0) {
            creep.memory.energy = 'empty';
            //console.log(creep.name + " out of energy. Returning to harvest.");
        }
        if (creep.carry.energy < creep.carryCapacity && creep.harvest(sources) != OK && creep.memory.energy != 'full'){
            creep.moveTo(sources);
        }

        if (creep.carry.energy < creep.carryCapacity && creep.harvest(sources) == OK && creep.memory.energy != 'full'){
            creep.harvest(sources);
        }

        if (creep.carry.energy >= creep.carryCapacity){
            creep.memory.energy = 'full';
        }


    }


};
module.exports = roleUpgrader;


