export const createPools = (players) => {
    const playersPerPool = 4;
    const numPools = Math.ceil(players.length / playersPerPool);
    const pools = [];
    for (let i = 0; i < numPools; i++) {
        pools.push([]);
    }
    
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const poolIndex = i % numPools;
        pools[poolIndex].push(player);
    }
    return pools;
    
}