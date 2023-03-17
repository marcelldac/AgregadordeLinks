import React from 'react';
import foto from '../../assets/foto.png';
import github from '../../assets/githublogo.png';
import instagram from '../../assets/instalogo.png';
import linkedin from '../../assets/linklogo.png';
import { Card } from "../../components/Card/index";


export function Home(){

    const link = [
        {
            img: github,
            title: 'Github',
            description: 'Link do meu perfil github: @marcelldac',
            url: 'https://github.com/marcelldac',
        },
        {
            img: instagram,
            title: 'Instagram',
            description: 'Link do meu perfil instagram: @devm4c',
            url: 'https://instagram.com/devm4c',
        },
        {
            img: linkedin,
            title: 'Linkedin',
            description: 'Link do meu perfil Linkedin: @marcelldac',
            url: 'https://linkedin.com/in/marcelldactes',
        },
    ]
    return(
        <>
        <div className=" d-flex p-4 aling-items-center text-center">
            <img src={foto} alt="" width={'100px'} className='px-2'/>
            <div>
                <h5>Marcell Dac</h5>
                <p>@marcelldac</p>
            </div>
        </div>
        {link.map(link =>{
            return (
            <Card links={link} />
            )
        })}
        
        </>
        
    )
}

export default Home;