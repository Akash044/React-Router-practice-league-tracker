import "./Home.css"
import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import Leagues from '../Leagues/Leagues';
import homeImg from '../../images/homepage-img.png'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeagues(data.leagues);
            })
    }, [])
    let i = 1;

    return (
        <>
            <Jumbotron className="bg-light shadow rounded">
                <img className="w-100 rounded shadow" style={{ height: "400px" }} src={homeImg} alt="" border="0" />
                <h1 className="centered text-white">League Tracker</h1>
            </Jumbotron>
            <Container>
                <Row>
                    {
                        leagues.map(league => i++ <= 15 && <Leagues key={league.idLeague} info={league}></Leagues>)
                    }
                </Row>
            </Container>

        </>
    );
};

export default Home;