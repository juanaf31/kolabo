import { Spin } from 'antd';

const Loading = () => {
	return (
		<div data-testid='loading' className="container-spinner">
			<Spin tip="Loading..." size="large" />
		</div>
	);
};

export default Loading;
