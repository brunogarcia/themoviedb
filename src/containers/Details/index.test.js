import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import api from '../../api/index';
import Details from './index';

let container;

const movie = {
  id: 419704,
  title: 'Ad Astra',
  vote_average: 6,
  release_date: '2019-09-17',
  poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
  homepage: 'https://www.foxmovies.com/movies/ad-astra',
  overview: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond.',
  genres: [
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 18,
      name: 'Drama',
    },
  ],
};

describe('The container must request the movie details', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Get movie details: success', async () => {
    api.getMovie = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve(movie);
    }));

    await act(async () => {
      render(<Router><Details /></Router>);

      const loadingMessage = screen.getByText('Loading...');
      expect(loadingMessage).toBeInTheDocument();
    });

    const title = screen.getByText('Ad Astra');

    expect(title).toBeInTheDocument();
  });

  it('Get movie details: error', async () => {
    api.getMovie = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
      reject(new Error('Some kinf of problem on the API'));
    }));

    await act(async () => {
      render(<Router><Details /></Router>);

      const loadingMessage = screen.getByText('Loading...');
      expect(loadingMessage).toBeInTheDocument();
    });

    const errorMessage = screen.getByText('Looks like there was a problem.');

    expect(errorMessage).toBeInTheDocument();
  });
});
