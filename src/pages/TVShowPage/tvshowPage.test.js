import React from 'react';
import axios from 'axios';
import { render, act } from '@testing-library/react';
import { EpisodeList } from '../../shared/EpisodeList';
import { TVShowCard } from '../../shared/TVShow-card';

jest.mock('axios');

const showCard = {
  id: 1,
  name: 'The Powerpuff Girls',
  image: {
    medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
  },
  summary: 'description for tv show card',
};

const episodeList = [
  {
    id: 1,
    name: 'Escape from Monster Island',
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
    },
    summary: 'summary for Monster Island',
  },
  {
    id: 2,
    name: 'Princess Buttercup',
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
    },
    summary: 'summary for Princess Buttercup',
  },
];

describe('TvShowPage', () => {
  it('renders episodes list', async () => {
    const promise = Promise.resolve({ episodeList });

    axios.get.mockImplementationOnce(() => promise);
    const { getAllByRole } = render(<EpisodeList episodeList={episodeList} />);

    await act(() => promise);

    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders tv show card', async () => {
    const promise = Promise.resolve({ showCard });

    axios.get.mockImplementationOnce(() => promise);
    const { getByText, getByAltText } = render(<TVShowCard tvShow={showCard} />);

    await act(() => promise);

    expect(getByText(/description for tv show card/i)).toBeInTheDocument();
    expect(getByAltText(/the powerpuff girls/i)).toBeInTheDocument();
  });
});
