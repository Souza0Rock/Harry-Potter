// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function ListCards(characters) {

//     const baseURL = "https://hp-api.herokuapp.com/api/characters"
//     const [resposta, setResposta] = useState()


//     useEffect(() => {
//         axios.get(baseURL) .then((response) => {
//         setResposta(response.data);
//         })
//     }, [])

//     return (
//         resposta.map((characters ,index)=>{
//             return(
//             <li>
//                 <div key={index}>
//                     <div className={styles.divImageCard}><img alt='teste' src={characters.image} width='163px' height='227px'></img></div>
//                     <div className={styles.divCharactersName}><h3 className={styles.charactersName}>{characters.name}</h3></div>
//                 </div>
//             </li>
//             )           
//         })
//     )
// }