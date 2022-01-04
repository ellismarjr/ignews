import {render,screen} from '@testing-library/react';
import { mocked } from 'jest-mock';

import {getPrismicClient} from '../../services/prismic';
import  {getServerSideProps} from '../../pages/posts/[slug]';
import Post from '../../pages/posts/[slug]';
import { getSession } from 'next-auth/client';


const posts = {
    slug: 'my-new-post',
    title: 'My new post',
    content: '<p>Post excerpt</p>',
    updatedAt: '10 de Abril'
  };

jest.mock('next-auth/client');
jest.mock('../../services/prismic');

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post={posts} />);
    expect(screen.getByText('Post excerpt')).toBeInTheDocument();
  });

  it('redirects user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession);

    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({params: {slug: 'my-new-post'}} as any);

    expect(response).toEqual(expect.objectContaining({
      redirect: expect.objectContaining({
          destination: '/',
      })
    }));
  });
});