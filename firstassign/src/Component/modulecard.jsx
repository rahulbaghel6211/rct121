import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';

import styles from './module.css';

const Modulecard = (props) => {
    const { name, email, id, phone , img } = props;



    const [isActive, setIsActive] = useState(true);
    return (
        <>
            <div className={styles.container}>

                <div className={styles.left}>
                    <Avatar src={img} className={styles.Avtar}   sx={{ width:46, height:46}} />
                </div>

                <div className={styles.right}>
                    <p style={{fontWeight:"bold"}} >{name}</p>
                    <p style={{color:"blue"}}>{email}</p>

                    {isActive ? <div onClick={() => setIsActive(!isActive)} > More</div> : <div style={{color:"green"}}  onClick={() => setIsActive(!isActive)} >{phone}</div>}

                </div>
            </div>




        </>
    )
}

export default Modulecard;