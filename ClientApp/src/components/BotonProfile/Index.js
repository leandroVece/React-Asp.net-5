import React from "react";
import { useAuth } from "../Auth";
import { useNavigate } from "react-router-dom";

const Botones = ({ idUser, idPorfile }) => {

    const auth = useAuth();
    const navigate = useNavigate();


    const HacerPedido = () => {
        //hacer un pedido
        navigate("/FormPedido", { state: { idPorfile } })
    }

    const TomarPedido = () => {
        navigate("/TomarPedido", { state: { idUser } })
    }
    const handelRedirect = () => {
        //pedido cancelado/completado
        navigate("/actionPedido", { state: { idUser } })
    }



    if (auth.cookies.get("rol") === "cadete") {
        return (
            <>
                <div className="mt-2 d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn bg-c-lite-green text-white"
                        onClick={TomarPedido} type="button">Tomar Pedido</button>
                    <button className="btn bg-c-lite-green text-white"
                        onClick={handelRedirect} type="button"> Cancelar/Entregar</button>
                </div>
            </>
        )
    }
    if (auth.cookies.get("rol") === "cliente") {
        return (
            <>
                <div className="mt-2 d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn bg-c-lite-green text-white"
                        onClick={HacerPedido} type="button">Nuevo Pedido</button>
                </div>
            </>
        )
    }
}


export default Botones;