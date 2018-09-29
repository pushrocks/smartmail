import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmail from '../ts/index';

tap.test('first test', async () => {
  const testSmartmail = new smartmail.Smartmail();
  expect(testSmartmail).to.be.instanceof(smartmail.Smartmail);
});

tap.start();
