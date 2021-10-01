//Hooks
import useFetch from "../../useFetch";


//COmpoentns and styles
import ArticlePage from "../ArticlePage";
import './Articles.style.css'
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

const Articles = () => {
    const {data, isPending, error} = useFetch('http://localhost:8012/Sdata')

    return(
        <>
        
        {error && <h1> {error}...</h1>}
              {isPending && <h1> Loading...</h1>}
        <motion.section className="article-wrapper smooth-scroll"
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "exit">
            
            {data && <ArticlePage data = {data} title = 'Recent Articles'/>}

          </motion.section>
          </>
    )
}


export default Articles;