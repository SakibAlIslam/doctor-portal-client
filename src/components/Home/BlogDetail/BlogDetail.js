import React from 'react';

const BlogDetail = ({blogInfo}) => {
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <div className='col-md-6 '>
            <img style={{height: '500px'}} src={blogInfo.img} alt="img"/>
        </div>
        <div className='col-md-6 '>
             <h2 className='mb-5' style={{color:'#3a4256'}}>{blogInfo.title}</h2>
            <p className='text-secondary mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aliquam doloribus sunt corporis dolores voluptate quasi explicabo quo nostrum officiis eveniet beatae natus aut eum, necessitatibus dolor excepturi atque quae et ea fugiat quibusdam at deleniti ab. Corporis accusamus vel nulla, odio cum dolorum facere iure, officia beatae temporibus ratione cumque molestias ut iste itaque laudantium modi voluptatem neque incidunt debitis recusandae dolorem id ab fugiat? Dolorum, molestiae. Nihil illum, reiciendis possimus quaerat quas, harum neque quibusdam delectus facilis autem eaque itaque, ab repudiandae suscipit similique sunt. Beatae aperiam officia repellat. Odio nulla aliquam at repudiandae tempore alias, porro cupiditate. </p>
            <button className='btn btn-default mt-3 text-white' style={{
                backgroundImage: 'linear-gradient(to right, #18D2B1 , #0FCFEB)', fontWeight:'600'
            }}>Learn More</button>
        </div>
        </div>
        
    );
};

export default BlogDetail;