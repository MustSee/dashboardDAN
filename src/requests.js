// Import ES6
import CleverAPI from 'clever-client';
import settings from './settings.json';

var myClient = CleverAPI(settings);

export function myOrganisation (organisationID) {
  return myClient.organisations._.get().withParams([organisationID]).send();
}