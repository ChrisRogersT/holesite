import { type File, Storage } from '@google-cloud/storage';
import map from 'lodash/map';
import type { Bit } from '$lib/bit/type';

if (!process.env.GOOGLE_CREDENTIALS) {
	throw new Error('process.env.GOOGLE_CREDENTIALS needs to be set');
}
const storage = new Storage({
	projectId: 'holesite',
	credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS)
});

const bit_wiki_bucket = storage.bucket('bit_wiki');

export const streamToString = (stream: any): Promise<string> => {
	const chunks: any[] = [];
	return new Promise((resolve, reject) => {
		stream.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)));
		stream.on('error', (err: any) => reject(err));
		stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
	});
};

export const getObject = async (id: string): Promise<Bit> => {
	const file = bit_wiki_bucket.file(id).createReadStream();

	const data = await streamToString(file);

	return JSON.parse(data);
};

export const listFiles = async (): Promise<string[]> => {
	const [files] = await bit_wiki_bucket.getFiles();
	const fileNames = map(files, (file: File) => file.name);
	return fileNames;
};

//TODO this is from memory so could be subject to size limitations, not sure how vercel's network would prefer it, streamed to a temp file or from memory
export const uploadBit = async (bitName: string, bitData: Bit) => {
	await bit_wiki_bucket.file(bitName).save(JSON.stringify(bitData));
};
