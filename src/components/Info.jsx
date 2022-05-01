import React from 'react'

export function Info() {
    return (
        <section className='more-info'>
            <div className='feature'>
                <div className='content'>
                    <p className='title'>Lightweight</p>
                    <p className='desc'>Mollit mollit consequat sint occaecat ad nostrud adipisicing veniam minim adipisicing velit laborum commodo dolore.</p>
                </div>
                <img src={require('../images/shoe2.jpg')} alt="Nike shoe2" />
            </div>
            <div className='feature left'>
                <div className='content'>
                    <p className='title'>Lightweight</p>
                    <p className='desc'>Mollit mollit consequat sint occaecat ad nostrud adipisicing veniam minim adipisicing velit laborum commodo dolore.</p>
                </div>
                <img src={require('../images/shoe3.jpg')} alt="Nike shoe2" />
            </div>
            <div className='feature'>
                <div className='content'>
                    <p className='title'>Lightweight</p>
                    <p className='desc'>Mollit mollit consequat sint occaecat ad nostrud adipisicing veniam minim adipisicing velit laborum commodo dolore.</p>
                </div>
                <img src={require('../images/shoe4.jpg')} alt="Nike shoe2" />
            </div>
        </section>
    )
}
