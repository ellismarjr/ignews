import {render,screen} from '@testing-library/react';
import { mocked } from 'jest-mock';

import {getPrismicClient} from '../../services/prismic';
import  {getServerSideProps} from '../../pages/posts/[slug]';
import Post from '../../pages/posts/[slug]';


const posts = {
    slug: 'my-new-post',
    title: 'My new post',
    content: '<p>Post excerpt</p>',
    updatedAt: '10 de Abril'
  };

jest.mock('../../services/prismic');

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post={posts} />);
    expect(screen.getByText('Post excerpt')).toBeInTheDocument();
  });

  // it('loads initial data', async () => {
  //   const getPrismicClientMocked = mocked(getPrismicClient);

  //   getPrismicClientMocked.mockReturnValueOnce({
  //       query: jest.fn().mockResolvedValueOnce({
  //         results: [
  //           {
  //             uid: 'my-new-post',
  //             data: {
  //               title: [{type: 'heading', text: 'My new post'}],	
  //               content: [{type: 'paragraph', text: 'This is my new post'}],
  //             },
  //             last_publication_date: '04-01-2021'
  //           }
  //         ]
  //       })
  //     } as any);

  //   const response = await getStaticProps({});

  //   expect(response).toEqual(expect.objectContaining({
  //     props: {
  //       posts: [{
  //         slug: 'my-new-post',
  //         title: 'My new post',
  //         excerpt: 'This is my new post',
  //         updatedAt: '01 de abril de 2021'
  //       }]
  //     }
  //   }));
  // });
});