import MDListText from '../components/MDListText';
import { MDProvider } from '../index';

// This default export determines where your story goes in the story list
export default {
  title: 'MDListText',
  component: MDListText,
  decorators: [(story) => <MDProvider>{story()}</MDProvider>],
};

const Template = (args) => <MDListText {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '<p> Your HTML content here</p><br /><br /> Another Line</p>',
};
