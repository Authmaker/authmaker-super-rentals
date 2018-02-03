import Route from '@ember/routing/route';
import AuthmakerLoginRoute from 'authmaker-ember-simple-auth/mixins/login-route';
import Config from 'authmaker-super-rentals/config/environment';

export default Route.extend(AuthmakerLoginRoute, {
  config: Config.authmaker,
});
