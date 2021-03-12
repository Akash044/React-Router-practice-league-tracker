import './LeagueDetails.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import fb from '../../images/Facebook.png'
import yt from '../../images/YouTube.png'
import tw from '../../images/Twitter.png'
import logo1 from '../../images/found 1.png'
import logo2 from '../../images/flag (1) 1.png'
import logo3 from '../../images/football (1) 1.png'
import logo4 from '../../images/male-gender-sign 1.png'
import femaleImg from '../../images/female.png'
import maleImg from '../../images/Rectangle 28.png'

const LeagueDetails = () => {
    const { id } = useParams();
    const [leagueDetails, setLeagueDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeagueDetails(data.leagues[0]);
            });
    }, [id])
    const { strLeague, dateFirstEvent, strCountry, strSport,
        strGender, strBadge, strDescriptionEN, strDescriptionFR, strBanner,
        strFacebook, strYoutube, strTwitter, strFanart1 } = leagueDetails;
    // console.log(strGender);
    return (
        <div className="bg-dark">
            <Card className="bg-dark text-white m-3">
                <Card.Img src={(strBanner != null) ? strBanner : strFanart1} style={{ height: "300px" }} alt="Card image" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
            </Card>
            <div className="container card mb-3 shadow">
                <div className="row g-0 bg-info shadow rounded">
                    <div className="col-md-7">
                        <div className="card-body text-white">
                            <img src={strBadge} style={{ height: "100px" }} alt="" />
                            <h2 className="card-title">{strLeague}</h2>
                            <div className="main-info-sec">
                                <h5 className="card-text main-info"><img className="info-icon" src={logo1} alt="" /> Founded: {dateFirstEvent}</h5>
                                <h5 className="card-text main-info"><img className="info-icon" src={logo2} alt="" /> Country: {strCountry}</h5>
                                <h5 className="card-text main-info"><img className="info-icon" src={logo3} alt="" /> Sport Type: {strSport}</h5>
                                <h5 className="card-text main-info"><img className="info-icon" src={logo4} alt="" /> Gender: {strGender}</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 mt-5 mb-3">
                        {
                            <img className="ms-3 shadow rounded w-100" src={
                                strGender === "Male" || strGender === undefined ? maleImg : femaleImg
                            } alt="..." />
                        }

                    </div>
                </div>
                <p className="mt-4 shadow rounded p-4">
                    <h4>League Details:</h4>
                    {strDescriptionEN}
                </p>
                <p className="mt-4 shadow rounded p-4">
                    {strDescriptionFR}
                </p>
                <div className="mt-4">
                    <a href={`http://${strFacebook}`} target="_blank" rel="noopener noreferrer"><img src={fb} className="bottom-logo" alt="" /></a>
                    <a href={`http://${strYoutube}`} target="_blank" rel="noopener noreferrer"><img src={yt} className="bottom-logo" alt="" /></a>
                    <a href={`http://${strTwitter}`} target="_blank" rel="noopener noreferrer"><img src={tw} className="bottom-logo" alt="" /></a>
                </div>
            </div>
        </div>

    );
};

export default LeagueDetails;