import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-[#0183B5] py-10 text-white'>
            <div className='md:w-[60%] mx-auto py-3 border-2 px-2 my-3 rounded-lg'>
                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>How will you improve the performance of a React Application?</p>
                    <div>
                        <p>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques.</p>
                        <p>These include:</p>
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nam quasi modi dolorem et omnis. Pariatur, ratione laudantium enim sequi aperiam dolorum odio, sunt voluptatum, doloremque quae eligendi hic eius commodi. Expedita nam dolorum alias voluptatem voluptate quis sint vero enim veritatis ratione, labore cupiditate facilis qui ea totam nesciunt ipsa quam doloribus deleniti! Distinctio aut ex inventore sed excepturi totam a sapiente dignissimos, culpa nostrum molestias rerum quis tempora ipsum voluptatibus tenetur quo ullam hic saepe laborum, eos blanditiis, animi facilis delectus? Rem earum laudantium deleniti tempore tempora natus aspernatur quam atque accusamus laborum. Ullam natus sunt ut dolore!</p>

                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>How does prototypical inheritance work?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nam quasi modi dolorem et omnis. Pariatur, ratione laudantium enim sequi aperiam dolorum odio, sunt voluptatum, doloremque quae eligendi hic eius commodi. Expedita nam dolorum alias voluptatem voluptate quis sint vero enim veritatis ratione, labore cupiditate facilis qui ea totam nesciunt ipsa quam doloribus deleniti! Distinctio aut ex inventore sed excepturi totam a sapiente dignissimos, culpa nostrum molestias rerum quis tempora ipsum voluptatibus tenetur quo ullam hic saepe laborum, eos blanditiis, animi facilis delectus? Rem earum laudantium deleniti tempore tempora natus aspernatur quam atque accusamus laborum. Ullam natus sunt ut dolore!</p>

                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>What is a unit test? Why should write unit tests?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nam quasi modi dolorem et omnis. Pariatur, ratione laudantium enim sequi aperiam dolorum odio, sunt voluptatum, doloremque quae eligendi hic eius commodi. Expedita nam dolorum alias voluptatem voluptate quis sint vero enim veritatis ratione, labore cupiditate facilis qui ea totam nesciunt ipsa quam doloribus deleniti! Distinctio aut ex inventore sed excepturi totam a sapiente dignissimos, culpa nostrum molestias rerum quis tempora ipsum voluptatibus tenetur quo ullam hic saepe laborum, eos blanditiis, animi facilis delectus? Rem earum laudantium deleniti tempore tempora natus aspernatur quam atque accusamus laborum. Ullam natus sunt ut dolore!</p>

                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nam quasi modi dolorem et omnis. Pariatur, ratione laudantium enim sequi aperiam dolorum odio, sunt voluptatum, doloremque quae eligendi hic eius commodi. Expedita nam dolorum alias voluptatem voluptate quis sint vero enim veritatis ratione, labore cupiditate facilis qui ea totam nesciunt ipsa quam doloribus deleniti! Distinctio aut ex inventore sed excepturi totam a sapiente dignissimos, culpa nostrum molestias rerum quis tempora ipsum voluptatibus tenetur quo ullam hic saepe laborum, eos blanditiis, animi facilis delectus? Rem earum laudantium deleniti tempore tempora natus aspernatur quam atque accusamus laborum. Ullam natus sunt ut dolore!</p>

                </div>

                <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                    <p className='text-xl font-semibold text-black'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nam quasi modi dolorem et omnis. Pariatur, ratione laudantium enim sequi aperiam dolorum odio, sunt voluptatum, doloremque quae eligendi hic eius commodi. Expedita nam dolorum alias voluptatem voluptate quis sint vero enim veritatis ratione, labore cupiditate facilis qui ea totam nesciunt ipsa quam doloribus deleniti! Distinctio aut ex inventore sed excepturi totam a sapiente dignissimos, culpa nostrum molestias rerum quis tempora ipsum voluptatibus tenetur quo ullam hic saepe laborum, eos blanditiis, animi facilis delectus? Rem earum laudantium deleniti tempore tempora natus aspernatur quam atque accusamus laborum. Ullam natus sunt ut dolore!</p>

                </div>

            </div>
        </div>
    );
};

export default Blogs;