import { useState, useEffect } from "react";
import './card.css'
import data from '../../data/data.json';
export default function Card() {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        setGraphData(data);
        
        
    }, []);

    const maxAmount = Math.max(...graphData.map(item => item.amount));
    return(
        <>
            <div className="divCard">
                <div className="cardDiv1">
                    <h2 className="cardDiv1H2" >Spending - Last 7 days</h2>
                </div>
                <div className="cardDiv2">
                     <div className="graphBalk">
                        {graphData.map(item => {
                            const heightPercent = (item.amount / maxAmount) * 100;
                            
                            return (
                                <div key={item.day} className="graphText" style={{ height: `${heightPercent}%` }}>
                                    <div
                                        className={`graph ${item.day === 'wed' ? 'graphBlue' : 'graphRed'}`}
                                        style={{ height: `${heightPercent}%` }}
                                        title={`${item.amount}`}
                                    ></div>
                                    <span className="graphLabel">{item.day}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="cardDiv3">
                    <div className="cardDiv3Div1">
                        <p className="cardDiv3Div1P1">Total this month</p>
                        <p className="cardDiv3Div1P2">$478.33</p>
                    </div>
                    <div className="cardDiv3Div2">
                        <p className="cardDiv3Div2P1">+2.4%</p>
                        <p className="cardDiv3Div2P2">from last month</p>
                    </div>
                </div>
            </div>
        </>
    )
}