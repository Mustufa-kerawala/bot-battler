import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";


function BotCollection() {
    // Step 1 - handle bot data and pass down props...
    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])
    


    // Step 2 - get data from fetch and set bots state...
    useEffect(() => {
        fetch("http://localhost:3001/bots")
        .then(resp => resp.json())
        .then(data => setBots(data))
    }, [])

    // Step 3 - render bot cards...


    // Step 4 - create function for adding bot to army... && remove bot from army...

    function addBotToArmy(newBot) {
        setArmy([...army, newBot])
    }

    function removeBotFromArmy(id) {
        const updatedBots = army.filter(bot => bot.id !== id)
        setArmy(updatedBots)
    }
    
    
    return (
        <div>
        <h2>Bot Army</h2>
        <YourBotArmy botCollection={army}/>
        
        <h2>Bot Collection</h2>

        {
            bots.map(bot => {
                return <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy} removeBotFromArmy={removeBotFromArmy} />
            })
        }
        </div>
    );
    }

export default BotCollection;