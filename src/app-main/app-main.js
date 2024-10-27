import './app-main.css';

import React, {Component, Fragment} from "react";

import {Input, Pagination, Row} from "antd";
import MovieCard from "../movie-card";
import {Content} from "antd/es/layout/layout";
import Search from "../search";

export default class AppMain extends Component {

    render() {
        const {content} = this.props;
        return (
            <Content>
                <Search/>
                <Row>
                    {content.map((item) => {
                        return <MovieCard
                            item={item}
                        />
                    })}
                </Row>
                <Pagination defaultCurrent={1} total={500}/>
            </Content>

        );
    }
};