// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const CONSENT_COOKIE_NAME = "leuconsent";
const CONSENT_COOKIE_VALUE = "CP27bdgP27bdgEYACAENAfEsAP_gAEPgAB5YJ0tX_H__bX9v-Xr36ft0eY1f99j77sQxBhfJs-4FyLvW_JwX32EyNE26tqYKmRIEu3ZBIQFtHJnURVihaogVrzHsYkGcgTNKJ-BkgHMRe2dYCF5vmYtj-QKZ5_p_d3f52T_9_dv-3dzzz9Vnv3e9fudlcIida59tH_n_bRKb-7Ie9_7-_4v09N_rk2_eTVv_9evv71-u_t____9_9__-CdIBZhoVEAfYEhIRaDhFAgBEFYQEUCAAAAEgaICAEgYFOwMAl1hIgBAigAGCAEAAKMgAQAAAQAIRABIAUCAACAQCAAAAAAQCAAgYABQAWAgEAAIDoGKYUACgWECRmREKYEIUCQQEtlAgkBQIK4QBFjgBQCImCgAQAAAKwAAAWKwGIJASoSCBLCDaAAAgAQCilCoQScGAAYEjZagcETaMgAAA.cAAAD_wAAAAA";

Cypress.on("window:before:load", window => {
  window.document.cookie = `${CONSENT_COOKIE_NAME}=${CONSENT_COOKIE_VALUE}`;
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});