import * as plugins from './smartmail.plugins';

export interface ISmartmailOptions {
  from: string;
  subject: string;
  body: string;
}

/**
 * a standard representation for mails
 */
export class Smartmail {
  public options: ISmartmailOptions;
  public attachments: plugins.smartfile.Smartfile[];

  constructor(optionsArg: ISmartmailOptions) {
    this.options = optionsArg;
  }

  public addAttachment(smartfileArg: plugins.smartfile.Smartfile) {
    this.attachments.push(smartfileArg);
  }

  public getSubject(dataArg: any = {}) {
    const smartmustache = new plugins.smartmustache.SmartMustache(this.options.subject);
    return smartmustache.applyData(dataArg);
  }

  public getBody(dataArg: any = {}) {
    const smartmustache = new plugins.smartmustache.SmartMustache(this.options.body);
    return smartmustache.applyData(dataArg);
  }
}
