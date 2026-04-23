import SVGSpriter from 'svg-sprite';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const spriter = new SVGSpriter({
  dest: path.join(ROOT, 'public/icons'),
  mode: {
    symbol: {
      sprite: '../sprite.svg',
      inline: true,
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            { name: 'preset-default' },
            {
              name: 'removeAttrs',
              params: { attrs: ['fill', 'stroke', 'stroke-width', 'color'] },
            },
          ],
        },
      },
    ],
  },
});

const files = await glob('public/icons/source/**/*.svg', { cwd: ROOT });

if (files.length === 0) {
  console.warn('public/icons/source/ da SVG fayl topilmadi');
  process.exit(0);
}

files.forEach((file) => {
  const fullPath = path.resolve(ROOT, file);
  spriter.add(fullPath, path.basename(file), fs.readFileSync(fullPath, 'utf-8'));
});

const { result } = await spriter.compileAsync();

for (const output of Object.values(result.symbol)) {
  fs.mkdirSync(path.dirname(output.path), { recursive: true });
  fs.writeFileSync(output.path, output.contents);
}

// icon.types.ts auto-generate
const names = files.map((f) => path.basename(f, '.svg')).sort();

const types = `
  export const ICON_NAMES = ${JSON.stringify(names, null, 2)} as const;
  export type IconName = (typeof ICON_NAMES)[number];
`;

const typesPath = path.join(ROOT, 'src/app/shared/ui/icon/icon.types.ts');
fs.mkdirSync(path.dirname(typesPath), { recursive: true });
fs.writeFileSync(typesPath, types);

console.log(`sprite.svg — ${files.length} icons`);
console.log(`icon.types.ts — update`);