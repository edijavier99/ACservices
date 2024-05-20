import React from "react";

export const ReviewCard = (props) =>{
    return(
                <article className="review-card col-11 m-auto">
                   <header className="review-card-header">
                        <span className="review-number">{props.number}</span>
                   </header>
                   <main className="review-card-body">
                        <p className="review-description">{props.description}</p>
                   </main>
                   <footer className="review-card-footer">
                        <div className="rcf-img-container">
                            <div className="rcf-img-decorator">
                                <img alt="review-img" src={props.image} />
                            </div>
                        </div>
                        <p className="mt-3"><strong>{props.companyName}</strong></p>
                        <p className="small">AC Services</p>
                   </footer>
                </article>
    )
}