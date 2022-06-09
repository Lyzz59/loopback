import { get, requestBody } from '@loopback/rest';
// Uncomment these imports to begin using these cool features!

import { post, response } from '@loopback/rest';

export class TestController {
  constructor(

  ) {}
  
  @post('/test')
  pay(@requestBody() test: any): Object {
    test.status = "success";
    return test;
  }

}

