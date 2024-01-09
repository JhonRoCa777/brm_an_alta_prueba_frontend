import { indexProductoService } from "@/api/services";
import { SubjectProductoToCompra } from "@/event";
import { IProducto } from "@/models";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export function ListaProductos() {

    const handleAddProduct = (product: IProducto, index: number) => {
        if(product.cantidad > 0){
            SubjectProductoToCompra.setSubject(product);
            setProductos((prev) => {
                let temp = [...prev];
                temp[index].cantidad -= 0.5;
                return temp;
            });
        }
        else alert("YA NO HAY DISPONIBLES!!!");
    }

    const [productos, setProductos] = useState<IProducto[]>([]);
    const getProducts = async () => {
        const resp = await indexProductoService();
        if(resp) setProductos(resp);
    }

    useEffect(()=>{
        getProducts();
    }, [])

    return (
        <>
            <h1 style={{fontFamily: 'Insanibu'}}> Productos </h1>

            {
                (productos.length > 0) && 
                <Row>
                    {productos.map((element, index) => (
                        <Col key={element.numero_lote}>
                            <Card style={{marginBottom: '10px'}}>
                                <Card.Header> {element.numero_lote} </Card.Header>
                                <Card.Body>
                                    <Card.Title> {element.nombre} </Card.Title>
                                    <Card.Text> <b> Cantidad: </b> {element.cantidad} </Card.Text>
                                    <Card.Text> <b> Precio: </b> {element.precio} </Card.Text>
                                    <Button variant="warning"
                                    onClick={()=>handleAddProduct(element, index)}> AÑADIR </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            }
        </>
    );
}