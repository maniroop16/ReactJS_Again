import React, {useEffect, useState} from "react";
import NewsItemClass from "./NewsItemClass";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsFunction = (props)=>{
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    document.title = "NewsMonkey-" + props.category;


  const updatePage = async () =>  {
    props.progress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
    try {
      setloading(true)
      const response = await fetch(url);
      props.progress(30)
      const data = await response.json();
      props.progress(55)
      setarticles(data.articles)
      settotalResults(data.totalResults)
      setloading(false)
      props.progress(75)
    //   console.log(articles);
      props.progress(100)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    updatePage();
  }, []); 
  
//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=1&pageSize=${props.pageSize}`;
//     // console.log(url);
//     // try {
//     //   setloading(true)
//     //   const response = await fetch(url);
//     //   const data = await response.json();
            // setarticles(data.articles)
            // settotalResults(data.totalResults)
            // setloading(false)
//     //   console.log(articles);
//     // } catch (error) {
//     //   console.error("Error fetching data:", error);
//     // }

//     updatePage();
//   }

//   const handlePreviousPage = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&catagory=${props.category}&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//     // try {
//     //     setloading(true)
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     // setarticles(data.articles)
//             // settotalResults(data.totalResults)
//             // setloading(false)
//     // } catch (error) {
//     //     console.error('Error fetching data:', error);
//     // }
//     // The below snippet is from CHATGPT
//     setpage((prevpage) => prevpage - 1);
//     updatePage()
//   };

//   const handleNextPage = async () => {
//     // if (page+1 <= Math.ceil(totalResults/props.pageSize)) {
//     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//     // try {
//     //     setloading(true)
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     // setarticles(data.articles)
//             // settotalResults(data.totalResults)
//             // setloading(false)
//     //     });
//     // } catch (error) {
//     //     console.error('Error fetching data:', error);
//     // }
//     // }
//     // The below snippet is from CHATGPT
//     setpage((prevpage) => prevpage + 1);
//     updatePage()
//   };

  const fetchMoreData = async ()=>{
    console.log('fetchpage',page)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setarticles(articles.concat(data.articles))
      settotalResults(data.totalResults)
      setloading(false)
      console.log(articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const updateStateBeforeLoading = () => {
    setpage(prevPage => {
      const newPage = prevPage + 1;
      return newPage;
    });
  };
  
  // useEffect to fetch more data when the page state changes
  useEffect(() => {
    if (page > 1) { // ensure that fetch only happens after page state is updated
      fetchMoreData();
    }
  }, [page]);// this runs when 'page' state is updated

    return (
      <div className="container" style={{marginTop: '70px'}}>
        {/* {loading && <Spinner />} */}
        <h1>These are the top news for today on {props.category}</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={updateStateBeforeLoading}
          hasMore={totalResults>articles.length}
          loader={<h4><Spinner /></h4>}
        > 
        <div className="container row my-3">
          {articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItemClass
                  title={element.title ? element.title : "Title"}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  Author={element.author}
                  updatedTime={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
          </div>
          </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page === 1}
            className="btn btn-primary"
            onClick={handlePreviousPage}
          >
            &larr; Previous{" "}
          </button>
          <button
            type="button"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn btn-primary"
            onClick={handleNextPage}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  
}


export default NewsFunction

NewsFunction.defaultProps = {
    country: "",
    pageSize: 6,
    category: "general",
  };
  NewsFunction.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

