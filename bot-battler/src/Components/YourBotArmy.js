import React from "react";



function YourBotArmy({ botCollection }) {



    
    
    
    return (
        <div>
        
        <ul>
            {
                botCollection.map(bot => {
                    return <li key={bot.id}>{bot.name}</li>
                })
            }
        </ul>



        {/* <ul>
            {army.map((bot) => (
            <li key={bot.id}>{bot.name}</li>
            ))}
        </ul> */}
        </div>
    );
    
}

export default YourBotArmy;


// const YourBotArmy = ({ botCollection }) => {
//     const [army, setArmy] = useState([]);
  
//     const hireBot = (bot) => {
//       setArmy([...army, bot]);
//     };
  
//     return (
//       <div>
//         <h2>Your Bot Army</h2>
//         <ul>
//           {army.map((bot) => (
//             <li key={bot.id}>{bot.name}</li>
//           ))}
//         </ul>
//     )