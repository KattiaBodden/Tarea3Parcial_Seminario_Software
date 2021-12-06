import { useState, useEffect } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'

export const Carro = ({ cantidad, productos }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    const productos = props.data.articulos
    const eliminarArticulo = props.eliminarArticulo

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    useEffect(() => {
        console.log('Use Effect Ejecutado con éxito')
    });

    return (
        <div style={styles.carroContenedor}>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <button onClick={handleMostrarCarro} style={styles.carro}>
                Carro
            </button>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <div style={styles.listaArticulos}>
                        <ul style={styles.ul}>
                            {
                                productos.map(x => {
                                    return (
                                        <li style={styles.li}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><button onClick={eliminarArticulo} style={styles.deleteButton}>X</button> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            <li style={styles.li}>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </li>
                            <li style={styles.li}>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </li>
                            <li style={styles.li}>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </li>
                        </ul>
                    </div>
            }
        </div>

    )
}