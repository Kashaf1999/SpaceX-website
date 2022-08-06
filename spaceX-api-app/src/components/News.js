import React from 'react'
import NewsItem from './NewsItem'

function News(props) {
  return (
    <div>
        <div className='container my-5'>
          <h2>
            {props.heading}
          </h2>

          <div id='error'>

          </div>
           
            

          
          
      </div>
    </div>
  )
}

export default News