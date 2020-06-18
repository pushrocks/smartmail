import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmail from '../ts/index';

let emailAddressValidatorInstance: smartmail.EmailAddressValidator;

tap.test('should create an instance of EmailAddressValidator', async () => {
  emailAddressValidatorInstance = new smartmail.EmailAddressValidator();
  expect(emailAddressValidatorInstance).to.be.instanceOf(smartmail.EmailAddressValidator);
});

tap.test('should validate an email', async () => {
  const result = await emailAddressValidatorInstance.validate('sandbox@bleu.de');
});

tap.test('should create a SmartMail', async () => {
  const testSmartmail = new smartmail.Smartmail({
    body: 'hi there',
    from: 'noreply@mail.lossless.com',
    subject: 'hi from here'
  });
  expect(testSmartmail).to.be.instanceof(smartmail.Smartmail);
});

tap.start();
