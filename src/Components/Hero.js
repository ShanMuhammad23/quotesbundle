import React, { Component } from 'react'
import heroimage from './her-bg.jpg'
import { Link } from 'react-router-dom';

export class hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
          };
      }
    
      componentDidMount() {
        this.fetchQuote();
      }
    
    
    
       async fetchQuote(){
        try {
          const response = await fetch('https://api.api-ninjas.com/v1/quotes?&X-Api-Key=seqOnRU4yGb51En2yA0OnA==4tn8HfvI7R6K7uwD'); // Replace with your API URL
          const data = await response.json();
          this.setState({ quotes: data });
        } catch (error) {
          console.error(error);
        }
      };
    render() {
        const {quotes,topic}=this.state
   
    return (
        <div className="hero-main my-2">
                  <img src={heroimage} alt="hero bg" />
            <div className="navbar">
                <div className="brand"><h1>Quotes Bundle </h1></div>
                <div className="navlinks">
                    <a href="" >Home</a>
                    <Link to='./Inspirational' >Inspirational</Link>
                    <Link to="./Wisdom" topic={'Life'}>Wisdom</Link>
                    <a href="" topic={'Advice'}>Life</a>
                    <a href="" topic={'Philosophy'}>Philosophy</a>
                </div>
            </div>
            <div className="hero-text my-4 d-flex flex-column  align-items-center">
                <h1 className='fw-bolder'>Daily Inspirational Quotes</h1>
                {quotes.map((quotes)=>( <div className='hero-quote my-3'>
                  <h2 className='quote'>{quotes.quote}</h2>
                  <span className="author">{quotes.author}</span>
                </div>)

                )}
               
                <div className="hero-btns d-flex justify-content-around w-50 ">
                
<button className="button-5" role="button" >Explore More </button>
<button className="button-5" role="button">More </button>


        </div>
            </div>
     </div>
    )
  }
}

export default hero
