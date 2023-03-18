export const createPools = (players) => {
    let pool=null
    if(players.length<=5){
        let p1=[players]
        return p1
    }
    else if(players.length=6){
        let p1=[players[0],players[1],players[2]]
        let p2=[players[3],players[4],players[5]]
        pool=[p1,p2]
        return pool
    }
    else if(players.length=7){
        let p1=[players[0],players[1],players[2]]
        let p2=[players[3],players[4],players[5],players[6]]
        pool=[p1,p2]
        return pool
    }
    else if(players.length=8){
        let p1=[players[0],players[1],players[2],players[3]]
        let p2=[players[4],players[5],players[6],players[7]]
        pool=[p1,p2]
        return pool
    }
    else return null
}