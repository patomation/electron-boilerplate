const events = {
  events: {},
  on(eventName, eventFunction) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(eventFunction);
  },
  off(eventName, eventFunction) {
    if (this.events[eventName]){
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === eventFunction){
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach( (eventFunction) => {
        eventFunction(data)
      })
    }
  }
}
