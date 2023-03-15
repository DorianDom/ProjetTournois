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
app.get("/pool/:nbP",(req,res)=>{
    console.log(req.params.nbP);
    const pool = pool.find((t)=>t.nbP === req.params.nbP)
    console.log(pool);
    res.render("pool",{pool})
})
app.get("/bracket/:nbB",(req,res)=>{
    console.log(req.params.nbB);
    const bracket = bracket.find((t)=>t.nbB === req.params.nbB)
    console.log(bracket);
    res.render("bracket",{bracket})
})
app.listen(4000)