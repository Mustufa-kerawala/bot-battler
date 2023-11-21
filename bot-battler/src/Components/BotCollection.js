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

    function removeBotFromCollection(id) {
        const updatedBots = bots.filter(bot => bot.id !== id)
        setBots(updatedBots)
    }
    
    // Step 5 - Create removeFromService function to remove bot from backend...
    function removeFromService(id) {
        fetch(`http://localhost:3001/bots/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => {
            removeBotFromArmy(id)
            removeBotFromCollection(id)
        })
    }
    
    return (
        <div>
        <h2>Bot Army</h2>
        <YourBotArmy botCollection={army}/>
        
        <h2>Bot Collection</h2>

        {
            bots.map(bot => {
                return <BotCard key={bot.id} 
                bot={bot} 
                addBotToArmy={addBotToArmy} 
                removeBotFromArmy={removeBotFromArmy}
                removeBotFromService={removeFromService} />
            })
        }
        </div>
    );
    }

export default BotCollection;