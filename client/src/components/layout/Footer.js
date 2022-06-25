import React from 'react';

import { logo } from "../../assets/js/logo"

import "./styles/footer.css"


//  let faxsimile_footer = " https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content-gh/en/_mdb5/standard/web/docs/navigation/footer/examples/assets/2.jpg" ;

const Footer = () => {


  return (
    <div className='footer' >

      <div className='footer-top'>
        <img src={logo} alt="logo" />
      </div>

      {/*  */}
      < div className='footer-center'>


        {/*   */}

        <section className='newsletter'>
          <form action='' >
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong> Sign up for our newsletter </strong>
                </p>
              </div>

              <div className='email' md='5' start='12'>
                <div className='input' contrast type='email' label='Email address' />
                <a href='#!'>  emailprova@gmail.commm </a>
              </div>

              <div className='col-auto'>
                <div className='btn' outline color='light' type='submit'  >
                  Subscribe
                </div>
              </div>
            </div>

          </form>
        </section>

        <section   >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>


      </ div>

      {/*   Link Footer   */}
      <div className='bottom_footer' >

        <section>
          <div className='BROWN'>

            <div className='colonna'  >
              <h5 className='text-uppercase'>Dove siamo</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className='colonna'  >
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className='colonna'  >
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>



          </div>
        </section>
      </div>

      <div className=' footer_bottom' >
        <span> saddsacaaaaaaaaaaaaaa</span>
        © {new Date().getFullYear()} Copyright


      </div>
    </div>
  );
}

export default Footer;