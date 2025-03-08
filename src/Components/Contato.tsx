'use client'
import Image from "next/image";
import React from "react";

interface InformacoesProps {
    textoDoLink: string;
    textoContato: string;
    nomeImg: string;
}

// export default function Contato(props: InformacoesProps){
//     return (
//         <div className="flex p-3 bg-emerald-300 rounded-t-lg rounded-b-lg m-3">
//             <a href={props.textoDoLink} target="_blank" className="flex content-center p-1 items-center text-black">
//                 <img className="w-15 inline-block p-2" src={`Images/${props.nomeImg}.svg`}/>
//                 <p className="inline-block p-2">{props.textoContato}</p>
//             </a>
//         </div>
//     )
// }

export default function Contato(props: InformacoesProps) {
    return (
        <a href={props.textoDoLink} target="_blank" 
            className="flex content-center p-1 items-center text-black bg-emerald-300 rounded-t-xl rounded-b-xl m-3 w-3xl
            hover:bg-emerald-500"
        >
            <img className="w-15 inline-block p-2" src={`Images/${props.nomeImg}.svg`} />
            <p className="inline-block p-2" >{props.textoContato}</p>
        </a>
    )
}