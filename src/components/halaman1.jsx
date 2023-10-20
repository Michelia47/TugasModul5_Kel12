import React from 'react';
import Pokemon from './Pokemon';
import { Link } from 'react-router-dom'; 

function halaman1() {
    return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1>Kelompok 12</h1>
            <h2>Data Nama Pokemon 1-10</h2>
        </div>
        <Pokemon />
        <Link to="/halaman2">
            <div style={{textAlign:"center"}}>
                <button>Halaman 2</button>
            </div>
        </Link>
    </div>
    );
}
export default halaman1;