import React from 'react';

const UsersComponent = (props) => {
  // console.log(props.players);
  let Players = props.players;

  return (
    <div>
      <h1 className="display-4 font-weight-bold text-primary text-uppercase my-4">
        list of players
      </h1>
      <div className="playersBlock">
        {Players.map((player) => (
          <div className="card">
            <img
              src={player.photo}
              alt={player.name}
              className="image-card-top"
            />

            <div className="card-body">
              <h4 className="card-title">{player.name}</h4>
              <p className="card-text">{player.runs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersComponent;
