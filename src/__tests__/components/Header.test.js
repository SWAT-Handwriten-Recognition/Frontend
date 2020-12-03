import { shallow } from 'enzyme';
import Header from '../../components/Header/index.jsx';
import toJson from 'enzyme-to-json';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('is the Header rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
