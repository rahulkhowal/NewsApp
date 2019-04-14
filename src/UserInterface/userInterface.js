import React from 'react'
import '../App.css'
const UserInterface = (NewsItems) => {
    const News = (article, id) => (
        <li key={id}><a href={`${article.url}`}>{article.title}</a></li>
    );
    const index = Math.floor(Math.random() * 1)

    const newsItems = NewsItems.length ? (NewsItems.map(NewsItem => {
        return (News(NewsItem, index)

        )
    }

    )
    ) : (
            <div>
                please select the country and category
            </div>
        );

    console.log(NewsItems)

    return (
        <div className="news-items">
            {newsItems}

        </div>
    )
}
export default UserInterface