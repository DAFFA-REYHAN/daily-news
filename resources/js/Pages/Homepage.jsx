import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Homepage(props) {
    
    return (
        <div className=" min-h-screen bg-slate-50 "> 

            <Head title={props.title} />
            <Navbar/>

            {props.news?props.news.map((data, i )=>{
                return(
                    <div key={i} className='p-4 m-2 bg-white shadow-md rounded-md text-black'>
                        <p className='text-2xl'>{data.title}</p>
                        <p>{data.description}</p>
                        <p className='text-small'>{data.category}</p>
                        <p className='text-small'>{data.author}</p>
                    </div>
                )
            }): <p>Saat ini belum ada berita tersedia</p>}
        </div>
    );
}