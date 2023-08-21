import { Rotate } from '@/dacomponents/Animation';
class Rotate2 extends Rotate {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <Rotate>{children}</Rotate>;
  }
}
export default Rotate2;
