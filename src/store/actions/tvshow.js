import { TVShowService, EpisodesService } from '../../core/services';
import { GET_EPISODE_LIST, GET_SHOW, GET_EPISODE_BY_ID } from '../action-types';

export function fetchShowEpisodesList(id) {
  return (dispatch) => {
    TVShowService.getShowEpisodeList(id)
      .then((episodeList) => dispatch({ type: GET_EPISODE_LIST, payload: episodeList }))
      .catch((error) => console.error(error));
  };
}

export function fetchShow(id) {
  return (dispatch) => {
    TVShowService.getShow(id)
      .then((show) => dispatch({ type: GET_SHOW, payload: show }))
      .catch((error) => console.error(error));
  };
}

export function fetchEpisodeById(id) {
  return (dispatch) => {
    EpisodesService.getEpisode(id)
      .then((episode) => dispatch({ type: GET_EPISODE_BY_ID, payload: episode }))
      .catch((error) => console.error(error));
  };
}
