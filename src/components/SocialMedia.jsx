import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="mailto:letterstonithishkumar@gmail.com">
          <FiMail />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/abinithishkumarprabakaran/' target='_blank' rel='noreferrer'>
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/nithi.shkxx/' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://github.com/Abinithishkumarprabakaran' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/nithishkumar_pr?t=v8nFiMEWqVfXK_7FYB7huQ&s=35' target='_blank' rel='noreferrer'>
          <BsTwitter />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
