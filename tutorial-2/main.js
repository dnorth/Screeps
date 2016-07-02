var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

var count = 3

module.exports.loop = function () {
    
    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester')
            roleHarvester.run(creep);
        else if (creep.memory.role == 'builder')
            roleBuilder.run(creep);
    }
    
    //if( Game.spawns.Spawn1.canCreateCreep) {
    //    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], 'Meep' + count, { role: 'harvester'})
    //    count += 1
    //}
}