# EventBus [![Author](https://img.shields.io/badge/author-defy-green.svg)](https://github.com/defypro) [![Downloads](https://img.shields.io/npm/dt/@defy/event-bus.svg)](https://www.npmjs.com/package/@defy/event-bus) [![Version](https://img.shields.io/npm/v/@defy/event-bus.svg)](https://www.npmjs.com/package/@defy/event-bus) [![License](https://img.shields.io/npm/l/@defy/event-bus.svg)](https://www.npmjs.com/package/@defy/event-bus)
JavaScript EventBus

```javascript
	import EventBus from "@defy/event-bus"

	EventBus.$on("test",function(){
		//...
	});

	EventBus.$emit("test");

	EventBus.$off("test");
```