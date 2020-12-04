import React from 'react';
import PropTypes from 'prop-types';
import { EpisodeItem } from './EpisodeItem';
import './index.scss';

export const EpisodeList = ({ title, episodeList, onClick }) => {
  return (
    <section className="episodes">
      <h2 className="episodes__title">{title}</h2>
      <ul className="episode-list">
        {episodeList.map(({ id, name, image }) => (
          <EpisodeItem key={id} id={id} name={name} image={image} onClick={onClick} />
        ))}
      </ul>
    </section>
  );
};

EpisodeList.propTypes = {
  title: PropTypes.string,
  episodeList: PropTypes.oneOfType([PropTypes.array]),
  onClick: PropTypes.func,
};
