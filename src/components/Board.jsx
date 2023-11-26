import React from "react"

function Board(props) {
    // console.log(props)

    const handleReset = () => {
        props.isWinner(false)
        // props.finished(false) is there a reason to use this?
    }

    const handleWin = () => {
        props.isWinner(true)
        // props.finished(true) Is there a reason to use this? (This needs to display a modal telling the player that they won)
    }

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
                </div>
                {props.winner === false ?
                    <button className="btn btn-primary" onClick={handleWin}>
                        Click me to Win!
                    </button>
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