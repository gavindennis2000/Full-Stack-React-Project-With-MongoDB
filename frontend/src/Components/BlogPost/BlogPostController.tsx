import { useState, useEffect } from "react";
import { PokemonView } from "./BlogPost"
import { Button, Paper, TextField} from '@mui/material'
import axios from 'axios'

// Pokemon Controller - handles API calls and converts to a proper object to 
// be parsed by PokemonView

interface PokemonFromAPI {
    // types of data extracted from pokeAPI
    id: number
    name: string
    types: [{
        slot: number
        type: {
            name: string
            url: string
        }
    }]
    moves: [{
        move: {
            name: string 
        }
    }]
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }
    height: number
    weight: number
}

interface Pokemon {
    // types for pokemon data when converted
    id: string
    name: string
    type: string []
    moves: string []
    img: string
    height: string 
    weight: string
}



export const PokemonController = () => {

    const pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/'

    // handle user input to get pokemon id
    const [pokeID, setPokeID] = useState<string>('1')
    const handleClick = () => {
        // only handle button click for positive numbers
        fetchPokemon(pokeID)
        
    }

    // handle data grab from api
    const [pokemon, setPokemon] = useState<Pokemon>()
    const fetchPokemon = async (pokeID: string) => {
        try {
            const result = await axios.get(pokemonURL + pokeID)
            const { data } = result 
            const pokemonData: PokemonFromAPI = data

            const convertedPokemon: Pokemon = {
                id: pokemonData.id.toString(),
                name: pokemonData.name,
                type: pokemonData.types.map(type => type.type.name),
                moves: pokemonData.moves.map(move => move.move.name),
                img: pokemonData.sprites.other["official-artwork"].front_default,
                height: pokemonData.height.toString(),
                weight: pokemonData.weight.toString()
            }

            setPokemon(convertedPokemon)
        }
        catch (e) {
            setPokemon(undefined)
        }
    } 
        

    
    useEffect(() => {
        fetchPokemon("1")
    }, [])

    return (
        <center>
            <div style={{width: '800px'}}>
                <Paper style={{backgroundColor: 'white'}}>
                <span>Enter a Pokémon ID to request information: </span>
                <TextField 
                    style={{width: '100px', height: '30px', margin: '10px', textAlign: 'right'}}
                    id="outlined-number"
                    label="Pokémon ID"
                    type="number"
                    margin='dense'
                    size='small'
                    slotProps={{
                        inputLabel: {
                        shrink: true,
                        },
                    }}
                    value={pokeID}
                    onChange={(event) => setPokeID(event.target.value)}
                />
                    <Button 
                        style={{margin: '10px', height: '40px'}}
                        variant='outlined' 
                        onClick={handleClick}
                    >Request Info</Button>
                </Paper>
            </div>
            { pokemon ? (  // only show pokemon card if the value isn't null
                <PokemonView 
                    key = {pokemon.id}
                    {...pokemon}
                />) : <Paper style={{width: '800px', margin: '10px'}}>Pokemon Not Found.</Paper> }
        </center>
    )
}