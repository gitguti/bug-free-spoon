"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image';

export default function Loading () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 segundos
    }, []);

    if (!loading) {
        return null;
    }
        
    return (
        <div className="loader-container">
            <div className="loading-bar"></div>
            <div className="logo-container">
                <Image src="/logoMobile3x.png" alt="Logo" className="logo" width={300} height={300} />
            </div>
        </div>
    );
};