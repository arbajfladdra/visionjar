import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../useFetch'
import { motion } from 'framer-motion'

import './ArticleDetails.style.css'
const containerVariants = {
    hidden: {
        y : '50vh',opacity :0
    },
    visible: {
        y : 0, opacity : 1,
        transition : {
            delay : 1,duration : 1,
            type : 'tween',stiffness :50,
        }
    },
    exit : {
        y : '-50vh',opacity :0,
        transition : {
            type : 'tween'
        }
    }
}
function ArticleDetails() {
    const {id} = useParams()
    
    const {data} = useFetch(`http://localhost:8012/Sdata/${id}`)
    console.log('hello',data);
    return (
        <motion.div variants = {containerVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
            >
          <div className="row bg-white">
          <section className="section-flex-wrapper article-details-wrapper container">

            <h1> {data.name}</h1>
            <p className = 'lead'>Author : {data.author}</p>
            <img src={`https://source.unsplash.com/random/?${data.theme}`}  alt="" />
            <blockquote>{data.info}</blockquote>
            
            </section>
        </div>
        </motion.div>
    )
}

export default ArticleDetails
