import React from 'react'

import './PercentageCircle.css'

const PercentageCircle = ({ ranking }) => {
   const perimeter = Math.PI * 2 * 70
   ranking = 0.95
   return (
      <div className="circle-wraper">
         <svg width="204" height="204" viewBox="0 0 204 204">
            <defs>
               <linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#5acdaf" />
                  <stop offset="100%" stopColor="#2cadb1" stopOpacity="1" />
               </linearGradient>
            </defs>
            <circle cx="102" cy="102" r="70" strokeWidth="19" stroke="rgb(238,238,240)" fill="none"></circle>
            <circle cx="102" cy="102" r="70" strokeWidth="19" stroke="url(#Gradient2)" fill="none" transform="translate(0 204) rotate(-90)" strokeDasharray={ `${perimeter * ranking} ${perimeter *(1-ranking)}`}></circle>

         </svg>
      </div>
   )
}

export default PercentageCircle