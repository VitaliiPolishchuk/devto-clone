import React, { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent";
import ArticleSkeleton from "./ArticleSkeleton";

const Content = () => {
  const [articles, setArticles] = useState([]);

  // const handleScroll = () => {
  //   console.log("handling scroll");
  //   const html = document.documentElement;
  //   const body = document.body;
  //   const windowHeight =
  //     "innerHeight" in window ? window.innerHeight : html.offsetHeight;

  //   const docHeight = Math.max(
  //     body.scrollHeight,
  //     body.offsetHeight,
  //     html.clientHeight,
  //     html.scrollHeight,
  //     html.offsetHeight
  //   );

  //   const windowBottom = windowHeight + window.pageYOffset;
  //   if (windowBottom >= docHeight - 10) {
  //     window.removeEventListener("scroll", handleScroll);
  //     fetchAgain();
  //   }
  // };

  // const fetchAgain = async () => {
  //   if (articles.length != 0) {
  //     fetch("https://dev.to/api/articles")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setArticles([...articles, ...result]);
  //       });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [articles]);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();

      setArticles(data);
    }, 2000);
  }, []);

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="#">Feed</a>
          <a href="#">Week</a>
          <a href="#">Month</a>
          <a href="#">Infinity</a>
          <a href="#">Latest</a>
        </nav>
        <select id="dropdown-select" className="dropdown">
          <option value="Feed" defaultValue>
            Feed
          </option>
          <option value="Week">Week</option>
          <option value="Mouth">Mouth</option>
          <option value="Feed">Feed</option>
          <option value="Infinity">Infinity</option>
        </select>
      </header>
      <div className="articles">
        {articles.length > 0
          ? articles.map((article, id) => {
              return <ArticleComponent key={id} data={article} />;
            })
          : [1, 2, 3, 4, 5].map((a) => {
              return <ArticleSkeleton key={a} />;
            })}
      </div>
    </main>
  );
};

export default Content;
