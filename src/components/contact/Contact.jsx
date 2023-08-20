import React from 'react';
import './Contact.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
//import PinterestIcon from "@mui/icons-material/Pinterest";

export const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span> INSCREVA-SE</span>
            <div className='mail'>
                <input type="text" placeholder='Entre com e-mail...' />
                <button>Enviar</button>
            </div>
            <div className='icons'>
              <div className='icon'>
                <FacebookIcon />
              </div>
              <div className='icon'>
                <InstagramIcon />
              </div>
              <div className='icon'>
                <TwitterIcon />
              </div>
              <div className='icon'>
                <GoogleIcon />
              </div>
           
            </div>
        </div>
    </div>
  )
}
