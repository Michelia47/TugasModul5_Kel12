import React, { useEffect } from 'react';
import Pokemon from './Pokemon';
import { Link } from 'react-router-dom'; 

function halaman2() {
    return (
    <div>
        <div style={{textAlign:'center'}}>
            <h1>Kelompok 12</h1>
            <h2>Data Nama Pokemon 11-20</h2>
        </div>
        <Pokemon />
        <Link to="/">
            <div style={{textAlign:"center"}}>
                <button>Halaman 1</button>
            </div>
        </Link>
    </div>
    );
}
export default halaman2;