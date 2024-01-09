import { compraCreateService } from "@/api/services";
import { SubjectProductoToCompra } from "@/event";
import { ICompra, IProducto } from "@/models";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export function Carrito() {

    let bandera = true;

    const [compras, setCompras] = useState<ICompra[]>([]);

    const subscription$ = SubjectProductoToCompra.getSubject();

    const handleSub = (productoS: IProducto) => {
        
        if(bandera){
            setCompras((prev) => [...prev, {
                id: '',
                factura: '',
                cantidad: 1,
                nombre: productoS.nombre,
                precio: productoS.precio,
                producto: productoS.id
            }]);
        }

        bandera = !bandera;
    }

    useEffect(() => {
        subscription$.subscribe(handleSub);
    }, []);

    const sumar = () => {
        let suma = 0;
        compras.forEach(element => {
            suma += (element.precio * element.cantidad);
        });
        return suma;
    }

    const handleSendCompras = async () => {
        await compraCreateService(compras);
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1 style={{fontFamily: 'Insanibu'}}> Total: ${sumar()} </h1>
                <Button variant="success"
                onClick={()=>handleSendCompras()}> COMPRAR </Button>
            </div>

            <br />

            {
                (compras.length > 0) &&

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Nombre</th>
                            <th style={{textAlign: 'center'}}>Precio</th>
                            <th style={{textAlign: 'center'}}>Cantidad</th>
                            <th style={{textAlign: 'center'}}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compras.map((element, index) => (
                            <tr key={`${index} ${element.id}`}>
                                <td>{element.nombre}</td>
                                <td>{element.precio}</td>
                                <td>{element.cantidad}</td>
                                <td>{element.cantidad * element.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </>
    );
}