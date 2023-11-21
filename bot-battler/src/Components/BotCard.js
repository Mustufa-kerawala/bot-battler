import React from "react";


function BotCard({ bot, addBotToArmy, removeBotFromArmy }) {
    const { id, name, avatar_url, catchphrase } = bot;
    
    return (
        <div className="ui column">
        <div className="ui card">
            <div className="image">
            <img alt={name} src={avatar_url} />
            </div>
            <div className="content">
            <div className="header">{name}</div>
            <div className="meta text-wrap">
                <small>{catchphrase}</small>
            </div>
            <button
                className="ui button primary"
                onClick={() => addBotToArmy(bot)}
            >
                Hire Me
            </button>
            <button
                className="ui button negative"
                onClick={() => removeBotFromArmy(id)}
            >
                Fire Me
            </button>
            </div>
        </div>
        </div>
    );
    }

export default BotCard;