const React = require('react')
const Def = require('../default')

function edit_form (data){
    return(
        <Def>
            <main>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input id="name" 
                                   name='name'
                                   value={data.place.name}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label label htmlFor="pic">Place Picture</label>
                            <input id="pic"
                                   name='pic'
                                   value={data.place.pic}
                                    />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">Place City</label>
                            <input id="city" 
                                   name='city'
                                   value={data.place.city}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">Place Name</label>
                            <input id="state" 
                                   name='state'
                                   value={data.place.state}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Place Name</label>
                            <input id="cuisines" 
                                   name='cuisines'
                                   value={data.place.cuisines}/>
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                </form>

            </main>
        </Def>
    )
}
module.exports = edit_form