import React, { Component } from 'react'
import NewsItemClass from './NewsItemClass'
import Spinner from './Spinner';

export default class NewsClass extends Component {
    articles = [
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Stephanie Giang-Paunon",
            "title": "Pete Davidson claims he was ‘harassed’ about love life 'because I'm ugly' despite dating Hollywood ‘hot girls’",
            "description": "Comedian Pete Davidson claimed he's been \"harassed\" about his past relationships due to his appearance. Davidson has been previously linked to Ariana Grande, Kim Kardashian and more A-list celebrity women.",
            "url": "https://www.foxnews.com/entertainment/pete-davidson-harassed-love-life-ugly-dating-hollywood-hot-girls",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/02/pete-davidson-ex.jpg",
            "publishedAt": "2025-02-15T20:44:56Z",
            "content": "Former \"Saturday Night Live\" star Pete Davidson is responding to the criticism hes received about his previous love life with A-list celebrity women.\r\nDavidson, 31, claimed hes been \"harassed\" about … [+3965 chars]"
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "https://www.facebook.com/entertainmentweekly",
            "title": "'Love Is Blind' season 8's Brittany blasts Devin for 'immature' reaction to her sexuality",
            "description": "'Love Is Blind' season 8 cast member Brittany Dodson blasts Devin Buckley for his 'immature' reaction to her sexuality confession and calls him a 'little mama's boy.'",
            "url": "https://ew.com/love-is-blind-season-8-brittany-blasts-devin-for-sexuality-response-11680526",
            "urlToImage": "https://ew.com/thmb/eWO-lWWvT_-Eiq1_eIkffhcktDk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/love-is-blind-brittany-021425-efab55b527c3457f85660c2bcf26b38a.jpg",
            "publishedAt": "2025-02-15T20:07:19.756707Z",
            "content": "Warning: This article contains spoilers about the first six episodes of Love Is Blind season 8.\r\nLove Is Blindseason 8 cast member Brittany Dodson has no regrets over ending things with her pod boyfr… [+6040 chars]"
        },
        {
            "source": {
                "id": "new-york-magazine",
                "name": "New York Magazine"
            },
            "author": "Jennifer Zhan",
            "title": "Love Is Blind’s Mason Explains Meg/Madison Triangle",
            "description": "Mason Horacek knows he did ‘Love Is Blind’ all wrong:  “Out of context, I don’t expect people to know what I went through.”",
            "url": "https://www.vulture.com/article/love-is-blind-mason-horacek-interview-meg-madison-pod-triangle.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/cc9/e5b/e70e59701490314fccf7546b819dff3bf5-loveisblind-s8-mason.1x.rsocial.w1200.jpg",
            "publishedAt": "2025-02-15T13:00:05Z",
            "content": "Mason, Madison, Megan, Molly people whose names start with an M were not lucky in love this season of Love Is Blind, huh? Now, Mason Horacek wasnt the only guy juggling a couple relationships in the … [+8400 chars]"
        },
        {
            "source": {
                "id": "new-york-magazine",
                "name": "New York Magazine"
            },
            "author": "Elizabeth Gulino",
            "title": "Who Is Bill de Blasio’s New Girlfriend?",
            "description": "Love is in the air. Bill de Blasio has a new girlfriend and her name is Nomiki Konst, a political analyst and journalist 22 years his junior.",
            "url": "https://www.thecut.com/article/who-is-bill-de-blasio-new-girlfriend.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/869/109/a3d1978cf56f49a06a73a4e9fc20e4fffc-bill-deblasio-1.1x.rsocial.w1200.jpg",
            "publishedAt": "2025-02-13T23:38:26Z",
            "content": "Another New York bachelor has been taken off the market, and no, Im not talking about Marcello Hernandez. Im talking about former New York City mayor-turned-playboy Bill de Blasio. After he and his w… [+1296 chars]"
        },
        {
            "source": {
                "id": "football-italia",
                "name": "Football Italia"
            },
            "author": "Football Italia Staff",
            "title": "Donnarumma and Milan: a controversial love story",
            "description": "The story began when Gigio Donnarumma followed his heart and signed with Milan and it could end with the club&#39;s return to the Champions League.",
            "url": "http://www.football-italia.net/171170/donnarumma-and-milan-controversial-love-story",
            "urlToImage": "https://ew.com/thmb/eWO-lWWvT_-Eiq1_eIkffhcktDk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/love-is-blind-brittany-021425-efab55b527c3457f85660c2bcf26b38a.jpg",            "publishedAt": "2021-05-25T01:00:00Z",
            "content": "The story began when Gigio Donnarumma followed his heart and signed with Milan and it could end with the club's return to the Champions League.\r\nThe Italy international helped Milan secure a place in… [+3001 chars]"
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": "Nadia Drake",
            "title": "How these feuding map-makers shaped our fascination with Mars",
            "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
            "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
            "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
            "publishedAt": "2021-02-17T14:37:21.3706142Z",
            "content": null
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: [],  
            loading: false,
            page:1
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a7397cd2ad504e0fa4ab73a3a9df812e&q=sport&page=1&pageSize=${this.props.pageSize}`;
        try {
            this.setState({loading:true})
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loading:false
            });
            console.log(this.state.articles);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handlePreviousPage = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a7397cd2ad504e0fa4ab73a3a9df812e&q=sport&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        try {
            this.setState({loading:true})
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                articles: data.articles,
                page: this.state.page-1,
                loading:false
            });
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handleNextPage = async ()=>{
        if (this.state.page+1 <= Math.ceil(this.state.totalResults/this.props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a7397cd2ad504e0fa4ab73a3a9df812e&q=sport&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        try {
            this.setState({loading:true})
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                articles: data.articles,
                page: this.state.page+1,
                loading:false
            });
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }
        
    }

  render() {
    return (
      <div className='container my-3'>
        {this.state.loading && <Spinner/>}
        <h1>These are the top news for today</h1>
        <div className='container row my-3'>
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4 my-3' key={element.url}>
            <NewsItemClass title = {element.title?element.title:"Title"} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>
        })}           
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page===1} className="btn btn-primary" onClick={this.handlePreviousPage}>&larr; Previous </button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
