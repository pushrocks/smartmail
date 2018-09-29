import * as plugins from './smartmail.plugins';

/**
 * a standard representation for mails
 */
export class Smartmail {
  from: string;
  to: string;
  body: string;
  attachments: any[];
}
