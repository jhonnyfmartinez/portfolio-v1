import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from '@/app/components/Tabs';
import '@testing-library/jest-dom';
import { EXPERIENCE_DATA } from '@/app/utils/data.utils';

describe('Tabs component', () => {
  it('should render tabs', () => {
    render(<Tabs selectedTab={0} tabs={EXPERIENCE_DATA.map(tab => tab.title)} />);

    const tabs = screen.getAllByRole('tab');

    expect(tabs.length).toBe(EXPERIENCE_DATA.length);
  });

  it('should update selected tab', () => {
    let tab = 0;
    const setTab = (val: number) => (tab = val);
    render(
      <Tabs selectedTab={tab} onChange={setTab} tabs={EXPERIENCE_DATA.map(tab => tab.title)} />,
    );

    const tabs = screen.getAllByRole('tab');

    fireEvent.click(tabs[1]);

    expect(tab).toBe(1);

    fireEvent.click(tabs[4]);

    expect(tab).toBe(4);
  });
});
