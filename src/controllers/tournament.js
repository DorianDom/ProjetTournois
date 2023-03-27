import { playerBodySchema, tournamentSchema } from "../models/models.js"
import { randomUUID } from 'node:crypto'
import { loadTournaments, saveTournaments } from "../services/tournament.js"

export async function addTournament(req,res){

    try{
        const tournament = await tournamentSchema.validate(req.body)
    tournament.id = randomUUID()
    tournament.players = []
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
    res.render("tournament",{tournament})
}

export async function showAddPlayer(){
    console.log(req.params.id);
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    res.render("addPlayers",{tournament})
}

export async function addPlayer (req,res){

    const player = await playerBodySchema.validate(req.body)
    player.id = randomUUID()
    const tournaments = await loadTournaments()
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    tournament.players.push(player)
    saveTournaments(tournaments)
    res.redirect("/tournament/"+req.params.id)
}

export function startTournament(req,res){
    res.send("tournoi démarré (v2)")
}
