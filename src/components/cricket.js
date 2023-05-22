import React, { useEffect, useState } from 'react';
import MatchDetails from './matchdetails';

const Cricket = () => {
    const [matchesData, setMatchesData] = useState([]);

    const getCricketData = async () => {
        try {
            const res = await fetch(
                'https://api.cricapi.com/v1/matches?apikey=28a9f078-31a2-42d9-866c-f788ea054933&offset=0'
            );
            const data = await res.json();
            setMatchesData(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCricketData();
    }, []);

    return (
        <>
            <h1 className='head'>CRICKET API</h1>
            {matchesData.map((match) => (
                <MatchDetails key={match.id} match={match} />
            ))}
        </>
    );
};

export default Cricket;
