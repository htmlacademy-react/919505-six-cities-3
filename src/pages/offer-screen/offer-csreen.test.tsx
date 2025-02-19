import {render, screen} from '@testing-library/react';
import {withStore} from '../../mocks/mock-component';
import OfferScreen from './';
import {createMockStore} from '../../mocks/mocks';

describe('Component: OfferScreen', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<OfferScreen/>, createMockStore());

    render(withStoreComponent);

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });
});
