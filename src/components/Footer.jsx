import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px',color:'white'}} className='d-flex  align-items-center flex-column mt-5 w-100 bg-primary'>
    <div className="footer d-flex justify-content-evenly align-items-evenly w-100 mt-5">
        <div className="websites" style={{width:'400px'}}>
            <h4><i class="fa-solid fa-cart-shopping me-3"></i>{'  '}
     E-Cart</h4>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio amet vitae atque saepe ab quia? Ipsam nemo numquam, corrupti, officia quas quae aliquid adipisci ratione alias doloribus maiores debitis!</p>
    
        </div>
        <div className="links d-flex flex-column ">
          <h4>Links</h4>
          <Link to={'/'}   style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/wishList'}   style={{textDecoration:'none',color:'white'}}>WishList</Link>
          <Link to={'/cart'}    style={{textDecoration:'none',color:'white'}}>Cart</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://bootswatch.com/'}   style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'}   style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'}    style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex mb-4'>
            <input type="text"  className='form-control w-75' placeholder='Enter your Email Id'/>
            <button className='btn btn-warning text-light ms-2 ' >Subscribe</button>
          </div>
          <div className='icons d-flex justify-content-evenly'>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>
            <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>
            <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>
            <i class="fa-brands fa-github"></i>
            </Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>
            <i class="fa-brands fa-facebook"></i>
            </Link>
          </div>
        </div>
    </div>
    <p className='mt-5'>Copyright &copy; 2023 E-Cart.Built with react.</p>
</div>
  )
}

export default Footer