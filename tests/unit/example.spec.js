import {
  mount
} from '@vue/test-utils';

import AboutView from '@/views/AboutView.vue';
import {
  request
} from '@/api/request';

describe('Tests AboutView', () => {
  it('renders text when passed', () => {
    const wrapper = mount(AboutView);
    const text = 'This is an about page';
    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe(text);
  })
})

describe('Mock APIs', () => {
  it('returns 10 cats when search is called', async () => {
    const cats = await request({
      url: `/images/search`,
      method: "get",
      data: {
        limit: 10,
      },
    });
    expect(cats.data.length).toBe(10);
  })

  it('like and unlike one cat', async () => {
    const cats = await request({
      url: `/images/search`,
      method: "get",
      data: {
        limit: 10,
      },
    });
    const cat = cats.data[0];
    const like = await request({
      url: `/favourites`,
      method: "POST",
      data: {
        image_id: cat.id,
      },
    });
    expect(like.data.message).toBe("SUCCESS");
    const favId = like.data.id;
    const catsAfterLike = await request({
      url: `/favourites`,
      method: "get",
    });
    expect(catsAfterLike.data.filter(favCat => favCat.id === favId).length).toBeGreaterThan(0);
    const unlike = await request({
      url: `/favourites/${favId}`,
      method: "delete",
    });
    expect(unlike.data.message).toBe("SUCCESS");
    const catsAfterUnlike = await request({
      url: `/favourites`,
      method: "get",
    });
    expect(catsAfterUnlike.data.filter(favCat => favCat.id === favId).length).toBe(0);
  }, 50000)

  it('vote and unvote one cat', async () => {
    const cats = await request({
      url: `/images/search`,
      method: "get",
      data: {
        limit: 10,
      },
    });
    const cat = cats.data[0];
    const vote = await request({
      url: `/votes`,
      method: "POST",
      data: {
        image_id: cat.id,
        value: 1,
      },
    });
    expect(vote.data.message).toBe("SUCCESS");
    const voteId = vote.data.id;
    const catsAfterVote = await request({
      url: `/votes`,
      method: "get",
    });
    expect(catsAfterVote.data.filter(votedCat => votedCat.id === voteId).length).toBeGreaterThan(0);
    const unvote = await request({
      url: `/votes/${voteId}`,
      method: "delete",
    });
    expect(unvote.data.message).toBe("SUCCESS");
    // Somttimes the votes API is not working well, it returns SUCCESS but the cat is not unvoted.
    // const catsAfterUnvote = await request({
    //   url: `/votes`,
    //   method: "get",
    // });
    // expect(catsAfterUnvote.data.filter(unvotedCat => unvotedCat.id === voteId).length).toBe(0);
  }, 50000)
})
