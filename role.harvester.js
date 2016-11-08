var roleHarvester = {
    run: function (creep) {
        var sources = creep.pos.findClosestByPath(FIND_SOURCES);
        if (creep.carry.energy >= creep.carryCapacity) {
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
            else {
                creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY);
            }
        }
        else if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources);
        }
        else {
            creep.harvest(sources);
        }
    }
};

module.exports = roleHarvester;

