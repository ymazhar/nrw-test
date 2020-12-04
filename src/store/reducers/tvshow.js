import { GET_EPISODE_LIST, GET_SHOW, GET_EPISODE_BY_ID } from '../action-types';

const initialState = {
  show: {},
  episodesList: [],
  episodeDetail: {},
};

export function tvShow(state = initialState, action) {
  switch (action.type) {
    case GET_SHOW:
      return {
        ...state,
        show: action.payload,
      };
    case GET_EPISODE_LIST:
      return {
        ...state,
        episodesList: action.payload,
      };
    case GET_EPISODE_BY_ID:
      return {
        ...state,
        episodeDetail: action.payload,
      };
    default:
      return state;
  }
}
