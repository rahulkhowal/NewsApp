import React, { Component } from 'react'
import Header from './components/header'
import Input from './components/Form'
import './App.css'
class App extends Component {
  state = {
    NewsItems: []
  }
  handleNews = async (e) => {
    e.preventDefault()
    const Country = e.target.country.value;
    const catagory = e.target.catagory.value;
    //Ajax Calling
    const ApiCall = await fetch(`https://newsapi.org/v2/top-headlines?country=${Country}&category=${catagory}&apiKey=3bb9d9fb663f43e99b1ef9ac27848841`)
    const response = await ApiCall.json()
    //console.log(response)state
    this.setState({
      NewsItems: [...response.articles]
    })
    //console.log(this.state.NewsItems)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Input getupdates={this.handleNews} NewsItems={this.state.NewsItems} />
      </div>
    )
  }
}
export default App;