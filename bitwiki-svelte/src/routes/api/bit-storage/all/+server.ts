import type { RequestHandler } from '@sveltejs/kit';
import { listFiles } from '$lib/storage/gcloudInterface';

export const GET: RequestHandler = async () => {
	const files = await listFiles();
	return new Response(JSON.stringify(files));
};
