// import Head from 'next/head'
import React, { useState } from 'react'
import axios from 'axios'
//import Style from '.././components/Input/Style.module.css'
import Style from '../pages/pagePokemon/Style.module.css'

export default function Home() {
    const [valores, setValores] = useState();
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);

    const pokeModal = (pokemons) => {
            axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemons}`,
            )
            .then((preview) => {
                setValores(preview?.data);
                setDetalhes(true);
                console.log('AQUI')
            })}            

    return (
        <section className='pokeHome'>
            
            {detalhes && valores && (

                <div className={Style.pokeModal}>
                    <div className={Style.pokeHabilidades}>
                        <div className={Style.fecharModal} onClick={() => {
                            setValores(false);
                        }
                        }>X</div>
                        <div className={Style.pokeNomes}>
                            <div className={Style.pokeInfo1}>
                                <p className={Style.InfoId}>{valores.name} {valores.id}</p>
                            </div>
                            {valores?.stats && valores.stats.map((stats) => {
                                return (
                                    <div className={Style.pokeInfo}>
                                        <p className={Style.pokeHp}>{stats.stat.name}=
                                            {stats.base_stat}</p>
                                    </div>
                                )

                            }
                            )}
                            {valores?.abilities && valores.abilities.map((abilities) => {
                                return (
                                    <div className={Style.pokeInfo2}>
                                        <p>{abilities.ability.name}</p>
                                    </div>
                                );
                            }
                            )}
                            {valores?.types && valores.types.map((types) => {
                                return (
                                    <div className={Style.pokeTipo}>
                                        <p>Type= {types.type.name}</p>
                                    </div>
                                );
                            }
                            )}
                        </div>
                        <img className={Style.imgPok} src={valores.sprites.other.dream_world.front_default} />

                    </div>
                </div>
            )}
            <div className='logo'>
                <div className='pokeHome1'>
                <div className="Botões">
                    <div>
                        <input
                            onChange={(e) => setData(e.target.value)}
                                placeholder="digite seu Pokemon"
                        />
                        <button
                            text={"Search"}
                            onClick={() => pokeModal(data)}>Search</button>       
                        </div>
                <div>
                    <button div className="Open"
                        onClick={() =>  window.location.href = "/pagePokemon"}>
                        Open
                    </button>
                </div>
            </div>
                </div>
            </div>
        </section>
    )
}