const FabrixApp = require('fabrix')
const app = new FabrixApp({
  api: {
    controllers: {
      RunkitController: class RunkitController extends Controller {
        /**
         * Write custom logic here to test out your Fabrix Controller on RunKit
         */
        runkitEndpoint (request, reply) {
          reply({
            message: 'hello world!',
            from: 'fabrix',
            appName: this.app.pkg.name,
            fabrixVersion: this.app._fabrix.version,
            body: request.body
          })
        }
      }
    }
  },
  config: {
    main: {
      spools: [
        // require('spool-router'),
        // require('spool-runkit')(exports)
      ]
    }
  },
  pkg: {
    name: 'fabrix-runkit-demo'
  }
})
app.start().catch(console.error)
