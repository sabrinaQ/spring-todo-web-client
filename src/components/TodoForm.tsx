import React from 'react';
import {Input, Button, Form, Switch} from 'antd';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16}
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

// creating a functional component
const TodoForm = () => {
    // a react hook that lets us modify state inside a functional component
    // previously func. comp. only dealt with props, but now you can modify state
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    }

    const onReset = () => {
        form.resetFields();
    }

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            < Form.Item name="title" label="Title" rules={[{ required: true}]}>
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{ required: true}]}>
                <Input.TextArea/>
            </Form.Item>
            <Form.Item name="complete" label="Complete" valuePropName="checked" initialValue={false}>
                <Switch />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>

        </Form>
    );
}

export default TodoForm;