import { useState } from 'react';

import Modulecard from './modulecard';

const initData = [


    {
        id: 1,
        name: "Rahul",
        email: "rahul@123.com",
        phone: "9111743075",
    },
    {
        id: 2,
        name: "raj",
        email: "raj@123.com",
        phone: "9111743075"
    },
    {
        id: 3,
        name: "mahi",
        email: "mahi@123.com",
        phone: "9111743075"
    },
    {
        id: 4,
        name: "ayush",
        email: "ayush@123.com",
        phone: "9111743075"
    },
    {
        id: 5,
        name: "megha",
        email: "megha@123.com",
        phone: "9111743075"
    }


];


function ModulelList() {

    const [data, setData] = useState(initData);


    return (



        <div>
            {
                data.map( e => <Modulecard key={e.id} name={e.name} email={e.email} id={e.id} phone={e.phone} img={e.img} /> )
            }
        </div>
    )




}


export default ModulelList;