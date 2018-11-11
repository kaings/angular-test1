import {routes} from './app.routes';
import {UsersComponent} from './users/users.component';

describe('routes', () => {
  it('it should contain routes for /users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent});
  });
});
