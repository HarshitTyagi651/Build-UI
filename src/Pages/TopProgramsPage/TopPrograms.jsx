import React from 'react'
import Card from '../../Components/Card1/Card'
import './TopPrograms.css'

const TopPrograms = () => {
  return (
    <div className='topprograms-page'>
      <h1>Here <span>we</span> suggest some <span>top</span> programs</h1>
        <div className="topprograms-cont">
        <Card imgLink={'https://prod.spline.design/80bKve2mWJmZ95UX/scene.splinecode'} title='Learn to create React Components'/>
        <Card imgLink={'https://prod.spline.design/RQesPhbzIM7l0lba/scene.splinecode'} title='Learn to create 3D Interactive Objects'/>
        <Card imgLink={'https://prod.spline.design/80bKve2mWJmZ95UX/scene.splinecode'} title='Learn to create React Components'/>
        </div>
    </div>
  )
}

export default TopPrograms