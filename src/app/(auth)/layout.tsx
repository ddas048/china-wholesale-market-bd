import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<main>
			<nav className="w-full relative flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-5">
				<Link href="/" className="">
					<h1 className="text-2xl">China Wholesale Market BD</h1>
				</Link>
			</nav>

			<div className="flex items-center justify-center mx-auto p-7">
				{children}
			</div>
		</main>
	);
};

export default AuthLayout;
