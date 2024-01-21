import React from "react";

function NewsItems(props) {

    return (
        <div className="card my-2" style={{width: '60vh', height: '70vh'}}>
            <img src={props.imageUrl} className="card-img-top" alt="Visuals" style={{width: '59.8vh', height: '33vh'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}....</h5>
                <p className="card-text">{props.content}....</p>
                <h6 className="card-date">- Published on {props.date}</h6>
                <a href={props.url} target="blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItems;