import React from "react"
import { useState, useEffect } from "react"

function Board(props) {
    const [player, playerHand] = useState([])
    const [dealer, dealerHand] = useState([])
    // console.log(props)

    useEffect(() => {
        console.log('something happened')
    }, [props.winner]) // adding props.winner tells the useEffect to only happen once winner state has changed (of course only )

    const handleReset = () => {
        props.isWinner(false)
        // props.finished(false) is there a reason to use this?
    }

    const handleWin = () => {
        props.isWinner(true)
        // props.finished(true) Is there a reason to use this? (This needs to display a modal telling the player that they won)
    }

    const handlePlayerHit = () => {
        player.push('a6') // This needs to push the randomly drawn/dealt card from the deck/dealer
        console.log(player) // This displays the players' hand
    }

    //// create hands for both CPU and PLAYER (this can be done in state)
    // initialize what the beginning of the game would look like
    // this should be a function that start everytime the game is begun (when StartGame is clicked..... or maybe automatically)
    // the sum of each hand needs to be tracked
    // if the sum of PLAYER or CPU hand goes over 21... they BUST (meaning lose)
    // when player stands there needs to be a function checking who got closer to 21. Whover is equal to or closer wins
    //if there is a draw then state draw and give them new cards

    if (props.winner === undefined) {
        return (
            <>
                <h1>Error has occured</h1>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <div>
                        <h1>Blackjack</h1>
                    </div>
                    <div>
                        <h2>this is CPU area</h2>
                        {/* CPU SPACE */}
                    </div>
                    <div>
                        <h2>this is PLAYER area</h2>
                        {/* PLAYER SPACE */}
                    </div>
                        <div id="deck" className="card large back-blue shadow"></div>
                </div>
                {props.winner === false ?
                <>
                    <button className="btn btn-primary" onClick={handleWin}>
                        Click me to Win!
                    </button>
                    <button className="btn btn-info" onClick={handlePlayerHit}>
                        Click me PUSH!
                    </button>

                </>
                    :
                    <button className="btn btn-secondary" onClick={handleReset}>
                        To Reset!
                    </button>
                }
                {/* <div className='buttons flex justify-around w-full'>
                    {game ?
                        <>
                            Make all buttons the same size.
                            <div>
                                <button className='btn btn-primary'>
                                    Hit
                                </button>
                                <button className='btn btn-secondary'>
                                    Stand
                                </button>
                            </div>
                            <button className='btn btn-accent'>
                                Reset
                            </button>
                        </>
                        :
                        <>
                            <button className='btn btn-primary'>
                                Start Game!
                            </button>
                        </>
                    }
                </div>  */}
            </>
        )
    }
}


// Create gameboard background.
// Create section for CPU side vs Player side.
// Add buttons for player to choose to Hit or Stand.
// Use terminology like Bust when losing.
// Incorporporate Bidding, Splitting, Betting (to some extent).


export default Board