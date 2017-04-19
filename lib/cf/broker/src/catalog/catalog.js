'use strict';

module.exports = {
  services: [
    {
      id: 'abacus-metering',
      description: 'Resource consumption service based on cf-abacus',
      name: 'abacus-metering',
      tags: [
        'abacus',
        'resource provider'
      ],
      bindable: true,
      plan_updateable: false,
      plans: [
        {
          id: 'abacus-default-metering-ad42edc567aa',
          description: 'Default plan',
          name: 'standard'
        }
      ],
      dashboard_client: {
        id: process.env.DASHBOARD_CLIENT_ID,
        secret: process.env.DASHBOARD_CLIENT_SECRET,
        redirect_uri: process.env.DASHBOARD_REDIRECT_URI
      }
    }
  ]
};
