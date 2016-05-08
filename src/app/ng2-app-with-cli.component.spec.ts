import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2AppWithCliAppComponent } from '../app/ng2-app-with-cli.component';

beforeEachProviders(() => [Ng2AppWithCliAppComponent]);

describe('App: Ng2AppWithCli', () => {
  it('should create the app',
      inject([Ng2AppWithCliAppComponent], (app: Ng2AppWithCliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-app-with-cli works!\'',
      inject([Ng2AppWithCliAppComponent], (app: Ng2AppWithCliAppComponent) => {
    expect(app.title).toEqual('ng2-app-with-cli works!');
  }));
});
