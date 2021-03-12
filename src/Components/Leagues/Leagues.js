import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Leagues = (props) => {
    const [leagueImg, setLeagueImg] = useState([]);
    const { idLeague, strLeague, strSport } = props.info;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeagueImg(data.leagues[0]);
            });
    }, [idLeague])
    const { strBadge } = leagueImg;
    return (

        <Col className="mt-5">
            <Card className="shadow" style={{ width: '20rem' }}>
                <Card.Img className="p-4" variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>Sports type: {strSport}</Card.Text>
                    <Button as={Link} to={`/leagueDetails/${idLeague}`} variant="primary">Go Details <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Leagues;