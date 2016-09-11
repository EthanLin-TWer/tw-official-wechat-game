import React from 'react'

import './PercentageCircle.css'

const PercentageCircle = ({ ranking }) => {
   const perimeter = Math.PI * 2 * 70
   const size = 204
   const radius = size / 2

   return (
      <div className="circle-wrapper">
         <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
               <linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#227d51" />
                  <stop offset="100%" stopColor="#36563c" stopOpacity="1" />
               </linearGradient>
            </defs>
            <circle cx={radius} cy={radius} r="70" strokeWidth="19" stroke="rgb(238,238,240)" fill="none"></circle>
            <circle cx={radius} cy={radius} r="70" strokeWidth="19" stroke="url(#Gradient2)" fill="none" transform={`translate(0 ${size}) rotate(-90)` } strokeDasharray={ `${perimeter * ranking} ${perimeter *(1 - ranking)}` }></circle>
         </svg>
      </div>

   )
}

export default PercentageCircle