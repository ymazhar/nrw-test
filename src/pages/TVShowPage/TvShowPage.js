import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Header } from '../../shared/Header';
import { Footer } from '../../shared/Footer';
import { PageTitle } from '../../shared/PageTitle';
import { TVShowCard } from '../../shared/TVShow-card';
import { EpisodeList } from '../../shared/EpisodeList';
import { fetchShow, fetchShowEpisodesList } from '../../store/actions/tvshow';

const TvShowPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const tvShow = useSelector((state) => state.tvShow.show);
  const episodeList = useSelector((state) => state.tvShow.episodesList);
  const tvShowTitle = tvShow.name || 'The Powerpuff Girls';
  const episodeTitle = `${tvShowTitle} - Episode List`;

  useEffect(() => {
    dispatch(fetchShow(id));
  }, []);

  useEffect(() => {
    dispatch(fetchShowEpisodesList(id));
  }, []);

  const handleEpisodeItemClick = (episodeId) => {
    history.push(`/episodes/${episodeId}`);
  };

  return (
    <>
      <Header />
      <main id="app-main">
        <div className="container">
          <PageTitle title={tvShowTitle} />
          <TVShowCard tvShow={tvShow} />
          <EpisodeList
            episodeList={episodeList || []}
            title={episodeTitle}
            onClick={handleEpisodeItemClick}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TvShowPage;
