import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'
import '../../style/Style.css';
import RickyAndMortyCard from './RickyAndMorty.card';

function RickyAndMortyMainView(props) {
    let inputSearchEl = useRef(null);
    const [list, setList] = useState(null);

    useEffect( () => {
        if(props.results.length === 0) {
            props.onLoadData();
        }
    })

    const loadCharacter = () => {
        const characterList = list || props.results;
        if (characterList && characterList.length > 0) {
            return characterList.map( (data) => {
                return <RickyAndMortyCard data={data} />
            });
        }
        return (<p className="no-record">No Records Found</p>);
    }

    const searchByName = (event) => {
        let searchList = props.results;
        const searchName = inputSearchEl.current && inputSearchEl.current.value.toLowerCase();
        const searchListUpdated = searchList.filter( (data) => {
            return data.name && data.name.toLowerCase().indexOf(searchName) > -1;
        });
        setList([...searchListUpdated]);
    }

    const sortById = (event) => {
        let dataList = list || props.results;
        if(event.target.value === "asc") {
            dataList.sort( (a,b) => a.id - b.id);
        } else if(event.target.value === "dsc") {
            dataList.sort( (a,b) => b.id - a.id);
        }
        setList([...dataList]);
    }
    return ([
        <div className="row search-box">
            <div className="col-sm-12">Search by Name</div>
            <div className="col-12 col-sm-6">
                    <span>
                        <input ref={inputSearchEl} type="text" />
                        <button onClick={searchByName}>Search</button>
                    </span>
            </div>
            <div className="col-12 col-sm-6 select-option">
                <select onChange={sortById}>
                    <option value="" disabled selected>Sort by ID</option>
                    <option value="asc">Ascending</option>
                    <option value="dsc">Descending</option>
                </select>
            </div>
        </div>,
        <div className="row card-box">{loadCharacter()}</div>]
    );
}

RickyAndMortyMainView.defaultProps = {results: []};

RickyAndMortyMainView.propTypes = {
    results: PropTypes.array.isRequired
}
export default RickyAndMortyMainView;