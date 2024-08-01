import React, { useContext, useRef } from "react"
import ChefPerfil from '@assets/ui/ChefPerfil.png'
import chefsImg from "@assets/ui/chefs.png";
import usuarioIcon from "@assets/icons/usuario.svg";
import telefonoIcon from "@assets/icons/telefono.svg";
import correoIcon from "@assets/icons/correo.svg";
import contraseñaIcon from "@assets/icons/contraseña.svg";
import { CustomButton } from "@components/CustomButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import documentoIcon from "@assets/icons/documento.svg"
import { AuthContext } from "../../contexts/AuthProvider";

export default function PerfilChef (){

    const {auth} =useContext(AuthContext)




    return (
        <>
        <div className="w-1/3 min-h-screen bg-no-repeat bg-cover bg-center sm:block hidden">
			<img src={ChefPerfil} alt="ChefPerfil" className="w-full h-auto max-h-[calc(100vh-7rem)] object-contain" />
		</div>


        <div className="flex flex-col justify-center items-center sm:w-1/2 w-full py-4 pl-6">
                        
                        <h1 className="text-2xl font-semibold mb-2 font-aoboshi pt-2 pb-5">
                            Samuel Cuti
                        </h1>

                        <div
                            className="flex flex-col gap-y-8 items-center sm:w-[95%] w-3/4"
                            
                            >
                            <div className="flex flex-col gap-y-4 w-full">
                                <div className="relative">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta fugit recusandae maiores vel placeat consequuntur consectetur similique quisquam maxime hic minus aperiam odio corporis, tempore in repudiandae. Odio, at!
                                    Tempore fuga iusto sapiente nulla quas vitae corporis harum, veniam ab quos ex quasi officiis nihil ad, perferendis voluptate ducimus eligendi! Quam debitis quo consectetur dolor veritatis neque blanditiis at!
                                    Doloremque omnis tempora ullam iste repellat quae, exercitationem porro molestias nihil rerum in ut quisquam voluptates ad similique ratione veniam maiores nesciunt non accusantium voluptatum assumenda aliquid quasi! Voluptatum, quod.</span>
                                </div>

                                <div className="relative">
                                    <h3 className="text-2xl font-semibold mb-2 font-aoboshi pt-2 pb-5" >Especialidades</h3>
                                </div>

                                <div className="relative">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a iste fugit sapiente harum error tempora deserunt saepe! Sapiente consectetur eum quisquam accusamus soluta eius quaerat deserunt vel dolores totam?
                                    Maiores pariatur expedita quaerat error, sapiente nesciunt, facilis asperiores illo, architecto explicabo modi ipsum incidunt doloribus. Placeat aliquid sed beatae, doloremque ratione totam at accusamus, pariatur necessitatibus saepe vero magnam!</span>
                                    
                                </div>

                                
                            </div>
                        
                        </div>
                    </div>
        </>
    )

}