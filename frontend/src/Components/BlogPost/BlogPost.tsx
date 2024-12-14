import React, { useState } from "react";
import { PokemonController } from "./PokemonController"
import { Paper } from '@mui/material'

// takes information from api call and displays in the form
// of a pokemon card

interface PokemonProps {
    // types for pokemon data when converted
    id: string
    name: string
    type: string []
    moves: string []
    img: string
    height: string 
    weight: string
}

export const PokemonView = ({
    // pokemon card component - contains id, name, type, four moves, a picture, 
    // height in meters, and weight in kg
    id,
    name,
    type,
    moves,
    img,
    height,
    weight
}: PokemonProps) => {

    const typeString = (type.length == 1) ? type[0] : type[0] + "/" + type[1]
    console.log(name, + ": " + type.length)
    const moveMargin = '50px'
    const hwMargin = '100px'
    const heightString = "Height: " + Number(height)/10 + "m"
    const weightString = "Weight: " + Number(weight)/10 + "kg"

    return (
        <center>
            <div style={{width: '800px', paddingTop: '20px', paddingBottom: '20px'}}>
                    <Paper style={{height: '800px'}}>
                        <h1>{name.toUpperCase()}</h1>  { /* pokemon name */ }
                        <img src={img} width='auto' alt={name}/>  { /* picture */ }
                        <h2>{typeString.toUpperCase()}</h2>  { /* type */ }
                        <h3> { /* four moves */ }
                            <br/>
                            <span style={{paddingRight: moveMargin}}>{moves[0].toUpperCase()}</span>
                            <span style={{paddingLeft: moveMargin}}>{moves[1].toUpperCase()}</span>
                            <br/>
                            <span style={{paddingRight: moveMargin}}>{moves[2].toUpperCase()}</span>
                            <span style={{paddingLeft: moveMargin}}>{moves[3].toUpperCase()}</span>
                        </h3>
                        <h4> { /* height and weight */ }
                            <br/>
                            <span style={{paddingRight: hwMargin}}>{heightString.toUpperCase()}</span>
                            <span style={{paddingLeft: hwMargin}}>{weightString.toUpperCase()}</span>
                        </h4>
                    </Paper>
            </div>
        </center>
    )
}