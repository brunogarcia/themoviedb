import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import api from '../../api/index';
import Home from './index';

let container;

const movies = [
  {
    id: 419704,
    title: 'Ad Astra',
    vote_average: 8,
    release_date: '2019-09-17',
    poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    overview: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
  },
  {
    id: 443791,
    title: 'Underwater',
    vote_average: 6.4,
    release_date: '2020-01-08',
    poster_path: '/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg',
    overview: 'After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.',
  },
];

describe('The container must request the popular movies', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Get popular movies: success', async () => {
    api.getPopularMovies = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        results: movies,
      });
    }));

    await act(async () => {
      render(<Router><Home /></Router>);

      const loadingMessage = screen.getByText('Loading...');
      expect(loadingMessage).toBeInTheDocument();
    });

    const title1 = screen.getByText('Ad Astra');
    const title2 = screen.getByText('Underwater');

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  it('Get popular movies: error', async () => {
    api.getPopularMovies = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
      reject(new Error('Some kinf of problem on the API'));
    }));

    await act(async () => {
      render(<Router><Home /></Router>);

      const loadingMessage = screen.getByText('Loading...');
      expect(loadingMessage).toBeInTheDocument();
    });

    const errorMessage = screen.getByText('Looks like there was a problem.');

    expect(errorMessage).toBeInTheDocument();
  });
});
