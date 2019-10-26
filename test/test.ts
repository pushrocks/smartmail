import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmail from '../ts/index';

tap.test('first test', async () => {
  const testSmartmail = new smartmail.Smartmail({
    body: 'hi there',
    from: 'noreply@mail.lossless.com',
    subject: 'hi from here'
  });
  expect(testSmartmail).to.be.instanceof(smartmail.Smartmail);
});

tap.start();
