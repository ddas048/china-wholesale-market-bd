'use client';
import { SignOutButton, useUser } from '@clerk/nextjs';

export default function Home() {
	const { user } = useUser();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="font-[500]">China Wholesale Market BD</h1>
			<p>{user?.emailAddresses[0].emailAddress}</p>

			{user && <SignOutButton />}
		</main>
	);
}
