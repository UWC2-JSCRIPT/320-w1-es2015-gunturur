// Import HTMLElement here
import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(props) {
    super(props);
    this.content = super.content;
  }

  render() {
    return <div>`{super.render(this.content)}`</div>;
  }
}
// Export class here
export default DivElement;