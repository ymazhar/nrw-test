import { ApiService } from './api';

export const EpisodesService = {
  api: ApiService,

  getEpisode(id) {
    return this.api.get(`episodes/${id}`);
  },
};
