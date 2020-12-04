import { ApiService } from './api';

export const TVShowService = {
  api: ApiService,

  getShow(id) {
    return this.api.get(`shows/${id}`);
  },

  getShowEpisodeList(id) {
    return this.api.get(`shows/${id}/episodes`);
  },
};
