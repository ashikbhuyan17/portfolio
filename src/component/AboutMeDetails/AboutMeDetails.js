import React from 'react';

const AboutMeDetails = (props) => {
    const { title, description } = props.AboutMeDetail
    return (
        <div className='col-lg-6'>
            <div className="about-me">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AboutMeDetails;