import React from "react";
import "../styles/reviews.css"
import perplex from "../img/perplex.jpeg"
import { ReviewCard } from "./reviewCard";
import anyWhereelse from "../img/anywhereelse.jpeg"
import space from "../img/space14.png"
import indigoImg from "../img/indigo.png"
import SHDIGITAL from "../img/SHDIGITAL.png"
import Collective from "../img/collective.jpg"

export const Reviews = () =>{
        const perplexDescription = `
      
        At Perplex, we've relied on AC Services for 5+ years at our events.
        Antonio and his team are thorough, efficient, professional, and
        adaptable. Their attention to detail and high 
        standards ensure event success and guest satisfaction. We won't 
        do an event without them - highly recommend!
        `;

        const anyWhereElse = `
     
        I have been using AC Cleaning services for several years 
        at all my events in London and can only recommend it! A 
        lovely team of professional cleaners, flexible, always on
        time and providing quick and efficient communication. 
        Their dedication and attention to detail are remarkable.
        `
        const shDigital = `
    
        AC Services's comprehensive cleaning services and exceptional office
        setup capabilities have transformed our workspace. The team is highly
        professional and detail-oriented, delivering top-notch services that
        ensure every corner is spotless. They go beyond cleaning by efficiently
        organizing our office space.
        They are the best!
        `
        const indigo = `
    
        We engaged their services for an important event, and they delivered 
        exceptional service that exceeded our expectations.
        What impressed us the most was their commitment to quality and 
        customer satisfaction. We highly recommend AC Services to anyone seeking 
        reliable and effective services for their events.
        `
        const space14 = `
       
        We've been relying on AC Services for over a decade now.
        From office cleanings to corporate events and nightlife gatherings.
        Whether it's a last-minute event or our routine office maintenance.
        AC Services has become an indispensable partner for our business. 
        They are simply the best in the business! 😊
        `
        const collective = `
     
        AC Services has been absolutely essential to our success. Antonio and his team
        are professional, flexible, and extremely detail-oriented. They consistently 
        exceed our expectations, whether for events or office setup. Their unwavering
        commitment to quality and prompt communication makes them highly recommendable.
        `
        
    return(
        <section id="reviews">
            <header className="reviews-header">
                <h4>TESTIMONIALS</h4>
                <h1>Take a Look at What our Amazing <br/> Clients Have Said</h1>
            </header>
            <div id="caruselReviews" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#caruselReviews" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#caruselReviews" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="reviews-body col-md-11 m-auto">
                            <ReviewCard number="1" image={perplex} companyName="Perplex" description={perplexDescription}/>
                            <ReviewCard number="2" image={anyWhereelse} companyName="Any Where Else" description={anyWhereElse} />
                            <ReviewCard number="3" image={SHDIGITAL} companyName="Sh Digital" description={shDigital}/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="reviews-body col-md-11 m-auto">
                            <ReviewCard number="4" image={indigoImg} className="indigoImg" companyName="Indigo" description={indigo}/>
                            <ReviewCard number="5" image={space} companyName="Space 14" description={space14} />
                            <ReviewCard number="6" image={Collective} companyName="The Collective" description={collective}/>
                        </div> 
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#caruselReviews" data-bs-slide="prev">
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#caruselReviews" data-bs-slide="next">
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

    )
}

