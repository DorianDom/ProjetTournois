import { playerBodySchema, tournamentSchema,poolsSchema } from "../models/models.js"
import { randomUUID } from 'node:crypto'
import { loadTournaments, saveTournaments } from "../services/tournament.js"
import { createPools } from "../services/pools.js"

export async function addTournament(req,res){

    try{
        const tournament = await tournamentSchema.validate(req.body)
    tournament.id = randomUUID()
    tournament.players = []
    tournament.pools = []
    const tournaments = await loadTournaments()
    tournaments.push(tournament)
    saveTournaments(tournaments)
    console.log("ok");
    res.redirect("/")
    }
    catch(err){
        console.log(err);
        res.status(500).send(err.msg)
    }
}

export async function showTournaments(req,res){
    const tournaments = await loadTournaments()
    res.render("index",{tournaments})
}

export async function showTournament (req,res){
    console.log(req.params.id);
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    res.render("tournaments",{tournament})
}

export async function showAddPlayer(req,res){
    console.log(req.params.id);
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    res.render("addPlayers",{tournament})
}

export async function showPlayer(req,res){
    console.log(req.params.id);
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    const player= tournament.players.find((t)=>t.id===req.params.idP)
    console.log(tournament);
    console.log(player);
    res.render("player",{tournament,player})
}


export async function addPlayer (req,res){
    let player=req.body
    if(Array.isArray(player.slots)){
        player.slots=player.slots.join(",")
    }
    player = await playerBodySchema.validate(player)
    player.id = randomUUID()
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    tournament.players.push(player)
    saveTournaments(tournaments)
    res.redirect("/tournament/"+req.params.id)
}




export async function startTournament(req,res){
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    let pools = createPools(tournament.players)
    tournament.pools=[]
    for(const pool of pools){
        tournament.pools.push({players:pool,id:randomUUID()})
    }
    saveTournaments(tournaments)
    console.log("tournoi démarré (v2)")
    res.redirect("/tournament/"+req.params.id)
}




export async function showMatch(req,res){
    console.log(req.params.id);
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    res.render("matchs",{tournament})
}

export async function showPool(req,res){
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    const player= tournament.players.find((t)=>t.id===req.params.idP)
    console.log(tournament);
    res.render("matchs",{tournament})
}

export async function addMatch(req,res){

}