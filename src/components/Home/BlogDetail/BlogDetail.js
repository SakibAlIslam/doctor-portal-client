import React from 'react';

const BlogDetail = ({blogInfo}) => {
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <div className='col-md-6 '>
            <img style={{height: '500px'}} src={blogInfo.img} alt="img"/>
        </div>
        <div className='col-md-6 '>
             <h2 className='mt-5 mb-5' style={{color:'#3a4256'}}>{blogInfo.title}</h2>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab debitis reiciendis velit, illo at fugit officia eaque quia consequuntur quasi ducimus facilis labore earum unde incidunt nesciunt? Aliquam saepe, quos reiciendis deleniti velit quibusdam pariatur corporis ipsa! Architecto quia consequatur reprehenderit ad, atque natus eveniet tenetur voluptatum fuga modi? Nam quis voluptate doloribus consectetur eligendi necessitatibus voluptatem ex et quibusdam asperiores, repellat, minus dolores beatae dolorum, temporibus amet rerum tenetur omnis eveniet itaque delectus? Obcaecati ex rerum nam porro. </p>
        </div>
        </div>
        
    );
};

export default BlogDetail;