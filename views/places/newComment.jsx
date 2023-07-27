const React = require('react')

const Def = require('../default')

function new_comment(){
    return(
        <form action="POST">
             <div className="form-group">
                <label htmlFor="author">Author</label>
                <input className="form-control" 
                        id="author" 
                        name="author"
                        type='text' />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <input className="form-control" 
                        id="content" 
                        name="content"
                        type='text' />
            </div>
            <div className="form-group">
                <label htmlFor="rating">Star Rating</label>
                <input className="form-control" 
                        id="rating" 
                        name="rating"
                        type='number' />
            </div>
            <div className="form-group">
                <label htmlFor="rant">Rant:</label>
                <input className="form-control" 
                        id="rant" 
                        name="author"
                        type='checkbox' />
            </div>
        </form>
    )
}

module.exports = new_comment