import react from 'react';  

export async function getAllPokemon(url) {
    return new Promise((resolve, rejet) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            });
    });
};

export async function getPokemon(url) {
    return new Promise((resolve, rejet) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            });
    });
};