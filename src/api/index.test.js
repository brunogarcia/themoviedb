import api from './index';

describe('API actions work fine', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => ({ id: 2056777518 }),
      });
    }));
  });

  it('Get popular movies', async () => {
    const response = await api.getPopularMovies();
    expect(response.id).toBe(2056777518);
  });

  it('Get movie by id', async () => {
    const response = await api.getMovie();
    expect(response.id).toBe(2056777518);
  });

  it('Search movies', async () => {
    const response = await api.search();
    expect(response.id).toBe(2056777518);
  });
});

describe('API actions do not work properly', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: false,
        statusText: 400,
      });
    }));
  });

  it('Get popular movies throws an error', async () => {
    expect.assertions(1);
    await expect(api.getPopularMovies()).rejects.toEqual(new Error(400));
  });

  it('Get movie by id throws an error', async () => {
    expect.assertions(1);
    await expect(api.getMovie()).rejects.toEqual(new Error(400));
  });

  it('Search movies throws an error', async () => {
    expect.assertions(1);
    await expect(api.search()).rejects.toEqual(new Error(400));
  });
});

