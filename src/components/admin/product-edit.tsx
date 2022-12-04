import { useAddProductMutation, useEditProductMutation, useGetProductQuery } from '../../services/products'
import { Button, Form, Input, Radio } from 'antd';
import { useParams } from 'react-router-dom';

type Props = {}
type LayoutType = Parameters<typeof Form>[0]['layout'];

const ProductEdit = (props: Props) => {
    const { id } = useParams()

    const [form] = Form.useForm();
    const [editProduct, result] = useEditProductMutation()
    const { data, isLoading, error } = useGetProductQuery(id)

    // console.log(data)


    const onFormLayoutChange = (value: any) => {
        const product = { ...value, id: id }
        editProduct(product);
    }

    if (isLoading) return <div>Loading...</div>
    return (
        <>
            <h2 style={{ margin: '20px' }}>EDIT PRODUCTS</h2>
            <Form

                form={form}
                style={{ margin: '0 250px 0 0 ' }}
                // {...layout}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFormLayoutChange}

                initialValues={{
                    ['name']: data.name,
                    ['price']: data.price,
                    ['img']: data.img,
                    ['desc']: data.desc
                }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input type='text' />
                </Form.Item>
                <Form.Item label="Price" name="price">
                    <Input />
                </Form.Item>
                <Form.Item label="Img" name="img">
                    <Input />
                </Form.Item>
                <Form.Item label="Desc" name="desc">
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </ >
    )
}

export default ProductEdit