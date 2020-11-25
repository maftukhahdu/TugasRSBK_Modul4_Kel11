import React, { useReducer } from "react";
import "./Index.css"

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'type':
      return {firstName: action.firstName, count: state.count + 1};
    default:
      throw new Error();
  }
}

export default function Index() {
    const [{count, firstName}, dispatch] = useReducer(reducer, {
        count: 0,
        firstName: ""
    });

    const countUp = () => {
        dispatch({type: 'increment'});
    };

    const countDown = () => {
        dispatch({type: 'decrement'});
    };

    return (
        <div className="Main">
            <p className="Text">Counter using button and input with useReducer</p>
            <p>Kelompok 11</p>
            <p>Maftukhah dan Dayat</p>

            <div>
                <input
                style={{height:"40px", fontSize:'1.2rem'}}
                value={firstName}
                onChange={e => {
                    const firstName = e.target.value;
                    dispatch({type: "type", firstName});
                }}
                />
            </div>
            
            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Tambah
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Kurang
                    </button>
                </div>
            </div>
        </div>
    );
}