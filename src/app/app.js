import './app.css';

import {Component} from "react";
import 'antd/dist/antd.js.map';
import AppMain from "../app-main";
import {Flex, Layout} from 'antd';

export default class App extends Component {

    state = {
        error: null,
        isLoad: false,
        content: [],
    }

    constructor(props) {
        super(props);
        const pageNumber = 1;
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmJjYmY5OGUyYmZlNDIwZjUzMDlkNjI1ZDk5NGFlNCIsIm5iZiI6MTcyOTE2NjM1MS4wMjA4ODgsInN1YiI6IjY3MTBhMTAxMWY5ZDBlZTRiOGM5ZDE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvcL7RGV-PRA0xVtTVUS2ABxu-N7y9IcIgkmyBgkNWU';
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                this.setState(() => {
                    return {
                        isLoad: true,
                        content: json.results,
                    }
                })
            })
            .catch((err) => {
                this.setState(() => {
                    return {
                        error: err
                    }
                });
            });
    }

    render() {
        const {Content} = Layout;
        const {isLoad, content} = this.state;
        if (isLoad) {
            return (
                <Flex gap="middle" wrap>
                    <Layout>
                        <Content className={'app-content'}>
                            <AppMain
                                content={content}
                            />
                        </Content>
                    </Layout>
                </Flex>
            );
        }
    }
};