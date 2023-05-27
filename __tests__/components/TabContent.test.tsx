import { render, screen } from '@testing-library/react';
import TabContent from '@/app/components/TabContent';
import '@testing-library/jest-dom';
import { EXPERIENCE_DATA } from '@/app/utils/data.utils';

const CONTENT_DATA = EXPERIENCE_DATA[0];

describe('TabContent component', () => {
  const props = {
    company: CONTENT_DATA.title,
    items: CONTENT_DATA.content.items,
    period: CONTENT_DATA.content.period,
    position: CONTENT_DATA.content.position,
    hidden: false,
  };

  it('should render tab content', () => {
    render(<TabContent {...props} />);

    const title = screen.getByText(`@ ${CONTENT_DATA.title}`);
    const position = screen.getByText(CONTENT_DATA.content.position);
    const period = screen.getByText(CONTENT_DATA.content.period);
    const items = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();
    expect(position).toBeInTheDocument();
    expect(period).toBeInTheDocument();
    expect(items.length).toBe(CONTENT_DATA.content.items.length);
  });

  it('should not be visible', () => {
    render(<TabContent {...props} hidden={true} />);

    const title = screen.queryByText(`@ ${CONTENT_DATA.title}`);
    const position = screen.queryByText(CONTENT_DATA.content.position);
    const period = screen.queryByText(CONTENT_DATA.content.period);
    const items = screen.queryAllByRole('listitem');

    expect(title).not.toBeVisible();
    expect(position).not.toBeVisible();
    expect(period).not.toBeVisible();
    expect(items.length).toBe(0);
  });
});
