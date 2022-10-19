import React from "react";
import stylesHome from '../../styles/Home/Home.module.css'
import stylesCharacters from '../../styles/Characters/Characters.module.css'

export default function Section ({textSection, home, characters}) {

    return (
        <section>
            <div className={stylesHome.divSection}>
                <div className={stylesHome.container}>
                    <div><img alt="Hogwarts logo" src="/images/logo-hoghwarts.png" /></div>                    
                    {home &&(<div className={stylesHome.divSection_divTitle__home}><h3 className={stylesHome.divSection_title__home}>{textSection}</h3></div>)}
                    {characters &&(<div className={stylesCharacters.divSection_divTitle__characters}><h3 className={stylesCharacters.divSection_title__characters}>{textSection}</h3></div>)}
                    {home && (<div className={stylesHome.divSection_titleLine__home} />)}
                    {characters && (<div className={stylesCharacters.divSection_titleLine__characters} />)}
                </div>
            </div>
        </section>
    )
}