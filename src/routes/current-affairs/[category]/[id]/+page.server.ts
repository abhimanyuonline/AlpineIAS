import path from 'path';
import fs from 'fs';
import { error } from '@sveltejs/kit';
import { remark } from 'remark';
import html from 'remark-html';
import yaml from 'js-yaml';

export const prerender = true;

export async function load({ params }) {
	const { category, id } = params;

	const filePath = path.resolve(`static/current_affairs/${category}/${id}.md`);

	if (!fs.existsSync(filePath)) {
		throw error(404, 'Current affair not found');
	}

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    let metadata = {};
    const metadataMatch = fileContent.match(/^---\s*([\s\S]*?)\s*---/);
    if (metadataMatch) {
        try {
            metadata = yaml.load(metadataMatch[1]);
        } catch (e) {
            console.warn(`Failed to parse metadata for ${filePath}: ${e}`);
        }
    }

    // Remove metadata from content
    const content = metadataMatch ? fileContent.substring(metadataMatch[0].length) : fileContent;

    // only return metadata and slug here
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

	return {
		id: id,
        category: category,
		meta: metadata,
        content: contentHtml
	};
}

// export const entries = async () => {
// 	const dailyDir = path.resolve('static/current_affairs/daily/');
// 	const weeklyDir = path.resolve('static/current_affairs/weekly/');
//
// 	const files = [...fs.readdirSync(dailyDir).filter(f => f.endsWith('.md'))
//                                               .map(f => ({ slug: `daily/${f.replace('.md', '')}` }))
//     , ...fs.readdirSync(weeklyDir).filter(f => f.endsWith('.md'))
//                                               .map(f => ({ slug: `weekly/${f.replace('.md', '')}` }))];
//     return files;
// };
