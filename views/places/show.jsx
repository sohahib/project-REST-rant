const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1> {data.place.name}</h1>
            <div className="show-container">
              <div> 
                  <img src={data.place.pic} alt={data.place.name} />
                  <h3>Located in {data.place.city}, {data.place.state} </h3>
              </div>
              <div>
                <div>
                  <h1>Rating</h1>
                  <p>Not Rated</p>
                </div>
                  <h1>Description</h1>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
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
