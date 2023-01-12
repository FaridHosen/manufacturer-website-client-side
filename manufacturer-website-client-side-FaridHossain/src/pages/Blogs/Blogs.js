import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 py-8'>
            <div>
                <article className='border p-2 px-8 mb-2'>
                    <p className='text-xl font-bold'><span className='text-2xl font-bold'>Question Name:</span> How will you improve the performance of a React Application?</p>
                    <p className='text-justify'><span className='text-2xl font-bold'>Answer: </span>Performance related problems in web application is not new. Developers have been encountering these issues in almost every project they work on. React is one among such languages which is considered to be best in terms of delivering performance. Since the virtual DOM of react is popular for rendering components effectively, it becomes more important to focus on performance. Function that is defined and passed down inside the render method of a React component is called an inline function. n the context of React applications we often see such coding pattern. This increases the memory footprint of the app and will always trigger the re-render even when the props don’t get changed.
                        This is mainly because method passing is always pass by reference, thus it will create a new function and change its reference for every render cycle.
                    </p>
                </article>
                <article className='border p-2 px-8 mb-2'>
                    <p className='text-xl font-bold'><span className='text-2xl font-bold'>Question Name:</span> What are the different ways to manage a state in a React application?</p>
                    <p className='text-justify'><span className='text-2xl font-bold'>Answer: </span> There are some examples of different ways to manage state of a React application.

                        <p><li>react_stateful_component - Using builtin state and props management</li></p>
                        <p><li>react_hooks - Using the new Hooks method useState, etc</li></p>
                        <p><li>react_redux - Using React Redux to manage app's statue</li></p>
                    </p>
                </article>
                <article className='border p-2 px-8 mb-2'>
                    <p className='text-xl font-bold'><span className='text-2xl font-bold'>Question Name:</span> How does prototypical inheritance work?</p>
                    <p className='text-justify'><span className='text-2xl font-bold'>Answer: </span> Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’. Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues.
                    </p>
                </article>
                <article className='border p-2 px-8 mb-2'>
                    <p className='text-xl font-bold'><span className='text-2xl font-bold'>Question Name:</span> What is a unit test? Why should write unit tests?</p>
                    <p className='text-justify'><span className='text-2xl font-bold'>Answer: </span> Unit tests are simple scripts that check whether a given unit—class, function, module, etc.—is working as expected. They are meant to be rather simple, to cover the happy path of the code plus a few edge cases. They contribute to the long-term success of a project because of the reasons I discuss below.
                        <p className='my-3'> When you start building applications, the most natural thing is to test the code with the user interface. You can make this process way faster and more reliable by writing a script that will check the code for you. With tests in place, rerunning all of them takes no mental energy from you; you can do it as often as you feel like. This leads to a shorter feedback loop too, which will help you stay focused and productive.</p>
                    </p>
                </article>
                <article className='border p-2 px-8 mb-2'>
                    <p className='text-xl font-bold'><span className='text-2xl font-bold'>Question Name:</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</p>
                    <p className='text-justify'><span className='text-2xl font-bold'>Answer: </span> React class components provide the setState function which, when called, will update state, and tell react to re-render the component as well as all of the components children. This is very handy when using event handlers. So, why do we use setState rather than just mutating state directly? Well, React keeps a copy of the previous state and uses it as a reference point. When we use setState, it creates a new item in the systems memory… a distinctly different item from the original… Now, React has the ability to distinguish what needs to be re-rendered based on the previous state. If we were to mutate state directly, not only would we lose this functionality, but since there is no reference point, adding to or changing the value of an existing element is still going to equal it’s previous state.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;