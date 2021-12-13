import React from 'react'
import ReactSlidy from 'react-slidy'
import 'react-slidy/lib/styles.css'
export default function Slider (){
    return(
    <ReactSlidy fullHeight imageObjectFit="contain" useFullWidth={false}>
        <img src="https://bataco.vteximg.com.br/arquivos/48-horas-mujer-1920x782.jpg" />
        <img src="https://bataco.vteximg.com.br/arquivos/BANNER-1920X782.jpg" />
        <img src="https://bataco.vteximg.com.br/arquivos/48-horas-mujer-1920x782.jpg" />
    </ReactSlidy>
    )
}