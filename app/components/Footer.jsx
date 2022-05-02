import React from 'react'
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2022 FabKaiz Shop - This is a fake website to train web development
        skills
      </p>
      <p className="icons">
        <a href="https://github.com/FabKaiz" target="_blank">
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabien-chareun/" target="_blank">
          <AiOutlineLinkedin />
        </a>
      </p>
    </div>
  )
}

export default Footer
