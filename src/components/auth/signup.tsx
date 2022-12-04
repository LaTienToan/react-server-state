import { Button, Checkbox, Form, Input } from 'antd';
import { useSignupMutation } from "../../services/auth";


const Signup = () => {
    const [signup, { isLoading }] = useSignupMutation()

    const onSubmit = (values: any) => {
        console.log("value", values);
        console.log("api", signup(values));
        signup(values)
    };
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <Form
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Signup;