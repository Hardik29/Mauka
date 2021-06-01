import React from 'react'

function Hero() {
    return (
        <div className="w-full bg-mysite-boldblue h-98">
            <div className="text-6xl font-bold text-white pt-16 pl-36">Mauka is building <br/>a playground for <br/>you.</div>
            <div className="text-3xl font-light text-white pl-36 pt-7">A professional playground for you <br/> to learn, discover, fail and grow <br/> with like minded people.</div>
            <button class="ml-36 mt-7 mb-10 bg-white hover:bg-mysite-boldblue text-mysite-boldblue hover:text-white hover:border-white border-2  font-bold py-2 px-4 rounded">
             Join Now
           </button>
        </div>
    )
}

export default Hero
