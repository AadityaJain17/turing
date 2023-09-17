import React from "react";
// import "./News.css";

function News(){
    const[articles, setarticles] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://dev.to/api/articles?username=oreste")
        .then((res)=> res.json())
        .then((res)=>{
            setarticles(res);
        });
    })


console.log(articles);
return(<div className= "News">
     {articles.map((article) => {
          return (
            <div key={article.id} className="article">
              <a href={article.url} className="title">
                {article.title}
              </a>
              <img src={article.social_image} alt={article.title}></img>
              <p>
                {article.description} <a href={article.url}>Read More.</a>
              </p>
              <p>
                {article.readable_publish_date} | {article.tags}{" "}
              </p>
              <p> {article.public_reactions_count} reactions</p>
            </div>
          );
        })}
</div>);
}
export default News;