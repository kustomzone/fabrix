import { FabrixApp } from '../index'
import { EventEmitter } from 'events'
import { enumerable, writable } from './'

/**
 * Fabrix Policy Class.
 */
export class FabrixPolicy {
  private _app: FabrixApp


  /**
   * Policy configuration
   */
  static config () {
  }

  constructor (app: FabrixApp) {
    if (!(app instanceof EventEmitter)) {
      throw new Error('The "app" argument must be of type EventEmitter')
    }
    this._app = app
    this.app.emit(`policy:${this.id}:constructed`, this)
  }

  // @enumerable(false)
  // @writable(false)
  get app(): FabrixApp {
    return this._app
  }

  /**
   * Return the id of this policy
   */
  get id (): string {
    return this.constructor.name.replace(/(\w+)Policy/, '$1').toLowerCase()
  }

  /**
   * Return a reference to the Fabrix logger
   */
  get log (): FabrixApp['log'] {
    return this.app.log
  }

  /**
   * Return a reference to the Fabrix configuration map.
   */
  get config (): FabrixApp['config'] {
    return this.app.config
  }

  get services (): FabrixApp['services'] {
    return this.app.services
  }
}
