import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentLoginPage } from './agent-login';

@NgModule({
  declarations: [
    AgentLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentLoginPage),
  ],
})
export class AgentLoginPageModule {}
