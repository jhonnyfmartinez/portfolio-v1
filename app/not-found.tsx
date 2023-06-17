import { NextPage } from 'next';
import Button from './components/Button';

const NotFoundPage: NextPage = () => (
  <div className="flex-center h-full">
    <div>
      <p className="heading-1">
        404 | <span className="body-copy align-middle">Page Not Found</span>
      </p>
      <Button className="mt-4 mx-auto" href="/">
        GO TO HOMEPAGE
      </Button>
    </div>
  </div>
);

export default NotFoundPage;
