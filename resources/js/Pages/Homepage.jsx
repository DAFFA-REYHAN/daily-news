import React from 'react';
import { Link, Head } from '@inertiajs/react';
export default function Homepage(props) {
    console.log(props)
    return (
        
        <div className="flex items-center justify-center min-h-screen bg-neutral"> 
            <Head title={props.title} />
            <p>{props.description}</p>
        </div>
    );
}