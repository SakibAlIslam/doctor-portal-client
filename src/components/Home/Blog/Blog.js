import React from 'react';
import dentalImage from '../../../images/Mask Group 3.png';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogData = [{
    img:dentalImage,
    title:'Exceptional Dental Care, on Your Terms',
}]
const Blog = () => {
    return (
        <section className='mt-5 mb-5'>
            <div className='d-flex justify-content-center'>
                <div className='mt-5 row w-50'>
                    {
                        blogData.map(blogInfo => <BlogDetail blogInfo={blogInfo}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;