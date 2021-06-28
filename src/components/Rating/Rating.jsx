import React from 'react';
import './Rating.scss';
import stamp from '../../assets/images/trustpilot.png';

function Rating() {

    let rating = [1,1,1,1,0.7];
    const showStars = 
        rating.map((star, index) => {
        index += 1;
        let starClass = 'rating__stars';
        if(star === 1){
            starClass = 'rating__stars rating__stars--on';
        }
        else{
            starClass = 'rating__stars rating__stars--off';
        }
        return (
            <div className={starClass}>
                <span className="rating__star">&#9733;</span>
            </div>
        );
      });

    return (
        <div className="rating">
            <div className="rating__row">
                <img className="rating__imagen" src={stamp} alt="trustpilot" />
                <div className="rating__points">4.7 / 5</div>
                <div className="rating__groupstars">
                    {showStars}
                </div>
            </div>
            <div className="rating__row">
            <p className="rating__text">Basado en 3312+ comentarios</p>
            </div>
        </div>
    )
}

export default Rating
