import { Result } from 'antd';

const ErrorPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist. Please reload page"
    />
  );
};

export default ErrorPage;
