export const ulMain = (urlParams) => {
    if (urlParams === 'Gryffindor') {
        return (
            <ul className={styles.ulCards}>
                <div className={styles.container}>
                {resposta &&
                    resposta.map((characters, index) => {
                        return (
                            <li key={index} className={styles.ulCards_li}>
                                <div key={index}>
                                    <div className={styles.divImageCard} onClick={() => onItemClicked(characters)}>
                                        <img
                                        alt={characters.name}
                                        src={characters.image}
                                        width="180px"
                                        height="244px"
                                        className={styles.imgGlobal}
                                        />
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
                                </div>
                            </li>
                        );
                    })}
                </div>
            </ul>
        )
    }

    else {
        console.log('não deu certo')
    }
}