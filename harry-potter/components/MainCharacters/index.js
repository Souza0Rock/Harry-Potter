import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal"; 
import styles from '../../styles/Characters/Characters.module.css'
import stylesMobile from '../../styles/Home/Home.module.css'

Modal.setAppElement("#__next");

export default function MainCharacters (characters) {

    const [open, setIsOpen] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [items, setItems] = useState([]);

    const onItemClicked = (item) => {
        setItemSelecionado(item);
        setIsOpen(true);
    }
    
    const baseURL = "https://hp-api.herokuapp.com/api/characters"
    const [character, setCharacters] = useState()
    
    function pickCharacters(house) {
        if (house != undefined){
                if (house == 'all'){
                    axios.get(baseURL).then((response) => setCharacters(response.data))
                }
                else {
                    axios.get(baseURL + `/house/${house}`).then((response) => setCharacters(response.data))
                }
        }
    }

    const [house, setHouse] = useState()

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            setHouse(params.toString().replace('house=', ''))
            pickCharacters(house)                   
        }       
    }, [house])

    return (
        <main className={stylesMobile.main__mobile}>
            <ul className={styles.ulCards}>
                <div className={styles.container}>
                {character && character.map((characters, index) => {
                        return (
                            <li key={index} className={styles.ulCards_li}>                                
                                <div className={styles.divImageCard} onClick={() => onItemClicked(characters)} key={index}>
                                    {characters.image ? <img
                                    alt={characters.name}
                                    src={characters.image}
                                    width="180px"
                                    height="244px"
                                    className={styles.imgGlobal}
                                    /> : <img
                                    alt={characters.name}
                                    src="/images/default.png"
                                    width="180px"
                                    height="244px"
                                    className={styles.imgGlobal}
                                    />}
                                </div>
                                <div
                                    className={styles.divCharactersName}
                                    onClick={() => onItemClicked(characters)}
                                >
                                    <h3 className={styles.charactersName}>{characters.name}</h3>
                                </div>
                                {items.map((item, index) => (
                                    <li key="item-${index}" onClick={() => onItemClicked(item)}>
                                    {item.name}
                                    </li>
                                ))}
                            </li>
                        );
                    })}
                </div>
            </ul>           
            <Modal isOpen={open}
                overlayClassName={styles.modalOverlay}
                className={styles.modalContent}
            >
                <div className={styles.modalContent_div}>
                    <div className={styles.container}>                        
                        <div className={styles.modalImg_div}>
                            {itemSelecionado == null? 'vla' : itemSelecionado?.image ? <img
                            alt={itemSelecionado == null? 'vla' : itemSelecionado?.name}
                            src={itemSelecionado == null? 'vla' : itemSelecionado?.image}
                            width="270px"
                            height="349px" 
                            className={styles.imgGlobal_modal}
                            /> : <img
                            alt={itemSelecionado == null? 'vla' : itemSelecionado?.name}
                            src="/images/default.png"
                            width="230px"
                            height="309px" 
                            className={styles.imgDefault_modal}
                            />}
                        </div>
                        <div className={styles.modalTxt_div}>
                            <ul className={styles.modalContent_ul}>
                                <div className={stylesMobile.container}>
                                    <li className={styles.modalContent_liP}>
                                        <p className={styles.modalContent_p}>nome: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.name}</span></p>
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.house ? <p className={styles.modalContent_p}>casa: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.house}</span></p> : 
                                        <p className={styles.modalContent_p}>casa: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.species ? <p className={styles.modalContent_p}>espécie: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.species}</span></p> :
                                        <p className={styles.modalContent_p}>espécie: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.dateOfBirth ?<p className={styles.modalContent_p}>data<span clasName={styles.modalContent_p__span_de}> de </span>nasc.: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.dateOfBirth}</span></p> :
                                        <p className={styles.modalContent_p}>data<span clasName={styles.modalContent_p__span_de}> de </span>nasc.: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.gender ? <p className={styles.modalContent_p}>gênero: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.gender}</span></p> :
                                        <p className={styles.modalContent_p}>gênero: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.patronus ? <p className={styles.modalContent_p}>patronus: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.patronus}</span></p> :
                                        <p className={styles.modalContent_p}>patronus: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        <p className={styles.modalContent_p}>varinha: </p>
                                        <ul className={styles.modalContent_wandUl}>
                                            {itemSelecionado?.wand?.wood ? <li><p className={styles.modalContent_wandLi_p}>- madeira: <span className={styles.modalContent_wandLi_p_span}>{itemSelecionado == null? 'vla' : itemSelecionado?.wand?.wood}</span></p></li> :
                                            <li><p className={styles.modalContent_wandLi_p}>- madeira: <span className={styles.modalContent_wandLi_p_span}>info desconhecida</span></p></li>}
                                            {itemSelecionado?.wand?.core ? <li><p className={styles.modalContent_wandLi_p}>- núcleo: <span className={styles.modalContent_wandLi_p_span}>{itemSelecionado == null? 'vla' : itemSelecionado?.wand?.core}</span></p></li> :
                                            <li><p className={styles.modalContent_wandLi_p}>- núcleo: <span className={styles.modalContent_wandLi_p_span}>info desconhecida</span></p></li>}
                                            {itemSelecionado?.wand?.length ? <li><p className={styles.modalContent_wandLi_p}>- tamanho: <span className={styles.modalContent_wandLi_p_span}>{itemSelecionado == null? 'vla' : itemSelecionado?.wand?.length}</span></p></li> :
                                            <li><p className={styles.modalContent_wandLi_p}>- tamanho: <span className={styles.modalContent_wandLi_p_span}>info desconhecida</span></p></li>}
                                        </ul>
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.ancestry ? <p className={styles.modalContent_p}>ancestralidade: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.ancestry}</span></p> : <p className={styles.modalContent_p}>ancestralidade: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                    <li className={styles.modalContent_liP}>
                                        {itemSelecionado?.actor ? <p className={styles.modalContent_p}>ator: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.actor}</span></p> :
                                        <p className={styles.modalContent_p}>ator: <span className={styles.modalContent_p__span}>info desconhecida</span></p>}
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.modalContent_divXClose}><p className={styles.modalContent_xClose} onClick={() => setIsOpen(false)}>X</p></div>
                    </div>
                </div>
            </Modal>
        </main>
    )
}