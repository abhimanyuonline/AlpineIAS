import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export const prerender = true;

async function load_from_folder(folderPath: string) {
	const files = fs.readdirSync(folderPath);

	const posts = await Promise.all(
		files
			.filter(file => file.endsWith('.md'))
			.map(async file => {
				const fullPath = path.join(folderPath, file);
				const fileContent = fs.readFileSync(fullPath, 'utf-8');

				// Extract metadata (assuming it's at the beginning of the file in YAML format)
				let metadata = {};
				const metadataMatch = fileContent.match(/^---\s*([\s\S]*?)\s*---/);
				if (metadataMatch) {
					try {
						metadata = yaml.load(metadataMatch[1]);
					} catch (e) {
						console.warn(`Failed to parse metadata for ${file}: ${e}`);
					}
				}

				const slug = file.replace('.md', '');
				return { slug, metadata };
			})
	);
	return posts;
}

export async function load({ params }) {
    const { category } = params;

    const posts = path.resolve(`static/current_affairs/${category}/`);

	return {
		posts: await load_from_folder(posts),
        category: category
	};
}
