const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1> {data.places.name}</h1>
            <div className="show-container">
              <div> <img src={data.places.pic} alt={data.places.name} /> </div>
              <div>
                <div>
                  <h1>Rating</h1>
                  <p>Not Rated</p>
                </div>
                <div>
                  <h1>Description</h1>
                  <p>Located in {data.places.city}, {data.places.state} and serving {data.places.cuisines}</p>
                </div>
              </div>
            </div>
            <div className="comments">
              <h1>Comments</h1>
              <p>No comments yet</p>
            </div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
               Edit
              </a>  
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>     

          </main>
        </Def>
    )
}  

module.exports = show
