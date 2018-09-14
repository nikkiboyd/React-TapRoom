import React from "react";
import PropTypes from "prop-types";
import BrewList from './BrewList';
import { Link } from 'react-router-dom';


class Brew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readyToEdit: false
        };
    }

    handleEditDetails(id) {
        console.log('button activated for keg with name' + props.name);
        props.onEditDetails({name: _name.value, brewery: _brewery.value, description: _description.value, price: _price.value, abv: _abv.value, pints: _pints.value, id: id});
    }

    render(){
        var card = {
            padding: 20,
            margin: 20,
            maxWidth: 300,
            minWidth: 300,
            backgroundColor: '#333842',
            fontFamily: 'sans-serif',
            paddingTop: '50px',
            flexDirection: 'row',
            textAlign: 'center',
            borderRadius: 10,
            color: '#BBBBBB'
          }
    
        var description = {
            fontSize: 18,
            color: '#DDDDDD'
        }
    
        var drinkName = {
            fontSize: 20,
            color: '#DDDDDD'
        }
    
        var button = {
            margin: 5
        }

        return (
            <div style={card}>
                <h2 style={drinkName}>{props.name} by {props.brewer}</h2>
                <h3 style={description}><em>{props.description}</em></h3>
                <hr/>
                <h6>ABV: {props.abv}</h6> 
                <h6>${props.price}.00</h6> 
                <h6>{props.pints} of 124 pints remaining</h6> 
                <button onClick={() =>handleEditDetails(props.id)} className="btn btn-warning">Edit Details</button>
                {/* <SellPint/> */}
                {/* <EditPint/> */}
            </div>
        );
    }
}

Brew.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    pints: PropTypes.string,
    id: PropTypes.string,
    onEditDetails: PropTypes.func
};

export default Brew;