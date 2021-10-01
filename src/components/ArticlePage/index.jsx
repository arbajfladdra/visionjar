
import './ArticlePage.style.css'
import Card from "../Cards";
import { motion } from 'framer-motion';

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
const ArticlePage = ({data, title}) => {

    return(
        <motion.section className="row article-wrapper smooth-scroll"
        
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "exit">
            
            <h2>{title}</h2>
              <div className="article-item-wrapper" style = {{marginTop : 0}}>
                {
                 data.map(
                     (val, index, data) => {

                        return (
                            <Card
                            key = {val.id}
                            id = {val.id}
                            number = {index}
                            name = {val.name}
                            author = {val.author}
                            info = {val.info} 
                            link = {val.link}
                            theme = {val.theme}/>
                        )
                     }
                )}
               
              </div>
          </motion.section>
    )
}

export default ArticlePage;