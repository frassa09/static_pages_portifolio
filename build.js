import { execSync } from 'child_process';
import { existsSync, mkdirSync, cpSync } from 'fs';
import { join } from 'path';

const apps = [
  { name: 'portfolio-hub', path: 'portfolio-hub', output: '' },
  { name: 'agency-software', path: 'landing-pages/agency-software', output: 'agency-software' },
  { name: 'saas-crm', path: 'landing-pages/saas-crm', output: 'saas-crm' },
  { name: 'restaurant', path: 'landing-pages/restaurant', output: 'restaurant' },
  { name: 'clothing-store', path: 'landing-pages/clothing-store', output: 'clothing-store' },
  { name: 'education-institution', path: 'landing-pages/education-institution', output: 'education-institution' }
];

const distDir = join(process.cwd(), 'dist');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

for (const app of apps) {
  console.log(`Building ${app.name}...`);
  try {
    execSync(`npm run build --workspace=${app.path}`, { stdio: 'inherit' });
    const appDist = join(app.path, 'dist');
    const targetDist = join(distDir, app.output);
    if (existsSync(targetDist)) {
      cpSync(targetDist, join(distDir, app.output), { recursive: true });
    }
  } catch (error) {
    console.error(`Failed to build ${app.name}:`, error);
    process.exit(1);
  }
}

console.log('All apps built successfully!');
