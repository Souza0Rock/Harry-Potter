import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import styles from '../../styles/Characters/Characters.module.css'

Modal.setAppElement("#__next");

export default function MainCharacters (characters) {

    const [open, isOpen] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [items, setItems] = useState([]);
    
    const onItemClicked = (item) => {
        setItemSelecionado(item);
        isOpen(true);
    }

    const baseURL = "https://hp-api.herokuapp.com/api/characters"
    const [resposta, setResposta] = useState()

    useEffect(() => {
        axios.get(baseURL) .then((response) => {
        setResposta(response.data);
        })
    }, [])

    return (
        <main>
            <ul className={styles.ulCards}>
                <div className={styles.container}>
                    {resposta &&
                    resposta.map((characters ,index)=>{
                        return(
                            <li className={styles.ulCards_li}>
                                <div key={index}>
                                    <div className={styles.divImageCard} onClick={onItemClicked}><img alt={characters.name} src={characters.image} width='180px' height='244px'></img></div>
                                    <div className={styles.divCharactersName} onClick={onItemClicked}><h3 className={styles.charactersName}>{characters.name}</h3></div>
                                    <Modal isOpen={open}>
                                        <p>{characters.name}</p>
                                    </Modal>
                                    {items.map((item, index) => (
                                        <li key={'item-${index}'} onClick={() => onItemClicked(item)}>
                                            {item.name}
                                        </li>
                                    ))}
                                

                                </div>
                            </li>
                        )           
                    })}
                </div>
            </ul>
        </main>
    )
}