import React from 'react'

const Personajes = ({personajes}) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Height</th>
             </tr>
            {personajes.map((personaje) => (            
                <tr>
                    <td>{personaje.name}</td>
                    <td>{personaje.height}</td>

                </tr>  
            ))}
            </tbody>
        </table>
    )
};

export default Personajes
