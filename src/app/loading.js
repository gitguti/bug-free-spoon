"use client"
import { useLoading } from './context/loadingContext';
import { useEffect } from 'react'
import Image from 'next/image';

export default function Loading () {

      const { loading, setLoading } = useLoading();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // 3 segundos
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