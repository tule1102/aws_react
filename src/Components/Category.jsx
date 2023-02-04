import React, { useState, useEffect } from "react";
import axios from "axios";

// const categories = [
//     {
//         "id": 1,
//         "catname": "AI",
//         "catdesc": "Artificial Intelligence"
//     },
//     {
//         "id": 2,
//         "catname": "ML",
//         "catdesc": "Machine Learning"
//     }
// ]

const Category =  () => {
    const [catdata, changecategories] = useState([])

    const APIURL = "https://8752ccaruc.execute-api.us-east-2.amazonaws.com/Dev";

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(APIURL);
            console.log(JSON.parse(response.data.body))
            changecategories(JSON.parse(response.data.body).Items)
        }
        getData();
    }, [])

    return (
        <>
        <h1>Welcome to Write2Program</h1>
        <div class="card" style={{"width": "18rem"}}>
            <div class="card-header">
                Categories
            </div>
            <ul class="list-group list-group-flush">
                {
                    catdata.map(cat => (
                        <li class="list-group-item">{cat.catname} - {cat.catdesc}</li>
                    ))
                }
                            </ul>
        </div>
        </>
    );
}

export default Category