import React, { useState, useEffect } from 'react';

function ListaItens() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.login}</li>
            ))}
        </ul>
    );
}

export default ListaItens;
