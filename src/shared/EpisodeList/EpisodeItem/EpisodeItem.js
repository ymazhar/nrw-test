import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export const EpisodeItem = ({ id, name, image, onClick }) => {
  const { medium } = image || {};

  return (
    <li className="episode-item" id={id} onClick={() => onClick(id)}>
      <img src={medium} alt={name} className="episode-item__image" />
      <div className="episode-item__name">{name}</div>
    </li>
  );
};

EpisodeItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};
