import React from 'react'
import moment from 'moment'

const ScreenLine = ({ text }) => {
   return (
      <div>
         <span>
            {moment(Date.now()).format('ddd DD, hh:mma: ')}
         </span>
         <span>
            {text}
         </span>
      </div>
   )
}

export default ScreenLine
