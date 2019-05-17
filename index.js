(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.EventBus = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  function EventBus() {
    this._events = {};
  }

  EventBus.prototype.$on = function (event, fn, ctx) {
    if (!this._events[event]) {
      this._events[event] = [];
      return this;
    }

    let isPush = true;
    const len = this._events[event] ? this._events[event].length : 0;
    for (let i = 0, l = len; i < l; i++) {
      if (this._events[event][i][0] === fn) {
        isPush = false;
        break;
      }
    }

    if (isPush) this._events[event].push([fn, ctx]);

    return this;
  }

  EventBus.prototype.$off = function (event) {
    if (!this._events.hasOwnProperty(event)) return this;
    delete this._events[event];
    return this;
  }

  EventBus.prototype.$emit = function (event) {
    const cbs = this._events[event];
    if (!cbs) return this;
    const len = cbs.length;
    const args = Array.prototype.slice.call(arguments).slice(1);
    for (let i = 0, l = len; i < l; i++) {
      cbs[i][0].apply(cbs[i][1], args);
    }
    return this;
  }

  return new EventBus();
}));
