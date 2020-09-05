import React, { Component } from 'react';

import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from "./Title";
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Guests can choose from a variety of alcoholic and nonalcoholic beverages*, along with light appetizers."
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Guests can choose from a variety of hikings or can join with us."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Guests can choose from a variety of shuttle van ao can use outside one"
            },
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                info:"Guests can choose from a variety of alcoholic and nonalcoholic beverages*, along with light appetizers."
            }
        ]
    }
    render() {
        return (
           <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item, index) => {
                           return (
                            <article key = {index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                           );
                       })
                   }
               </div>
           </section>
        )
    }
}
