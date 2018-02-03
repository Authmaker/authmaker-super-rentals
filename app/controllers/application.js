import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Config from 'authmaker-super-rentals/config/environment';

export default Controller.extend({
  session: service(),

  actions: {
      login() {
        return this.get('session').authenticate('authenticator:authmaker', Config.authmaker);
      },
      logout() {
        return this.get('session').invalidate();
      }
    },
});
