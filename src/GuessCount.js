import React from 'react'

import './GuessCount.css'
import * as PropTypes from "prop-types";

const GuessCount = ({guesses, onClick}) => (
    <div className="guesses" >{guesses}{onClick(guesses)}</div>
);

GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired
}
/*GuessCount.defaultProps = {
    guesses: 0
}*/
export default GuessCount
