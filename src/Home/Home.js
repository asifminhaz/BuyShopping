import React from 'react';
import Slide from '../Slide';

const Home = () => {
    return (
        <div>
        <div class="hero  bg-teal-800">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='lg:ml-8' src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" />
          <div>
            <h1 class="text-4xl font-bold text-white">Welcome to BuyShopping</h1>
            <p class="py-6 text-white">We provide the best service for the customers.</p>
            <button class="btn bg-cyan">Get Started</button>
          </div>
        </div>
      </div>
      <Slide></Slide>
      </div>     
    );
};

export default Home;