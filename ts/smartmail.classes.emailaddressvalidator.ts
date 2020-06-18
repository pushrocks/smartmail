import * as plugins from './smartmail.plugins';
import * as paths from './smartmail.paths';

export interface IEmailValidationResult {
  valid: boolean;
  disposable: boolean;
  freemail: boolean;
  reason: string;
}

export class EmailAddressValidator {
  public domainMap: { [key: string]: 'disposable' | 'freemail'};

  public smartdns = new plugins.smartdns.Smartdns({});

  public async validate(emailArg: string): Promise<IEmailValidationResult> {
    await this.fetchDomains();
    const emailArray = emailArg.split('@');
    const result = await this.smartdns.getRecord(emailArray[1], 'MX');
    // console.log(emailArray);
    // console.log(this.domainMap[emailArray[1]]);
    return {
      valid: !!result,
      reason: 'todo',
      disposable: this.domainMap[emailArray[1]] === 'disposable',
      freemail: this.domainMap[emailArray[1]] === 'freemail'
    };
  }

  public async fetchDomains() {
    if (!this.domainMap) {
      const localFileString = plugins.smartfile.fs.toStringSync(
        plugins.path.join(paths.assetDir, 'domains.json')
      );
      const localFileObject = JSON.parse(localFileString);

      
      let onlineFileObject: any;
      try {
        onlineFileObject = (
          await plugins.smartrequest.getJson(
            'https://raw.githubusercontent.com/romainsimon/emailvalid/master/domains.json'
          )
        ).body;
        this.domainMap = onlineFileObject;
        console.log(
          'smartmail EmailAddressValidator: Using online email list for email validation'
        );
      } catch (e) {
        this.domainMap = localFileObject;
        console.log(e);
        console.log(
          'smartmail EmailAddressValidator: Using local email list for email validation'
        );
      }
    }
  }
}
