import * as plugins from './smartmail.plugins';

export interface IEmailValidationResult {
  valid: boolean;
  reason: string;
}

export class EmailAddressValidator {
  public smartdns = new plugins.smartdns.Smartdns({});

  public async validate(emailArg: string): Promise<IEmailValidationResult> {
    const emailArray = emailArg.split('@');
    const result = await this.smartdns.getRecord(emailArray[1], 'MX');
    return {
      valid: !!result,
      reason: 'todo'
    };
  }
}
