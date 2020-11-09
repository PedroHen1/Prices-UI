import React from 'react'

function Cards() {
    return (
        <div className='container'>
            <div className='cards' id='free'>
                <section className='component'>
                    <h3>Free</h3>
                    <h5>For freelancers</h5>
                    <h1>$0</h1>
                    <div className='icons'>
                    <p><i className="fas fa-check-circle"></i> 1 users</p>
                    <p><i className="fas fa-check-circle"></i> 10 downloads per month</p>
                    <p><i className="fas fa-check-circle"></i> Raster files</p>
                    </div>
                </section>
                <button id='free-btn'>
                <h4>Subscribe</h4>
                </button>
            </div>

            <div className='cards' id='pro'>
                <section className='component'>
                    <h3>Pro</h3>
                    <h5>For agencies</h5>
                    <h1>$40</h1>
                    <div className='icons'>
                    <p><i className="fas fa-check-circle"></i> 3 users</p>
                    <p><i className="fas fa-check-circle"></i> Unlimited downloads</p>
                    <p><i className="fas fa-check-circle"></i> Fully-editable files</p>
                    <p><i className="fas fa-check-circle"></i> Custom packs</p>
                    <p><i className="fas fa-check-circle"></i> 200+ custom icons</p>
                    </div>
                </section>
                <button id='pro-btn'>
                    <h4>Subscribe</h4>
                </button>
            </div>
        </div>
    )
}

export default Cards