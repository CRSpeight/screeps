var roleBuilder = {
    run: function(creep){
        //var sources = creep.room.find(FIND_SOURCES);
        var sources = creep.pos.findClosestByPath(FIND_SOURCES);
        var constructionSite = creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);

        //if energy is full and site is out or range, move closer
        if (creep.memory.energy == 'full' && creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
            creep.moveTo(constructionSite);
        }

        //if energy is full and site is in range, build it!
        if (creep.memory.energy == 'full' && creep.build(constructionSite)== OK) {
            creep.build(constructionSite);
        }

        //Sets Memory State to Empty when energy reaches zero
        if (creep.carry.energy == 0) {
            creep.memory.energy = 'empty';
        }

        //If creep carry energy is less than capacity (and not full), move to energy source if out of range
        if (creep.carry.energy < creep.carryCapacity && creep.harvest(sources) != OK && creep.memory.energy != 'full'){
            creep.moveTo(sources);
        }

        //If creep carry energy is less than capacity (and not full), harvest energy if within range
        if (creep.carry.energy < creep.carryCapacity && creep.harvest(sources) == OK && creep.memory.energy != 'full'){
            creep.harvest(sources);
        }

        //If creep energy is full, set energy memory value to full
        if (creep.carry.energy >= creep.carryCapacity){
            creep.memory.energy = 'full';
        }


    }


};
module.exports = roleBuilder;
