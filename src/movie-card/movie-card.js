import './movie-card.css';
import {format} from 'date-fns';
import {Component} from "react";
import {Col, Flex, Image, Row, Spin, Typography} from 'antd';

export default class MovieCard extends Component {

    state = {
        isLoad: true
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {Text, Title, Paragraph} = Typography;
        const genre_ids = ['Action', 'Drama']
        const {item} = this.props;

        const posterPath = item['poster_path'];
        return (
            <Col key={item.id} className={'movie-main-card'}>
                <Row className='movie-card' wrap={false}>
                    <Col flex="185px" className={'movie-main-card-left'}>
                        <Image
                            src={`https://image.tmdb.org/t/p/original${posterPath}`}
                        />
                    </Col>
                    <Col flex="auto" className={'movie-main-card-right'}>
                        <Row>
                            <Col>
                                <Title level={5}> {item['original_title']}</Title>
                                <Text className={'movie-movie-card-date'}
                                      type="secondary">{`${format(Date.parse(item['release_date']), "MMMM dd, yyyy")}`}</Text>
                                <Flex className={'movie-card-genre'} align="start">
                                    {genre_ids.map((item) => {
                                        return <Text keyboard>{item}</Text>
                                    })}
                                </Flex>
                                <Paragraph className={'movie-movie-card-content'}
                                           ellipsis={{rows: 6, expandable: false}}>
                                    {item['overview']}
                                </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
};