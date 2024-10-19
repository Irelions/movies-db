import './app-main.css';

import React, {Component} from "react";

import {Row} from "antd";
import MovieCard from "../movie-card";

export default class AppMain extends Component {

    render() {
        const content = this.props.content;
        console.log(content);
        console.log('poster_path');
        return (
            <Row>
                {content.map((item) => {
                    return <MovieCard
                        item={item}
                    />
                })}
            </Row>
        );
    }
};