/**
 * event-bus v0.0.1
 * https://github.com/defypro/event-bus
 * @license MIT
 */
function EventBus() {
  this._events = {};
}

EventBus.prototype.$on = function (event, fn, ctx) {
  if (!this._events[event]) {
    this._events[event] = [];
  }

  var isPush = true;
  var len = this._events[event].length;

  for (var i = 0, l = len; i < l; i++) {
    if (this._events[event][i][0] === fn) {
      isPush = false;
      break;
    }
  }

  if (isPush) this._events[event].push([fn, ctx]);
  return this;
};

EventBus.prototype.$off = function (event) {
  if (!event) {
    this._events = {};
    return this;
  }

  if (!this._events.hasOwnProperty(event)) return this;
  delete this._events[event];
  return this;
};

EventBus.prototype.$emit = function (event) {
  var cbs = this._events[event];
  if (!cbs) return this;
  var len = cbs.length;
  var args = Array.prototype.slice.call(arguments).slice(1);

  for (var i = 0, l = len; i < l; i++) {
    cbs[i][0].apply(cbs[i][1], args);
  }

  return this;
};

var index = new EventBus();

export default index;
