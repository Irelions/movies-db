import './app-main.css';

import {Component} from "react";

import {Col, Row} from "antd";

export default class AppMain extends Component {

    render() {
        const content = this.props.content;
        console.log(content);
        return (
            <Row gutter={[32, 32]}>
                {content.map( (item) => {
                        return <Col key={item.id} span={12}>{item['original_title']}</Col>
                    })
                }
            </Row>
        );
    }
};