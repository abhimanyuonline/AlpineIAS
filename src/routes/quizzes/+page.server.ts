// First, let's debug your current setup
// Add this to your src/routes/quizzes/+page.server.ts to see what's happening

import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';
import { dev } from '$app/environment';

export const prerender = true;

export async function load() {
	console.log('=== DEBUGGING QUIZ LOAD ===');
	console.log('Environment - dev:', dev);
	console.log('Current working directory:', process.cwd());
	
	try {
		// Try multiple path strategies
		const possiblePaths = [
			path.resolve('static/quizzes'),
			path.resolve('./static/quizzes'),
			path.resolve(process.cwd(), 'static/quizzes'),
			path.resolve(process.cwd(), 'build/static/quizzes'),
			path.join(process.cwd(), 'static', 'quizzes')
		];
		
		console.log('Trying these paths:');
		possiblePaths.forEach((p, i) => {
			const exists = fs.existsSync(p);
			console.log(`${i + 1}. ${p} - EXISTS: ${exists}`);
			if (exists) {
				try {
					const files = fs.readdirSync(p);
					console.log(`   Files found: ${files.join(', ')}`);
				} catch (err) {
					console.log(`   Error reading directory: ${err.message}`);
				}
			}
		});
		
		// Use the first existing directory
		let quizDir = possiblePaths.find(p => fs.existsSync(p));
		
		if (!quizDir) {
			console.error('No quiz directory found in any of the expected locations');
			return { quizzes: [], debug: { error: 'Quiz directory not found', paths: possiblePaths } };
		}
		
		console.log(`Using quiz directory: ${quizDir}`);
		const files = fs.readdirSync(quizDir);
		console.log('Files in quiz directory:', files);

		const quizzes = files
			.filter(file => file.endsWith('.xlsx'))
			.map(file => {
				try {
					const fullPath = path.join(quizDir, file);
					console.log(`Processing file: ${file} at ${fullPath}`);
					
					const workbook = xlsx.readFile(fullPath);
					console.log(`Sheets in ${file}:`, Object.keys(workbook.Sheets));
					
					const slug = file.replace('.xlsx', '').toLowerCase();
					
					// Handle metadata
					const metaSheet = workbook.Sheets['meta'];
					let metadata;
					
					if (!metaSheet) {
						console.warn(`No meta sheet found in ${file}`);
						metadata = {
							title: slug.charAt(0).toUpperCase() + slug.slice(1),
							name: slug.charAt(0).toUpperCase() + slug.slice(1),
							description: `A quiz about ${slug}`,
							difficulty: 'Easy',
							timing: '5 mins'
						};
					} else {
						const metaArray = xlsx.utils.sheet_to_json(metaSheet);
						console.log(`Meta data for ${file}:`, metaArray[0]);
						metadata = metaArray[0] ?? {};
						
						// Ensure consistent property names
						metadata.title = metadata.title || metadata.name || slug.charAt(0).toUpperCase() + slug.slice(1);
						metadata.name = metadata.name || metadata.title;
						metadata.description = metadata.description || `A quiz about ${slug}`;
						metadata.difficulty = metadata.difficulty || 'Easy';
						metadata.timing = metadata.timing || '5 mins';
					}
					
					console.log(`Final quiz object for ${file}:`, { slug, metadata });
					return { slug, metadata };
				} catch (err) {
					console.error(`Error processing ${file}:`, err);
					return null;
				}
			})
			.filter(Boolean);

		console.log('Final quizzes array:', JSON.stringify(quizzes, null, 2));
		console.log('=== END DEBUGGING ===');
		
		return { 
			quizzes,
			debug: {
				quizDir,
				files,
				environment: dev ? 'development' : 'production'
			}
		};
		
	} catch (error) {
		console.error('Error in load function:', error);
		return { 
			quizzes: [], 
			debug: { 
				error: error.message,
				stack: error.stack,
				cwd: process.cwd()
			}
		};
	}
}