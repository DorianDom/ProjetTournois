export const createPools = (players) => {
    let pool=null
    if(players.length<=5){
        let p1=[players]
        return p1
    }
    else if(players.length=6){
        pool=[players[0,1,2],players[3,4,5]]
        return pool
    }
    else if(players.length=7){
        return pool[players[0,1,2,3],players[4,5,6]]
    }
    else if(players.length=8){
        return pool[players[0,1,2,3],players[4,5,6,7]]
    }
    else return null
}