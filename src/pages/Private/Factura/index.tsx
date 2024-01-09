import { readFacturaService } from "@/api/services";
import { ICompra, IUsuario, UsuarioIS } from "@/models";
import { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Factura() {

    const params = useParams();

    const [user, setUser] = useState<IUsuario>(UsuarioIS);
    const [compras, setCompras] = useState<ICompra[]>([]);

    const getFactura = async () => {
        const res = await readFacturaService(params.id || '');
        if(res){
            setUser(res.usuario);
            setCompras(res.compras);
        }
    }

    useEffect(() => {
        getFactura();
    }, []);

    const sumar = () => {
        let suma = 0;
        compras.forEach(element => {
            suma += (element.precio * element.cantidad);
        });
        return suma;
    }

    return (
        <>
            <Row style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Col sm="12" md="6" lg="6">
                    <h1 style={{fontFamily: 'Insanibu'}}> {user.nombres} {user.apellidos} </h1>
                    <h2 style={{fontFamily: 'Insanibu'}}> {user.tipo_documento} {user.documento} </h2>

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

                    <h2 style={{fontFamily: 'Insanibu', textAlign: 'right'}}> Total: {sumar()} </h2>
                </Col>
            </Row>
        </>
    );
} export default Factura;