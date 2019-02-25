import * as glob from 'glob';
import {readFileSync} from 'fs';

function readFiles(path: string): string {
    const files = glob.sync(path);
    let string = '';
    for (const file of files) {
        string += readFileSync(file);
    }

    return string;
}

console.log('### Package @marcj/estdlib');
console.log('');
console.log('```typescript');
console.log(readFiles('../estdlib/dist/src/*.d.ts'));
console.log('```');

console.log('### Package @marcj/estdlib-rxjs');
console.log('');
console.log('```typescript');
console.log(readFiles('../estdlib-rxjs/dist/src/*.d.ts'));
console.log('```');
