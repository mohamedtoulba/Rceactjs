import React, { useState } from "react";
const AddArticle = ({seveArticle}) =>{
    const [article, setArticle] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    return (
        <div>
            <form>
                <input type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}} />
                <input type="text" value={body} onChange={(e) =>{setBody(e.target.value)}} />
                <button onClick={AddArticle} >Add Article</button>
            </form>
        </div>
    )
}
export default AddArticle;