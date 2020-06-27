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

const similarMovies = {
  results: [
    {
      id: 369972,
      title: 'First Man',
      vote_average: 7.1,
      overview: 'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.',
      poster_path: '/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg',
      release_date: '2018-10-11',
    },
    {
      id: 95,
      title: 'Armageddon',
      vote_average: 6.8,
      overview: "When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise.",
      release_date: '1998-07-01',
      poster_path: '/fMtOCd0EAdAzKtGLQiHjSUvbdNc.jpg',
    },
    {
      id: 568,
      title: 'Apollo 13',
      vote_average: 7.4,
      overview: 'The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1970, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.',
      release_date: '1995-06-30',
      poster_path: '/oYUZHYMwNKnE1ef4WE5Hw2a9OAY.jpg',
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

    api.getSimilarMovies = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve(similarMovies);
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
      reject(new Error('Some kind of problem on the API'));
    }));

    api.getSimilarMovies = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
      reject(new Error('Some kind of problem on the API'));
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
