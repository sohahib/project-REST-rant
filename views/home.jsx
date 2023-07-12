const React = require('react')
const Def = require('./default')

function Home () {
    return (
        <Def>
            <main className='home-container'>
                <h1>REST-Rant Page</h1>
                <div>
                    <img src="/images/fruits.jpg" alt="fruit plate" />
                    <div>
                        Healthy, salad and soy by Anh Nguyen (@pwign) on <a href="https://unsplash.com/photos/kcA-c3f_3FE"> Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = Home
