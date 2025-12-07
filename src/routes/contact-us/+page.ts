// Create src/routes/contact/+page.ts
// This will ensure the contact page can be prerendered properly

export const prerender = true;

export async function load() {
    return {};
}