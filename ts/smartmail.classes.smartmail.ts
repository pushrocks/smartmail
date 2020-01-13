import * as plugins from './smartmail.plugins';

export interface ISmartmailOptions<T> {
  from: string;
  subject: string;
  body: string;
  creationObjectRef?: T;
}

/**
 * a standard representation for mails
 */
export class Smartmail<T> {
  public options: ISmartmailOptions<T>;
  public attachments: plugins.smartfile.Smartfile[] = [];

  constructor(optionsArg: ISmartmailOptions<T>) {
    this.options = optionsArg;
  }

  public addAttachment(smartfileArg: plugins.smartfile.Smartfile) {
    this.attachments.push(smartfileArg);
  }

  public getCretionObject(): T {
    return this.options.creationObjectRef;
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
