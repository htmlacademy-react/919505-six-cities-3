import {render, screen} from '@testing-library/react';
import {withStore} from '../../mocks/mock-component';
import MainScreen from './';
import {createMockStore} from '../../mocks/mocks';

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<MainScreen/>, createMockStore());

    render(withStoreComponent);

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });
});
