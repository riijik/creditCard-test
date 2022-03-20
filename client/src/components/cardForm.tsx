import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, DatePicker } from 'antd';
import style from "../style.module.css"
import superagent from "superagent"
import { MyForm, ServerResponse } from "../interfaces";

export function CardForm() {
    const [serverResponse, setServerResponse] = useState<ServerResponse>()

    const createApplication = async (form: MyForm) => {
        const post = await superagent.post("/cardForm").send(form)
        const response: ServerResponse = post.body
        setServerResponse(response)
    }

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    return (<div className={style.container}>
        <Form
            style={{ marginRight: "auto", marginLeft: "auto" }}
            name="basic"
            labelCol={{
                span: 10,
            }}
            wrapperCol={{
                span: 15,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={(values: MyForm) => { createApplication(values) }}
            autoComplete="off"
            form={form}
        >
            <Form.Item
                label="Card Number"
                name="cardNumber"
                rules={[
                    {
                        required: true,
                        message: 'Please input card number',

                    },
                    {
                        len: 16,

                    },
                    {
                        pattern: new RegExp(/^[0-9]+$/),
                        message: "'cardNumber' must be exactly numbers"
                    }
                ]}
                hasFeedback
                shouldUpdate
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Expiration Date"
                name="expDate"
                rules={[
                    {
                        required: true,
                        message: 'Please input expiration date'
                    },
                    {
                        type: "date",
                    }
                ]}
                hasFeedback
                shouldUpdate
            >
                <DatePicker format="MM/YYYY" picker="month" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
                label="CVV"
                name="cvv"
                rules={[
                    {
                        required: true,
                        message: 'Please input cvv',

                    },
                    {
                        len: 3
                    },
                    {
                        pattern: new RegExp(/^[0-9]+$/),
                        message: "'cvv' must be exactly numbers"
                    }
                ]}
                hasFeedback
                shouldUpdate
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Amount"
                name="amount"
                rules={[
                    {
                        required: true,
                        message: 'Please input cash amount',
                    },
                    {
                        pattern: new RegExp(/^[0-9]+$/),
                        message: "'amount' must be exactly numbers"
                    }
                ]}
                hasFeedback
                shouldUpdate
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 10,
                }}
                shouldUpdate
            >
                {() => (
                    <Button
                        style={{ width: "100%" }}
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Submit
                    </Button>
                )}
            </Form.Item>
        </Form>
        {serverResponse ? (<div>Server response: {JSON.stringify(serverResponse)}</div>) : null}
    </div>)
}