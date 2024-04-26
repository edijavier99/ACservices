import React from "react";
import "../styles/reviews.css"
import perplex from "../img/perplex.jpeg"
import { ReviewCard } from "./reviewCard";

export const Reviews = () =>{
        const perplexDescription = `
        At Perplex, for over 5 years, AC Services has exceeded our event
         expectations. Antonio and his team are professional, adaptable,
          and detail-oriented. Their contribution ensures event success 
          and guest satisfaction. We can't recommend them enough!
        `;

    return(
        <section id="reviews" className="bg-light">
            <header className="reviews-header">
                <h4>TESTIMONIALS</h4>
                <h1>Take a Look at What our Amazing <br/> Clients Have Said</h1>
            </header>
            <div className="reviews-body col-md-11 m-auto">
                <ReviewCard number="1" image={perplex} companyName="Perplex" description={perplexDescription}/>
                <ReviewCard number="2" image={perplex} companyName="Atom" description={perplexDescription} />
                <ReviewCard number="3" image={perplex} companyName="Reve" description={perplexDescription}/>
            </div>
        </section>

    )
}