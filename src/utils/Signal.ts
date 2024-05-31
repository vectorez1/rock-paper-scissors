class Signal {
  private listeners: Array<Function> = [];

  public AddListener(listener: Function) {
    this.listeners.push(listener);
  }

  public RemoveListener(listener: Function) {
    this.listeners.splice(this.listeners.indexOf(listener));
  }

  public Emit(params: {} = {}): void {
    this.listeners.map((listener) => listener(params));
  }
}
