import React from 'react'
import * as Icons from '../Icons/Icons';
import { Link } from 'react-router-dom';
const Card = (props) => {
    return(
        <article className="article-item " style = {{'background' : `url(https://source.unsplash.com/random/?${props.theme}), #0000008c`, 'mixBlendMode' : 'normal'}}>
        {/* <date className="article-date"><Icons.Date/>21st Sept 2022</date> */}

        <div className="article-detail">
            <h3 className="article-name">
          <span style = {{ fontSize : '1.3em'}}> {props.number + 1}&nbsp;</span> {props.name}</h3>
            <p className="article-info">
            <b>Author : {props.author}</b><hr />
           {props.info}

            </p>
        </div>

        <div className="article-action-button">
        <div className="btn btn-primary">
            <Link to = {`/articles/${props.id}`}>
             <span 
             > Read </span>
              <div className="btn-arrow">
                 <Icons.ArrowRightP/>
                  
              </div>
              </Link>
          </div>
        </div>

    </article>
    )
}

export default Card;