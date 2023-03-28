import { object, string, number, date, array } from 'yup';

export const tournamentSchema = object({
    name : string().required().max(40)
})

export const slotSchema = object({
    day : string().required().max(40),
    startTime : string().required(),
    endTime : string().required()
})

export const playerSchema = object({
    name : string().required().max(40),
    slots : array(slotSchema)
})

export const playerBodySchema = object({
    name : string().required().max(40),
    slots : string().required()
})

export const poolsSchema = object({
    pool : string().required()
}) 
