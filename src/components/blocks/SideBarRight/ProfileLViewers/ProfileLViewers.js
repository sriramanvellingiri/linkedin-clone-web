
import React from 'react'


function ProfileLViewers() {
  return (
    <>
      <div id="linkedin-section">
        <section>
          <small>Ad</small>
          <a href="#">
            <span>Linkedin Premium</span>
            <div>
              <img src="https://avatars.githubusercontent.com/u/3478542?v=4" alt="" />
              <img
                id="linkedin-key"
                src="https://avatars.githubusercontent.com/u/3478542?v=4"
                alt=""
              />
            </div>
            <strong>
              See who's viewed your profile in the last 90
              days
            </strong>
            <div>
              <button>Try for free</button>
            </div>
          </a>
        </section>
        <FooterLinks></FooterLinks>
      </div>
    </>
  )
}

export default ProfileLViewers
