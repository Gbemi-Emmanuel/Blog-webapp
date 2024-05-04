import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsTwitter, BsInstagram, BsGithub, BsDribbble} from 'react-icons/bs'

const FooterCom = () => {
  return ( 
    <Footer container className="border border-t-8 border-teal-500" >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link 
            to="/" 
            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' >
            <span className='pl-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Maxify
            </span>
            Blog
          </Link>
          </div>
           {/* LOGO DIV ENDS HERE */}
           <div className="grid grid-cols-2 mt-5 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://maxify-portfolio.netlify.app"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  Maxify Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  Maxify Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https:/www.github.com/emmanuel-max"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                href="#"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                href="#"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
           </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Maxify Blog" year={new Date().getFullYear()}/>
          <div className="flex gap-6 sm:mt-2 mt-5 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom;
