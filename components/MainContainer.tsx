import { FC, ReactNode } from 'react';

export const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className='mx-4 mb-4'>{children}</div>;
};
