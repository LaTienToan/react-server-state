import { useAddProductMutation } from '../../services/products'
import { Button, Form, Input, Radio } from 'antd';
import { useNavigate } from "react-router-dom";

type Props = {}
type LayoutType = Parameters<typeof Form>[0]['layout'];

const ProductAdd = (props: Props) => {
    const [form] = Form.useForm();
    const [addProduct, { isLoading }] = useAddProductMutation()
    const navigate = useNavigate()
    const onFormLayoutChange = (value: any) => {
        addProduct(value);
    }


    return (
        <div>
            <h2 style={{ margin: '20px' }}>ADD PRODUCTS</h2>
            <Form
                style={{ margin: '0 250px 0 0 ' }}
                // {...layout}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                form={form}
                onFinish={onFormLayoutChange}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên!' },
                    { min: 5, message: 'Tên phải nhiều hơn 5 kí tự!' }]}>
                    <Input width={100} />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Vui lòng nhập giá!' }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Img"
                    name="img"
                    rules={[{ required: true, message: 'Vui lòng thêm ảnh!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Desc"
                    name="desc"
                    rules={[{ required: true, message: 'Vui lòng thêm mô tả!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit" >Submit</Button>
                </Form.Item>
            </Form>
        </div >
    )
}

export default ProductAdd