import React from 'react'
import '../App.css'
let val = [];
const UserInterface = (NewsItems) => {


    val = Object.values(NewsItems)
    //console.log(val[0])

    return (
        val[0].map(cur =>
            <div className="news-items">
                <li><a target="_blank" href={`${cur.url}`}>{cur.title}</a></li>

            </div>

        )
    )
}
export default UserInterface