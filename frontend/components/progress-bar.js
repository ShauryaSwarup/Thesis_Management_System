
import { data } from '../../data/userdata.js'
import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function CircularProgressBar() {
    const { id, progress } = data[0]
    const [percentage, setPercentage] = useState(
        progress - 10 > 0 ? progress - 10 : progress
    )

    useEffect(() => {
        setTimeout(() => {
            if (percentage < progress) {
                setPercentage(percentage + 1)
            }
        }, 50)
    }, [percentage])

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ width: 150, marginLeft: 550 }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
            </div>
        </div>
    )
}
export default CircularProgressBar
    // import React, { useEffect, useState } from "react";
    // import { CircularProgressbar } from "react-circular-progressbar";
    // import "react-circular-progressbar/dist/styles.css";
    
    // const data = [
    // 	{
    // 		dataPercentage: 90,
    //         name:'Person'
    // 	},
    // ];
    
    // function CircularProgressBar() {
    //     const {name , dataPercentage} = data;
    // 	const [percentage, setPercentage] = useState(
    //         dataPercentage-10>0? dataPercentage-10 : 0
    //     );
    // 	useEffect(() => {
    // 		setTimeout(() => {
    // 			if (percentage < dataPercentage) {
    // 				setPercentage(percentage + 1);
    // 			}
    // 		}, 50);
            
    // 	}, [percentage]);
    
    // 	return (
    // 		<div style={{ textAlign: "center" }}>
    // 			<h4>Circular progress bar in React </h4>
    // 			<div style={{ width: 150, marginLeft: 550 }}>
    // 				<CircularProgressbar value={percentage} text={`${percentage}%`} />
    // 			</div>
    // 		</div>
    // 	);
    // }
    // export default CircularProgressBar;