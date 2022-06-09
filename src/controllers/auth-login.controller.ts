// Uncomment these imports to begin using these cool features!

import { post, requestBody } from "@loopback/rest";

//import {post} from '@loopback/core';

export class AuthLoginController {
  constructor() {
  
  }
    
  @post('/authLogin')
  auth(@requestBody() authLogin: any): Object {
    authLogin.status = "success";
    return authLogin;
  }

}