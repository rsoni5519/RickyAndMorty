import React from 'react';
import moment from 'moment'

const RickyAndMortyCard = ({data: list}) => {
    return (
            <div key={list.id} className="col-6 col-sm-3">
                <div className="card">                        
                    <div className="card-body">
                        <img src={list.image} className="card-img-top" alt="..." />
                        <div className="card-header">
                            <h2 className="card-title">{list.name}</h2>
                            <p className="card-text">{'id: ' + list.id + ' - created ' + moment(list.created).fromNow()}</p>
                        </div>                                
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span>STATUS</span>
                            <p className="car">{list.status}</p>
                        </li>
                        <li className="list-group-item">
                            <span>SPECIES</span>
                            <p className="car">{list.species}</p>
                        </li>
                        <li className="list-group-item">
                            <span>GENDER</span>
                            <p className="car">{list.gender}</p>
                        </li>
                        <li className="list-group-item">
                            <span>ORIGIN</span>
                            <p className="car">{list.origin.name}</p>
                        </li>
                        <li className="list-group-item">
                            <span>LAST LOCATION</span>
                            <p className="car">{list.location.name}</p>
                        </li>                    
                    </ul>
                </div>
            </div>
    )
}

export default RickyAndMortyCard;