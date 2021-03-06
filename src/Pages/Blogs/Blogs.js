import React from 'react';
import b1 from '../../Assets/others/wetgu.PNG'
const Blogs = () => {
    return (
        <div className='bg-[#0183B5] py-10 text-white'>
            <div className='md:w-[60%] mx-auto py-3 border-2 px-2 my-3 rounded-lg'>
                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>How will you improve the performance of a React Application?</p>
                    <div>
                        <p>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques.</p>
                        <p className='text-black font-semibold'>These include:</p>
                        <ul className='list-disc pl-5'>
                            <li>Keeping component state local where necessary</li>
                            <li>Memoizing React components to prevent unnecessary re-renders</li>
                            <li>Code-splitting in React using dynamic import()</li>
                            <li>Windowing or list virtualization in React</li>
                            <li>Lazy loading images in React</li>
                        </ul>

                    </div>
                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>What are the different ways to manage a state in a React application?</p>
                    <p>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.</p>
                    <p className='text-black font-semibold'>There are four main types of state we need to properly manage in your React apps:</p>
                    <ul className='list-decimal pl-5'>
                        <li>Local State</li>
                        <p>Local state is most often managed in React using the useState hook.</p>
                        <li>Global State</li>
                        <p>Global state is data we manage across multiple components.</p>
                        <li>Server State</li>
                        <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                        <li>URL State</li>
                        <p>URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state.</p>
                    </ul>

                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>How does prototypical inheritance work?</p>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                    <img className='w-[400px] rounded-lg mt-5' src={b1} alt="" />
                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>

                    <p className='text-xl font-semibold text-black'>What is a unit test? Why should write unit tests?</p>
                    <p className='text-xl font-semibold text-black'>What is a unit test?</p>
                    <p>unit testing is a method of testing the smallest pieces of code, typically individual functions, in isolation. These small pieces of code are called units. A unit can be a line of code, a class, or a method.</p>
                    <p className='text-xl font-semibold text-black'>Why should write unit tests?</p>
                    <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>

                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                    <p>We can use find, to get the specific name product. As example,
                        const products = [x,y,z]; Here ,x,y,z are object
                        where every object of the array contains a name. We can create a function to find product by its name.
                        if (product.name==='searched name') matched, then this function will return the product.</p>

                </div>


            </div>
        </div>
    );
};

export default Blogs;