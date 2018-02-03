import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  authenticationRoute: 'index',
  
  model() {
   return this.get('store').query('rental', { owner: 'me' });
  }
});
