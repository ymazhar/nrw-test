import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../shared/Header';
import { Footer } from '../../shared/Footer';
import { fetchEpisodeById } from '../../store/actions/tvshow';
import { TVShowCard } from '../../shared/TVShow-card';
import { PageTitle } from '../../shared/PageTitle';

const EpisodeDetailePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const episodeDetail = useSelector((state) => state.tvShow.episodeDetail);
  const episodeTitle = episodeDetail.name || '';

  useEffect(() => {
    dispatch(fetchEpisodeById(id));
  }, []);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <Header />
      <div id="app-main">
        <div className="container">
          <PageTitle title={episodeTitle} />
          <TVShowCard tvShow={episodeDetail} />
          <button type="button" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EpisodeDetailePage;
