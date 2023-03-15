import express from 'express'
import { object, string, number, date } from 'yup';
import { randomUUID } from 'node:crypto'

const app = express()

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set('views','src/views')
app.get("/",(req,res)=>{
    res.render("index",{tournaments})
})

const tournaments = [{name:"TC Tarbes printemps 2023 (messieurs)",id:randomUUID()}]
const tournamentSchema = object({
    name : string().required().max(40)
})

app.post("/tournament",async (req,res)=>{

    const tournament = await tournamentSchema.validate(req.body)
    tournament.id = randomUUID()
    tournaments.push(tournament)
    res.redirect("/")
})
app.get("/tournament/:id",(req,res)=>{
    console.log(req.params.id);
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    res.render("tournament",{tournament})
})
app.get("/tournament/:id/pool/:nbP",(req,res)=>{
    console.log(req.params.id);
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    const pool = pool.find((t)=>t.nbP === req.params.nbP)
    res.render("tournament",{tournaments},"pool",{pool})
})
app.get("/tournament/:id/bracket/:nbB",(req,res)=>{
    console.log(req.params.id);
    const tournament = tournaments.find((t)=>t.id === req.params.id)
    console.log(tournament);
    const bracket = bracket.find((t)=>t.nbB === req.params.nbB)
    res.render("tournament",{tournaments},"bracket",{bracket})
})
app.listen(4000)