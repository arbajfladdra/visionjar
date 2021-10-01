import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import './CreateArticle.style.css';
import * as Icons from '../Icons/Icons'
import { useState } from "react";
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
const CreateArticle = () => {
    const history = useHistory()
    console.log(history);
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
    const [author, setAuthor] = useState('')
    const [theme, setTheme] = useState('')
    const handleSubmit = (e) => {
        setName('')
        setInfo('')
        setAuthor('')
        e.preventDefault()
        const blog = {name, author, info,theme}
        console.log(blog);
        fetch('http://localhost:8012/Sdata', {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(
            e =>{ console.log(e,'added')
            alert('new article just added!')
            history.go(-1)}
        )
    }
    return(
        
        <motion.div variants = {containerVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
            >
            <div className="row bg-white">
                <section className=" article-create-wrapper container">

                    <h1>Create Article</h1>
                    <form 
                    onSubmit = {handleSubmit}
                    action="" className="article-form">
                        <label htmlFor=""> <span> Title :</span>
                            <input type="text" value = {name}
                                onChange = {
                                    e => setName(e.target.value)
                                }
                            required/>
                        </label>
                        <label htmlFor=""> <span> Theme :</span>
                            <input placeholder = 'describe your article in some words e.g. educational,career,maths'type="text" value = {theme}
                                onChange = {
                                    e => setTheme(e.target.value)
                                }
                           required />
                        </label>
                        
                        <label htmlFor=""> <span> Author : </span>
                            <input type="text" value = {author}
                                onChange = {
                                    e => setAuthor(e.target.value)
                                } />
                        </label>
                        <label htmlFor=""> <span> Body :</span>
                            <textarea required
                                onChange = {e => setInfo(e.target.value)}
                            >
                                
                            </textarea>
                        </label>
                        <label htmlFor="
                        ">
                        <span></span>
                        <button type = "submit" className="btn btn-primary">
                           <span> Create Article</span>
                            <div className="btn-arrow">
                               <Icons.ArrowRightP/>
                                
                            </div>
                        </button>

                        </label>
                    <div className="btn-group">
                        
                    </div>
                    </form>
                </section>
            </div>
        </motion.div>
    )
}

export default CreateArticle;