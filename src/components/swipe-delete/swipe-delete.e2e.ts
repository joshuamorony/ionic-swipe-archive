import { newE2EPage } from '@stencil/core/testing';

describe('app-swipe-delete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-swipe-delete></app-swipe-delete>');

    const element = await page.find('app-swipe-delete');
    expect(element).toHaveClass('hydrated');
  });
});
