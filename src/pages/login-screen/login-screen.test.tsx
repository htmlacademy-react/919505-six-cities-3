import {render, screen} from '@testing-library/react';
import {withStore} from '../../mock-component';
import LoginScreen from './';
import {createMockStore} from '../../mocks';

describe('Component: LoginScreen', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<LoginScreen/>, createMockStore());

    render(withStoreComponent);

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });
});
