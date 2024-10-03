import GlobeDemo from '@/components/example/globe-demo';

export default function Home() {
	return (
		<div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16  font-[family-name:var(--font-geist-sans)] dark:bg-black">
			<div className="w-full">
				<GlobeDemo />
			</div>
		</div>
	);
}
