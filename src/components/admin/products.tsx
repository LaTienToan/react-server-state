import { useGetProductsQuery, useRemoveProductMutation } from '../../services/products'
import { Link } from 'react-router-dom'
import { Button, Table, Popconfirm, Image } from 'antd'
import Column from 'antd/lib/table/Column'

type Props = {}

const Products = () => {
    // Call api get Products
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    const [remove] = useRemoveProductMutation();
    const removeProduct = (key: number) => {
        remove(key as any).unwrap().then(() => {
            alert("Xoa thanh cong")
        })
    }

    if (isLoading) <div>Loading...</div>
    if (error) <div>Error</div>
    return (
        <>
            <Button type="primary" style={{ margin: '-40px 1200px 10px 0' }} ><Link style={{ color: 'white' }} to={'add'}>ADD</Link></Button>
            <Table

                dataSource={products.map((item) => ({
                    key: item.id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    desc: item.desc,
                }))}
            >
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Image" key="image" render={(product) => {
                    return <Image src={`${product.img}`} width={50} />
                }}></Column>
                <Column title="Desc" dataIndex="desc" key="desc" />
                <Column
                    title="Action"
                    key="action"
                    render={(product) => {
                        console.log("product", product);
                        return (
                            <Popconfirm
                                placement="top"
                                title="Ban có muốn xóa không?"
                                onConfirm={() => removeProduct(product.key)}
                                okText="Có"
                                cancelText="Không"
                            >
                                <Button type="primary" style={{ margin: '0 5px' }} danger>
                                    Remove
                                </Button>
                                <Button type="primary" style={{ backgroundColor: 'green' }} >
                                    <Link style={{ color: 'white' }} to={`edit/${product.key}`}>Edit</Link>
                                </Button>
                            </Popconfirm>
                        );
                    }}
                ></Column>
            </Table >
        </>
    )
}

export default Products