import './search.css';
import React, {Component, Fragment} from "react";
import {Form, Input, Tabs} from "antd";

export default class Search extends Component {


    render() {
        const onChange = (key) => {
            console.log(key);
        };

        const items = [
            {
                key: '1',
                label: 'Search',
                children: 'Content of Tab Pane 1',
            },
            {
                key: '2',
                label: 'Rated',
                children: 'Content of Tab Pane 2',
                disabled: true,
            }
        ];

        return (
            <Fragment>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
                <Form onSubmitCapture={(event)=>{
                    console.log(event.target.value)}}>
                    <Input placeholder="Type to search..."
                           onChange={(event) => {
                               console.log(event.target.value)
                           }}

                    />
                </Form>
            </Fragment>
        );
    }
};