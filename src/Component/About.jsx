import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae, expedita voluptates voluptatibus animi atque ipsam adipisci. Dolorum corporis ducimus debitis animi, tenetur placeat illo illum facere quibusdam blanditiis repudiandae quaerat provident iusto accusantium dolorem delectus maiores aliquid labore. Sint nostrum tempora perspiciatis cupiditate molestias praesentium maiores veniam, reiciendis quam obcaecati nobis earum tenetur consequatur beatae perferendis vel eaque similique, quae a temporibus. Voluptatem, amet voluptate! Quas maxime cumque quam error unde commodi vitae corrupti aspernatur inventore suscipit nostrum facere hic laborum, ab, voluptatum, perspiciatis optio veniam. Ab illo praesentium, debitis hic fugit recusandae deleniti, natus tempora nobis odio quas?</p>
            <Link className="btn btn-outline-primary px-3" to="/contact">Contact Us</Link>
          </div>
          <div className="col-md-6  py-5 ps-5 d-flex justify-content-center">
            <img src="./assets/images/about.jpg" width={550} alt="About" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
