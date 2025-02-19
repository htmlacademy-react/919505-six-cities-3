import {render, screen} from '@testing-library/react';
import {withStore} from '../../mocks/mock-component';
import FavoritesScreen from './';
import {createMockStore} from '../../mocks/mocks';

describe('Component: FavoritesScreen', () => {
  it('should render correct', () => {
    const {withStoreComponent} = withStore(<FavoritesScreen/>, createMockStore());

    render(withStoreComponent);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });
});
