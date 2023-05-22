import React from 'react';
import './styles.css';

const MatchDetails = ({ match }) => {
    const { name, matchType, venue, date, teams, teamInfo } = match;

    return (
        <div className="match-container">
            <h2 className='name'>{name}</h2>
            <p>Match Type: {matchType}</p>
            <p>Venue: {venue}</p>
            <p>Date: {date}</p>

            {Array.isArray(teams) && teams.length >= 2 && (
                <div>
                    <h3>Teams</h3>
                    <p>{teams[0]} vs {teams[1]}</p>
                </div>
            )}

            {Array.isArray(teamInfo) && teamInfo.length > 0 && (
                <div>
                    <h3>Team Info</h3>
                    {teamInfo.map((team, index) => (
                        <div className="team-info" key={index}>
                            <img src={team?.img} alt={team?.name} />
                            <p>{team?.name}</p>
                            <p>Shortname: {team?.shortname}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MatchDetails;
