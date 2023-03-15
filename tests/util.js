export const createPlayers = (nbPlayers) => {
    let players = []
    for (let i = 1; i <= nbPlayers; i++) {
        let player = { name: "J" + i, rank: i }
        players.push(player)
    }
    return players
}
