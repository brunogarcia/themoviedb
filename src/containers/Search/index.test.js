import React from 'react';
import {
  act,
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import api from '../../api/index';
import Search from './index';

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
    id: 104865,
    title: 'Per Aspera Ad Astra',
    vote_average: 4.8,
    release_date: '1969-01-01',
    overview: 'Short movie where a little old man trying to get up from the toilet. He gets a helping hand.',
  },
];

describe('The container must perform the search', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Search movies: success', async () => {
    api.search = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        results: movies,
      });
    }));

    await act(async () => {
      render(<Router><Search /></Router>);
    });

    await act(async () => {
      const input = screen.getByPlaceholderText('Search a movie');
      fireEvent.change(input, { target: { value: 'Ad Astra' } });
    });

    const title1 = screen.getByText('Ad Astra');
    const title2 = screen.getByText('Per Aspera Ad Astra');

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  it('Search movies: error', async () => {
    api.search = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
      reject(new Error('Some kind of problem on the API'));
    }));

    await act(async () => {
      render(<Router><Search /></Router>);
    });

    await act(async () => {
      const input = screen.getByPlaceholderText('Search a movie');
      fireEvent.change(input, { target: { value: 'Ad Astra' } });
    });

    const errorMessage = screen.getByText('Ups! We found an error. Try again in a few minutes.');

    expect(errorMessage).toBeInTheDocument();
  });
});
