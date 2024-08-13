import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function GestionPedidos() {
    const [pedidos, setPedidos] = useState([])

    const listarPedidos = async () => {
        try {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BACKEND_URL}/pedidos`
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.get(url, options)
            console.log(respuesta)
            setPedidos(respuesta.data, ...pedidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarPedidos()
    }, [])

    return (
        <>
            <section className="flex flex-col items-center gap-8 min-h-screen pt">
                <h1 className="font-bold text-5xl text-center uppercase my-4">
                    GESTIÓN DE PEDIDOS
                </h1>
            </section>
        </>
    )
}