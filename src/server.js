import express from 'express'
import { randomUUID } from 'node:crypto'
import { addMatch, addPlayer, addTournament, showAddPlayer, showMatch, showPlayer, showTournament, showTournaments, startTournament } from './controllers/tournament.js'
import { playerBodySchema, tournamentSchema } from './models/models.js'

const app = express()

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set('views','src/views')
app.get("/",showTournaments)
app.post("/tournament",addTournament)
app.get("/tournament/:id",showTournament)
app.get("/tournament/:id/player",showAddPlayer)
app.get("/tournament/:id/player/:idP",showPlayer)
app.post("/tournament/:id/player/add",addPlayer)
app.all("/tournemant/:id/start",startTournament)
app.get("/tournament/:id/match",showMatch)
app.post("/tournament/:id/match/add",addMatch)
app.listen(4000)
