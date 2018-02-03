import React from 'react'

import '../styles/InstAwesomeVideo.css'

class InstAwesomeVideo extends React.Component {
  render () {
    return (
      <div className='center video-container'>
        <iframe src="https://player.vimeo.com/video/253894949?loop=1&color=c9ff23&title=0&byline=0&portrait=0" width="1000" height="1000" frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    )
  }
}

export default InstAwesomeVideo
