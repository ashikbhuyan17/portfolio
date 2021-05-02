import React from 'react';
import blog from '../../images/blog.jpg'

const Blog = () => {
    return (
        <div className='background-need' id="blog">
            <div className="container py-5">
                <h1 className=' py-5  about-text text-center'><span className="readMore">BLOGS</span> </h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog} class="card-img-top" alt="..." style={{ height: "150px" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blog</h5>             
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog} class="card-img-top" alt="..." style={{ height: "150px" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blogs</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, asperiores.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog} class="card-img-top" alt="..." style={{ height: "150px" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blogs</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog} class="card-img-top" alt="..." style={{ height: "150px" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blogs</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog} class="card-img-top" alt="..." style={{ height: "150px" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blogs</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog} class="card-img-top" alt="..." style={{ height: "150px" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blogs</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;