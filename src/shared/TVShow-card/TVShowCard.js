import React from 'react';
import PropTypes from 'prop-types';
import img from '../../assets/images/151357.jpg';
import './index.scss';

export const TVShowCard = ({ tvShow }) => {
  const { summary, name } = tvShow;
  const { medium } = tvShow.image || {};

  return (
    <div className="tvshow-card">
      <div className="tvshow-card__holder-image">
        <img src={medium} alt={name} className="tvshow-card__image" />
      </div>
      <div className="tvshow-card__desc">{summary}</div>
    </div>
  );
};

TVShowCard.prototype = {
  tvShow: PropTypes.shape({
    summary: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    name: PropTypes.string,
  }),
};
