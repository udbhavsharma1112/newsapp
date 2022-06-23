import React, { Component } from 'react'

export class newsitem extends Component {
    render() {
        let { title, description, imageUrl, url, date, source, author } = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{background:this.props.isdark?"#2a2d32":"white"}} >
                    <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="...." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:1}}>
                            {source}
                            </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" className="btn btn-sm" style={{background:this.props.isdark?"#b51c2a":"black",color:this.props.isdark?"black":"white"}}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default newsitem
