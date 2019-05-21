# EventBus
JavaScript EventBus

```javascript
	import EventBus from "@defy/event-bus"

	EventBus.$on("test",function(){
		//...
	});

	EventBus.$emit("test");

	EventBus.$off("test");
```