import './app.css';

import {Component, Fragment} from "react";
import 'antd/dist/antd.js.map';
import AppMain from "../app-main";
import {Alert, Flex, Layout, Spin} from 'antd';

export default class App extends Component {

    state = {
        err: null,
        isLoaded: false,
        content: [],
    }

    constructor(props) {
        super(props);
        const pageNumber = 5;
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
                        isLoaded: true,
                        content: json.results,
                    }
                })
            })
            .catch((err) => {
                this.setState(() => {
                    return {
                        err: err
                    }
                });
            });
    }

    render() {
        const {Content} = Layout;
        const {isLoaded, content, err} = this.state;
        return (
            <Flex gap="middle" wrap>
                <Layout>
                    <Content className={'app-content'}>
                        {err !== null
                            ? <Alert
                                message='Error'
                                description= "Произошла ошибка. Попробуйте повторить позже — возможно, ошибки не будет."
                                type="error"
                                showIcon
                            />
                            :
                            <Fragment>
                                {isLoaded
                                    ? <AppMain
                                        content={content}
                                    />
                                    : <Spin fullscreen={true} size="large"/>
                                }
                            </Fragment>
                        }
                    </Content>
                </Layout>
            </Flex>);
    }
};