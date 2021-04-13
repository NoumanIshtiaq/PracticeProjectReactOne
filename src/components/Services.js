import React, { Component } from 'react'
import Title from './Title'
import {FaHiking,FaCocktail,FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services : [
            {
                icon:<FaCocktail/>,
                title:'Free Cocktail',
                info:'lorem ipsum is so good to replace some text or avoid typing intelligent info'
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'lorem ipsum is so good to replace some text or avoid typing intelligent info'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free ShuttleVan',
                info:'lorem ipsum is so good to replace some text or avoid typing intelligent info'
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beer',
                info:'lorem ipsum is so good to replace some text or avoid typing intelligent info'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
              <Title title='Services'/>  
              <div className='services-center'>
                  {this.state.services.map((item,index) => {
                      return <article key={index} className="service">
                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                      </article>
                  })}
              </div>
            </section>
        )
    }
}
