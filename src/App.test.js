import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({ adapter: new Adapter() });

test("checking for h1 content",()=>{
  const wrapper=shallow(<App/>);
  expect (wrapper.find('h1').text()).toContain("Welcome To React")
});

test("Checking for h2 content",()=>{
  const wrapper=shallow(<App/>);
  expect(wrapper.find('h2').text()).toContain("Welcome To Javascript")
});

test("Testing props",()=>{
  const wrapper=shallow(<App name='john'/>);
  expect(wrapper.find('#welcome').text()).toBe('welcome john')

});
test("Checking for State value",()=>{
  const wrapper=shallow(<App/>);
  expect(wrapper.find('#initial_Value').text()).toBe('5')
});
test('checkin for onClick',()=>{
  const wrapper=shallow(<App/>);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('#initial_Value').text()).toBe('6')

})