import { Spin } from 'antd';

const Loading = () => {
	return (
		<div className="container-spinner">
			<Spin tip="Loading..." size="large" />
		</div>
	);
};

export default Loading;
