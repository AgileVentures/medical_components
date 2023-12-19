import { MDProvider, MDButton } from '../index';

export default {
  title: 'MDButton',
  component: MDButton,
  decorators: [(story) => <MDProvider>{story()}</MDProvider>],
};

export const Default = () => <MDButton>Default Button</MDButton>;

export const Small = () => <MDButton size='sm'>Small Button</MDButton>;

export const Large = () => <MDButton size='lg'>Large Button</MDButton>;

export const CustomColor = () => <MDButton colorScheme='orange'>Custom Color Button</MDButton>;
