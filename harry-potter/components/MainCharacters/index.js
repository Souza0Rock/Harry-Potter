import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../styles/Characters/Characters.module.css'

export default function MainCharacters () {

    useEffect(() => {
        axios.get("https://hp-api.herokuapp.com/api/characters")
        .then((response) => {
            console.log(response.data)
        })
    })

    return (
        <></>
    )
}