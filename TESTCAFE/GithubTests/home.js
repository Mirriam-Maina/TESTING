import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://github.com/Mirriam-Maina`;

test('Github homepage tests', async page=> {
    await page.expect(Selector('span.vcard-fullname').innerText).eql('Mirriam')
    .expect(Selector('span.vcard-username').innerText).eql('Mirriam-Maina')
    .click(Selector('a.UnderlineNav-item').withText('Repositories'))
    .click(Selector('a.UnderlineNav-item.mr-0.mr-md-1.mr-lg-3 '))
    .click(Selector('span.repo').withText('GROWTH_MARKS'))
    .expect(Selector('span.text-gray-dark.mr-2').textContent).contains('users can share and read stories')
    .click(Selector('span.css-truncate.css-truncate-target'))
    .expect(Selector('div.file-wrap').exists).ok();
});