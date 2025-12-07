// SOLUTION 1: Enable prerendering for quiz detail pages
// Update src/routes/quizzes/[quiz_id]/+page.server.ts

import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';
import { error } from '@sveltejs/kit';

// ENABLE prerendering for quiz pages
export const prerender = true;

export async function load({ params }) {
	const { quiz_id } = params;

	try {
		console.log(`Loading quiz: ${quiz_id}`);
		
		const quizDir = path.resolve('static/quizzes');
		
		// Get all Excel files to find the right one
		const files = fs.readdirSync(quizDir);
		const excelFiles = files.filter(f => f.endsWith('.xlsx'));
		
		console.log('Available Excel files:', excelFiles);
		
		// Find the file that matches the quiz_id (case-insensitive)
		const matchingFile = excelFiles.find(file => 
			file.replace('.xlsx', '').toLowerCase() === quiz_id.toLowerCase()
		);
		
		if (!matchingFile) {
			console.error(`No matching file found for quiz_id: ${quiz_id}`);
			throw error(404, {
				message: 'Quiz not found',
				hint: `Available quizzes: ${excelFiles.map(f => f.replace('.xlsx', '').toLowerCase()).join(', ')}`
			});
		}
		
		const filePath = path.join(quizDir, matchingFile);
		console.log(`Using file: ${filePath}`);
		
		// Read and parse Excel file
		const workbook = xlsx.readFile(filePath);
		
		// Validate required sheets
		if (!workbook.Sheets['questions']) {
			throw error(500, 'Quiz file is missing questions sheet');
		}

		const questions = xlsx.utils.sheet_to_json(workbook.Sheets['questions']);
		const metaArray = xlsx.utils.sheet_to_json(workbook.Sheets['meta'] || {});
		const metadata = metaArray[0] ?? {
			name: quiz_id,
			title: quiz_id,
			description: 'Quiz description not available',
			difficulty: 'Unknown'
		};

		// Validate questions data
		const validQuestions = questions.filter(q => 
			q.Question && q.A && q.B && q.C && q.D && q.Correct
		);
		
		if (validQuestions.length === 0) {
			throw error(500, 'No valid questions found in quiz');
		}

		console.log(`Successfully loaded ${validQuestions.length} questions for ${quiz_id}`);

		return {
			quiz_id,
			meta: metadata,
			questions: validQuestions
		};

	} catch (err) {
		console.error(`Error loading quiz ${quiz_id}:`, err);
		
		if (err?.status) {
			throw err;
		}
		
		throw error(500, `Failed to load quiz: ${err.message}`);
	}
}

// CRITICAL: Define which quiz pages should be prerendered
export async function entries() {
	try {
		const quizDir = path.resolve('static/quizzes');
		
		if (!fs.existsSync(quizDir)) {
			console.warn('Quiz directory not found for entries generation');
			return [];
		}
		
		const files = fs.readdirSync(quizDir);
		console.log('[entries()] Found files:', files);

		const entries = files
			.filter(f => f.endsWith('.xlsx'))
			.map(f => ({ 
				quiz_id: f.replace('.xlsx', '').toLowerCase() 
			}));
			
		console.log('[entries()] Generated entries:', entries);
		return entries;
		
	} catch (error) {
		console.error('Error generating entries:', error);
		return [];
	}
}