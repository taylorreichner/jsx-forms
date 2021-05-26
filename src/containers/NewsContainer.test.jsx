import React from 'react';
import { getAllByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

jest.mock('../services/newsApi', () => ({
    fetchNews: () => [{ title: 'trees', text: 'tall trees', link: 'taylor'}],
    fetchNewsBySearch: () => [{title: 'trees', text: 'tall trees', link: 'taylor'}]
}))

describe('news Container', () => {
  it('displays a list of news', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');

	const submitButton = screen.getByRole('button', { name: 'find-articles' });

	const searchForm = screen.getByRole('form', { name: 'form-input' });

	const articleList = await screen.findByRole('list', { name: 'articles' });

	expect(articleList).toMatchSnapshot();
	expect(submitButton).toMatchSnapshot();
	expect(searchForm).toMatchSnapshot();


	return waitFor(async () => {
		const searchList = await screen.findByRole('list', { name: 'articles' });

		expect(searchList.childElementCount).toEqual(1);
	});
  });
});